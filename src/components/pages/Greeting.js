import React, { useEffect, useRef, useState } from 'react'
import RippleBackground from '../components/common/RippleBackground'
import Quote from '../components/about-me-sections/Quote'
import '../styles/pages/Greeting.css'
import AllRoutesButton from '../components/extras/AllRoutesBtn'

const Greeting = ({ onScroll }) => {
  const [isVisible, setIsVisible] = useState(false)
  const titleRef = useRef(null)
  const [greeting, setGreeting] = useState('')
  const heroTitle = greeting + ', Fellow Human!'

  useEffect(() => {
    // Determine greeting based on time
    const currentHour = new Date().getHours()
    setGreeting(currentHour >= 6 && currentHour < 18 ? 'Good Morning' : 'Good Evening')

    // Intersection observer for animation
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target) // Stop observing once visible
          }
        })
      },
      { threshold: 0.5 }, // Trigger when 50% of the title is in view
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="gradient">
      <section id="section-1" className="hero first-section">
        <RippleBackground />
        <div className="hero-inner">
          <h1 ref={titleRef} className="hero__title">
            {heroTitle.split('').map((char, index) => (
              <span
                key={index}
                className={`bounce-letter ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.08 + 1}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p className="hero__content">Welcome to my portfolio! I'm Amina. I am a Full Stack Developer.</p>
          <div className="hero__buttons">
            <a href="/about-me" className="hero-btn learn-more-btn">
              Learn More About Me →
            </a>
            <a href="/work" className="hero-btn projects-btn">
              Projects →
            </a>
          </div>
        </div>
        <Quote />
        <AllRoutesButton />
      </section>
    </div>
  )
}

export default Greeting
