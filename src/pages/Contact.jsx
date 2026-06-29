import coursesHero from '../assets/Courses/courses-hero.jpg'
import { useState } from 'react'

const courseOptions = [
  // Career Courses
  { group: 'Career Courses', label: 'Aptech Certified Network Specialist (ACNS) — 2 Years' },
  { group: 'Career Courses', label: 'Advance Diploma in Software Engineering (ADSE) — 2 Years' },
  // Smart Professional Courses
  { group: 'Smart Professional Courses', label: 'Python Programming — 3 Months' },
  { group: 'Smart Professional Courses', label: 'Java Programming — 3 Months' },
  { group: 'Smart Professional Courses', label: 'Flutter & Mobile Dev — 4 Months' },
  { group: 'Smart Professional Courses', label: 'AI / Machine Learning — 2 Years' },
  { group: 'Smart Professional Courses', label: 'Software Development — 6 Months' },
  { group: 'Smart Professional Courses', label: 'Data Science / Data Analytics — 6 Months' },
  { group: 'Smart Professional Courses', label: 'Digital Marketing — 3 Months' },
  { group: 'Smart Professional Courses', label: 'UI/UX & Graphic Design — 4 Months' },
  { group: 'Smart Professional Courses', label: 'Cybersecurity & Ethical Hacking — 6 Months' },
  { group: 'Smart Professional Courses', label: '.NET Development — 6 Months' },
  { group: 'Smart Professional Courses', label: 'SQL & Database Management — 6 Months' },
  { group: 'Smart Professional Courses', label: 'Android Development — 6 Months' },
  { group: 'Smart Professional Courses', label: 'PHP & Web Development — 6 Months' },
  { group: 'Smart Professional Courses', label: 'Ethical Hacking — 6 Months' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', course: '', message: '' })
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
          course: formData.course,
          message: formData.message,
        }),
      })
      const data = await res.json()
      if (data.ok) {
        setStatus('success')
        setFormData({ fullName: '', phone: '', email: '', course: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  const groups = [...new Set(courseOptions.map(c => c.group))]

  return (
    <div>
      <div className="relative w-full h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${coursesHero})`, backgroundAttachment:'fixed', backgroundSize:'cover', backgroundPosition:'center' }}>
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

            {/* Email */}
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

            {/* Office */}
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

            {/* Phone */}
            <div className="flex gap-5 items-start mb-10">
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

            {/* Social Icons */}
            <div className="flex gap-4 items-start mb-10">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-lg mb-1">Follow Us</h4>
                <p className="text-gray-500 text-sm mb-3">Stay connected on social media.</p>
                <div className="flex gap-3">
                  {/* Facebook */}
                  <a href="https://web.facebook.com/aceakowonjolagos" target="_blank" rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-yellow-400 flex items-center justify-center transition-colors group">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-yellow-400 flex items-center justify-center transition-colors group">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a href="https://youtube.com" target="_blank" rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-yellow-400 flex items-center justify-center transition-colors group">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  {/* WhatsApp */}
                  <a href="https://wa.me/2347026161193" target="_blank" rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-yellow-400 flex items-center justify-center transition-colors group">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
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
                <label className="text-gray-700 font-semibold text-sm mb-2 block">Course of Interest</label>
                <select name="course" value={formData.course} onChange={handleChange} required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary bg-white appearance-none">
                  <option value="" disabled>Select a course...</option>
                  {groups.map(group => (
                    <optgroup key={group} label={group}>
                      {courseOptions.filter(c => c.group === group).map((c, i) => (
                        <option key={i} value={c.label}>{c.label}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
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