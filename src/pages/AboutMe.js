import React, { useState, useEffect } from 'react'
import '../styles/AboutMe.css'
import { Navbar } from '../components/Navbar'
import RippleBackground from '../components/RippleBackground'

export const AboutMe = () => {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour >= 6 && currentHour < 18) {
      setGreeting('Good Morning')
    } else {
      setGreeting('Good Evening')
    }
  }, [])

  const sections = [
    { id: 'section-1', title: `${greeting}, Fellow Human!`, content: "Welcome to my portfolio! I'm Amina." }, 
    // { id: 'section-2', title: 'I am a Developer', content: 'Building creative and functional applications.' },
    // { id: 'section-3', title: 'Motto in Life', content: '"Your inspiring motto here"' },
    { id: 'section-4', title: 'Things I Like to Do', content: 'Coding, reading, exploring new technologies...' },
  ]
  return (
    <div className="about-me">
      <Navbar />
      {sections.map((section, index) => (
        <section key={index} className={`hero ${index === 0 ? 'first-section' : index % 2 === 0 ? 'odd' : 'even'}`}>
          {index === 0 && <RippleBackground />} {/* Add Ripple Background */}
          <div className="hero-inner">
            <h2 className="hero__title">{section.title}</h2>
            <p className="hero__content">{section.content}</p>
          </div>
        </section>
      ))}
    </div>
  )
}
