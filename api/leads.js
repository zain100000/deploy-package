// Vercel Serverless Function — handles the contact form.
// Deployed automatically at /api/leads when you push to Vercel.
//
// This version emails the lead to you via Resend (free tier: 3,000 emails/mo).
// If you'd rather store leads in a database, see the MongoDB note at the bottom.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, email, service, message } = req.body || {}

  if (!name || !phone || !service) {
    return res.status(400).json({ error: 'Name, phone, and service are required.' })
  }

  // Basic length guards
  if (String(name).length > 120 || String(message || '').length > 2000) {
    return res.status(400).json({ error: 'Input too long.' })
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const TO_EMAIL = process.env.LEAD_TO_EMAIL || 'info@medskytech.com'
  const FROM_EMAIL = process.env.LEAD_FROM_EMAIL // must be a verified sender in Resend

  // If email isn't configured yet, still accept the lead so the form works,
  // and log it (visible in Vercel → your project → Logs).
  if (!RESEND_API_KEY || !FROM_EMAIL) {
    console.log('New lead (email not configured):', { name, phone, email, service, message })
    return res.status(201).json({ ok: true, note: 'Lead received (email delivery not configured).' })
  }

  try {
    const html = `
      <h2>New enquiry from medskytech.com</h2>
      <p><strong>Name:</strong> ${escape(name)}</p>
      <p><strong>Phone:</strong> ${escape(phone)}</p>
      <p><strong>Email:</strong> ${escape(email || '—')}</p>
      <p><strong>Service:</strong> ${escape(service)}</p>
      <p><strong>Message:</strong><br>${escape(message || '—').replace(/\n/g, '<br>')}</p>
    `

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email || undefined,
        subject: `New enquiry: ${service} — ${name}`,
        html,
      }),
    })

    if (!r.ok) {
      const detail = await r.text()
      console.error('Resend error:', detail)
      return res.status(502).json({ error: 'Could not send. Please call us directly.' })
    }

    return res.status(201).json({ ok: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}

// Minimal HTML escaping so form input can't inject markup into the email
function escape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/*
  WANT TO STORE LEADS IN MONGODB INSTEAD OF EMAIL?
  1. npm i mongodb
  2. Set MONGODB_URI in Vercel env vars (MongoDB Atlas free tier).
  3. Replace the email block above with:

     import { MongoClient } from 'mongodb'
     let cached = global._mongo
     if (!cached) cached = global._mongo = { conn: null }
     async function db() {
       if (cached.conn) return cached.conn
       const client = new MongoClient(process.env.MONGODB_URI)
       await client.connect()
       cached.conn = client.db('medskytech')
       return cached.conn
     }
     // inside handler:
     const database = await db()
     await database.collection('leads').insertOne({
       name, phone, email, service, message, createdAt: new Date(),
     })
     return res.status(201).json({ ok: true })
*/
