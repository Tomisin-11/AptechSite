import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      {/* Pre-footer bar */}
      <div className="bg-gray-100 py-4 px-6 text-center text-sm text-gray-600">
        Contact or visit our centre{' '}
        <Link to="/contact" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
          Enroll now ›
        </Link>
      </div>

      {/* Main footer */}
      <footer className="bg-[#111827] text-gray-400 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Col 1 - Logo + description */}
          <div>
            <img
              src="/src/assets/Navbar/image.png"
              alt="Aptech Computer Education"
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              IT is required in every industry. Today, the world is moving
              towards automation of skills, an area in which IT is urgently
              required. Enroll and get your skills now !!!
            </p>
          </div>

          {/* Col 2 - More Info */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
              More Info
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Courses', path: '/courses' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Follow Us */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-6">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Google */}
              <a href="https://google.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.35 11.1H12v2.8h5.35c-.23 1.25-.94 2.3-2 3v2.5h3.24c1.9-1.75 3-4.33 3-7.4 0-.7-.06-1.3-.24-1.9z" />
                  <path d="M12 22c2.7 0 4.96-.9 6.62-2.4l-3.24-2.5c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.76-5.6-4.13H3.06v2.57C4.7 19.87 8.1 22 12 22z" />
                  <path d="M6.4 13.93A5.96 5.96 0 016.1 12c0-.67.12-1.32.3-1.93V7.5H3.06A9.98 9.98 0 002 12c0 1.61.38 3.13 1.06 4.5l3.34-2.57z" />
                  <path d="M12 6.3c1.47 0 2.8.5 3.84 1.5l2.87-2.87C16.95 3.3 14.7 2.3 12 2.3 8.1 2.3 4.7 4.43 3.06 7.5L6.4 10.07C7.2 7.76 9.4 6.3 12 6.3z" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>
            </div>

            
             <a href="/contact"
              className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition-colors text-sm"
            >
              Enroll Now ›
            </a>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <div>
                <span className="text-yellow-400 font-semibold">Email: </span>
                <span>aptechakowonjo@gmail.com</span>
              </div>
              <div>
                <span className="text-yellow-400 font-semibold">Telephone: </span>
                <span>(+234) 7026161193<br />(+234) 9115633962</span>
              </div>
              <div>
                <span className="text-yellow-400 font-semibold">Office opens: </span>
                <span>Mon - Saturday<br />9.00AM - 5.00PM GMT +1</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          © 2026 Aptech Akowonjo. All rights reserved.
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      
      <a   href="https://wa.me/2347026161193"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  )
}