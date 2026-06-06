import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/Navbar/image.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeAll = () => setMenuOpen(false)

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" onClick={closeAll}>
            <img src={logo} alt="Aptech Computer Education" className="h-14 w-auto" />
          </NavLink>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-7">
            <li>
              <NavLink to="/" end className={({ isActive }) =>
                isActive ? 'text-primary font-semibold text-sm' : 'text-gray-700 hover:text-primary font-medium text-sm transition-colors'
              }>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) =>
                isActive ? 'text-primary font-semibold text-sm' : 'text-gray-700 hover:text-primary font-medium text-sm transition-colors'
              }>About</NavLink>
            </li>
            <li>
              <NavLink to="/courses" className={({ isActive }) =>
                isActive ? 'text-primary font-semibold text-sm' : 'text-gray-700 hover:text-primary font-medium text-sm transition-colors'
              }>Courses</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) =>
                isActive ? 'text-primary font-semibold text-sm' : 'text-gray-700 hover:text-primary font-medium text-sm transition-colors'
              }>Contact</NavLink>
            </li>
            <li>
              <Link to="/contact" className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                Apply Now
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
            <NavLink to="/" end onClick={closeAll} className={({ isActive }) => `py-3 border-b border-gray-100 text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700'}`}>Home</NavLink>
            <NavLink to="/about" onClick={closeAll} className={({ isActive }) => `py-3 border-b border-gray-100 text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700'}`}>About</NavLink>
            <NavLink to="/courses" onClick={closeAll} className={({ isActive }) => `py-3 border-b border-gray-100 text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700'}`}>Courses</NavLink>
            <NavLink to="/contact" onClick={closeAll} className={({ isActive }) => `py-3 border-b border-gray-100 text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700'}`}>Contact</NavLink>
            <Link to="/contact" onClick={closeAll} className="mt-3 bg-primary text-white text-sm font-semibold px-5 py-3 rounded-lg text-center hover:opacity-90">Apply Now</Link>
          </div>
        )}
      </nav>
    </>
  )
}
