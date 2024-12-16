import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/components/common/Navbar.css'

export const Navbar = () => {
  const location = useLocation() // Get the current path

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work" className={location.pathname === '/work' ? 'active-link' : ''}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/about-me" className={location.pathname === '/about-me' ? 'active-link' : ''}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>
            Contact Me
          </Link>
        </li>
        {/* <li className="dropdown-container" ref={dropdownRef}>
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            Links
          </button>
          {dropdownOpen && (
            <ul className="dropdown">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          )}
        </li> */}
      </ul>
    </nav>
  )
}
