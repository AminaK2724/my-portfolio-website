import React from 'react'
import '../../styles/pages/Home.css'
import AllRoutesButton from '../extras/AllRoutesBtn'
import RippleBackground from '../common/RippleBackground'
import Logo from '../extras/Logo'

export const Home = () => {
  const headingText = "Hello, I'm Amina."

  return (
    <div className="about-me">
      <AllRoutesButton />
      <RippleBackground />

      <div className="about-me-logo">
        <Logo />
      </div>
      <div className="about-me-content">
        <div className="about-me-text">
          <h1 className="about-me-heading">
            {' '}
            {headingText.split('').map((letter, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.2}s`, whiteSpace: 'pre' }}>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
          <p className="about-me-description">
            Welcome to my portfolio! I'm a full-stack developer with a keen eye for graphic design and a passion for
            creating modern, responsive web applications.
          </p>
        </div>
        <div className="hero__buttons">
          <a href="/about-me" className="hero-btn learn-more-btn">
            Learn More About Me →
          </a>
          <a href="/work" className="hero-btn projects-btn">
            Projects →
          </a>
        </div>
      </div>
    </div>
  )
}
