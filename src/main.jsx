import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.jsx'

const isMobile = window.innerWidth < 768

AOS.init({
  duration: isMobile ? 400 : 800,
  once: true,
  // On mobile, disable fade-left/right and reduce offset so elements aren't cut off
  disable: false,
  offset: isMobile ? 30 : 100,
  easing: 'ease-out',
})

// On mobile, override all AOS animations to just fade-up (prevents elements hidden off-screen)
if (isMobile) {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-aos]').forEach(el => {
      const anim = el.getAttribute('data-aos')
      if (anim === 'fade-left' || anim === 'fade-right') {
        el.setAttribute('data-aos', 'fade-up')
      }
      // Remove delays on mobile so sections don't stagger-hide
      el.removeAttribute('data-aos-delay')
    })
    AOS.refresh()
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)