import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import { useStrokeDraw } from './hooks'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import ServiceDetail from './pages/ServiceDetail'
import ProcessPage from './pages/ProcessPage'
import WhyUsPage from './pages/WhyUsPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

let lenisInstance = null

function ScrollToTop() {
  const { pathname } = useLocation()
  useStrokeDraw([pathname])
  useEffect(() => {
    if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    lenisInstance = lenis
    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const el = document.querySelector(a.getAttribute('href'))
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el, { offset: -72 })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisInstance = null
      document.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main className="bg-ink">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
