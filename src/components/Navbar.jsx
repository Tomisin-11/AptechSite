import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
<NavLink to="/" className="flex items-center ml-18">
  <img
  className="h-auto w-32"
    src="/src/assets/Navbar/image.png"
    alt="Aptech Computer Education"
     
  />
</NavLink>

        {/* Desktop Links */}
        <ul className="hidden mr-20  md:flex items-center gap-5">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
  isActive
    ? 'text-primary font-semibold text-sm'
    : 'text-gray-700 hover:text-primary font-medium text-sm transition-colors'
}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
  isActive
    ? 'text-primary font-semibold text-sm'
    : 'text-gray-700 hover:text-primary font-medium text-sm transition-colors'
}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
  isActive
    ? 'text-primary font-semibold text-sm'
    : 'text-gray-700 hover:text-primary font-medium text-sm transition-colors'
}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
  isActive
    ? 'text-primary font-semibold text-sm'
    : 'text-gray-700 hover:text-primary font-medium text-sm transition-colors'
}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {['/', '/about', '/courses', '/contact'].map((path, i) => {
            const labels = ['Home', 'About', 'Courses', 'Contact']
            return (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
  isActive
    ? 'text-primary font-semibold text-sm'
    : 'text-gray-700 hover:text-primary font-medium text-sm transition-colors'
}
              >
                {labels[i]}
              </NavLink>
            )
          })}
        </div>
      )}
    </nav>
  )
}