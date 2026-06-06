import { useState } from 'react'


export default function Contact() {
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')
  try {
    const res = await fetch('https://formspree.io/f/mgoboryb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      }),
    })
    const data = await res.json()
    if (data.ok) {
      setStatus('success')
      setFormData({ fullName: '', phone: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
  } catch (error) {
    console.error(error)
    setStatus('error')
  }
}

  return (
    <div>
      <div className="relative w-full h-[60vh] flex items-center justify-center"
        style={{ backgroundImage:"url('/src/assets/Courses/courses-hero.jpg')", backgroundAttachment:'fixed', backgroundSize:'cover', backgroundPosition:'center' }}>
        <div className="absolute inset-0 bg-black/75" />
        <div data-aos="fade-up" className="relative z-10 text-center">
          <h1 className="text-white font-bold text-5xl md:text-4xl">Contact <span className="text-yellow-400">Us</span></h1>
          <p data-aos="fade-up" data-aos-delay="100" className="text-white/80 mt-4 text-lg">Tell us what you are looking for and we will get back to you as soon as possible.</p>
        </div>
      </div>

      <div className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div data-aos="fade-right">
            <h2 className="text-gray-900 font-bold text-4xl mb-3">Chat with our team</h2>
            <p className="text-gray-500 text-base mb-12">We'd love to hear from you.</p>

            <div className="flex gap-5 items-start mb-10">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-lg mb-1">Email</h4>
                <p className="text-gray-500 text-sm mb-1">Our friendly team is here to help.</p>
                <a href="mailto:aptechakowonjo@gmail.com" className="text-yellow-500 text-sm hover:underline">aptechakowonjo@gmail.com</a>
              </div>
            </div>

            <div className="flex gap-5 items-start mb-10">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-lg mb-1">Office</h4>
                <p className="text-gray-500 text-sm mb-1">Come say hello at our office HQ.</p>
                <a href="https://maps.app.goo.gl/cCie6uBJ3trkSF6s8" target="_blank" rel="noreferrer" className="text-yellow-500 text-sm hover:underline">
                  2 Shasha road, Opposite Dopemu Under<br/>bridge, Akowonjo Lagos
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-lg mb-1">Phone</h4>
                <p className="text-gray-500 text-sm mb-1">Mon-Sat from 8am to 5pm.</p>
                <a href="tel:+2347026161193" className="text-yellow-500 text-sm block hover:underline">+234 (0) 7026161193</a>
                <a href="tel:+2349115633962" className="text-yellow-500 text-sm block hover:underline">+234 (0) 9115633962</a>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="text-gray-700 font-semibold text-sm mb-2 block">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary bg-white" />
              </div>
              <div>
                <label className="text-gray-700 font-semibold text-sm mb-2 block">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Your Whatsapp Number" required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary bg-white" />
              </div>
              <div>
                <label className="text-gray-700 font-semibold text-sm mb-2 block">Email address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="johndoe@example.com" required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary bg-white" />
              </div>
              <div>
                <label className="text-gray-700 font-semibold text-sm mb-2 block">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows={6} required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary bg-white resize-none" />
              </div>
              {status === 'success' && <p className="text-green-600 text-sm font-medium"> Message sent! We'll get back to you soon.</p>}
              {status === 'error' && <p className="text-red-600 text-sm font-medium"> Something went wrong. Please try again or call us directly.</p>}
              <button type="submit" disabled={status === 'sending'}
                className="w-full bg-primary text-white font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity text-base disabled:opacity-60">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full h-[500px]">
        <iframe title="Aptech Akowonjo Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1!2d3.3072917!3d6.6069968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9171cc1003e7%3A0x41b094d0120d48e7!2sAptech%20Computer%20Education%2C%20Akowonjo!5e0!3m2!1sen!2sng!4v1234567890"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  )
}
