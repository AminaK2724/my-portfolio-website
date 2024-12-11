// src/components/sections/Section1.js
import React, { useState, useEffect } from 'react'
import RippleBackground from '../common/RippleBackground'

const Greeting = ({ onScroll }) => {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const currentHour = new Date().getHours()
    setGreeting(currentHour >= 6 && currentHour < 18 ? 'Good Morning' : 'Good Evening')
  }, [])
  return (
    <section id="section-1" className="hero first-section">
      <RippleBackground />
      <div className="hero-inner">
        <h2 className="hero__title">{greeting}, Fellow Human!</h2>
        <p className="hero__content">Welcome to my portfolio! I'm Amina.</p>
      </div>
      <a
        href="#section-2"
        onClick={e => {
          e.preventDefault()
          onScroll('section-2')
        }}
        className="learn-more-btn"
      >
        Learn More About Me ↓
      </a>
    </section>
  )
}

export default Greeting
