import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation() // Get the current path

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev)
  }

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active-link' : ''}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>
            Contact Me
          </Link>
        </li>
        <li className="dropdown-container" ref={dropdownRef}>
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
        </li>
      </ul>
    </nav>
  )
}
