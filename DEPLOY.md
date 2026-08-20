# Deploying Medskytech to Vercel

This deploys the whole thing (site + working contact form) as one Vercel project.
No separate backend server needed. The Express `server/` folder is only for local
development; Vercel uses the serverless function in `client/api/` instead.

Total time: about 10 minutes.

---

## What you need
- A GitHub account (free)
- A Vercel account (free) — sign up at https://vercel.com with your GitHub
- (Optional) A Resend account for contact-form emails — https://resend.com

---

## Step 1 — Put the code on GitHub

You have two options.

### Option A: Upload through GitHub website (easiest, no tools)
1. Go to https://github.com/new
2. Repository name: `medskytech`, set to **Private**, click **Create repository**.
3. On the next page click **uploading an existing file**.
4. Drag in the CONTENTS of the `client` folder (not the folder itself — the
   `index.html`, `src`, `api`, `package.json`, `vercel.json`, etc. should sit at
   the repo root). Commit.

> Why only `client`? That's the deployable app. The `server/` folder is optional
> and only for running a database locally — Vercel doesn't need it.

### Option B: Command line (if you have git installed)
```bash
cd medskytech/client
git init
git add .
git commit -m "Medskytech website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/medskytech.git
git push -u origin main
```

---

## Step 2 — Import to Vercel
1. Go to https://vercel.com/new
2. Pick your `medskytech` repo → **Import**.
3. Vercel auto-detects Vite. Confirm these settings (they should fill in automatically):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**. Wait ~1 minute. You'll get a live URL like
   `medskytech.vercel.app`.

That's it — the site is live. The contact form already works (leads are logged in
Vercel's function logs). To get those leads by email, do Step 3.

---

## Step 3 — Turn on contact-form emails (optional, recommended)
1. Sign up free at https://resend.com.
2. **Add your domain** (medskytech.com) and add the DNS records Resend shows you.
   Once verified, you can send from `noreply@medskytech.com`.
   (No domain yet? Use Resend's `onboarding@resend.dev` as the FROM address to test.)
3. Create an **API Key** in Resend.
4. In Vercel: your project → **Settings → Environment Variables**. Add:

   | Name              | Value                          |
   |-------------------|--------------------------------|
   | `RESEND_API_KEY`  | your Resend key (`re_...`)      |
   | `LEAD_FROM_EMAIL` | `noreply@medskytech.com`        |
   | `LEAD_TO_EMAIL`   | `info@medskytech.com`           |

5. Go to **Deployments → ... → Redeploy** so the new variables take effect.

Now every form submission emails you at `LEAD_TO_EMAIL`, with the sender's email
as reply-to.

---

## Step 4 — Connect your real domain
1. Vercel project → **Settings → Domains**.
2. Type `medskytech.com` → **Add**.
3. Vercel shows you DNS records. Add them at your domain registrar (or point the
   nameservers to Vercel). Propagation is usually a few minutes to an hour.
4. Vercel issues the HTTPS certificate automatically.

> If the domain currently points at the existing WordPress site, adding it here
> will switch it to the new site once DNS updates. Keep the old hosting until
> you've confirmed the new site is working on the live domain.

---

## Updating the site later
Any push to your GitHub `main` branch auto-deploys. Edit a file, commit, and
Vercel rebuilds within a minute. No manual redeploy needed.

---

## Quick troubleshooting
- **Blank page / 404 on refresh of a sub-page:** confirm `vercel.json` is at the
  repo root. It rewrites all routes to `index.html` for the single-page app.
- **Form says "couldn't send":** you set `RESEND_API_KEY` but the FROM address
  isn't a verified sender in Resend. Verify the domain or use `onboarding@resend.dev`.
- **Images missing:** confirm the `public/img/` folder made it into the repo.
- **Build fails:** check the build log. Locally, `npm install && npm run build`
  should succeed first.
