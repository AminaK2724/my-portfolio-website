import React from 'react'
import '../styles/pages/AboutMe.css'
import { Navbar } from '../components/common/Navbar'
import Greeting from '../components/about-me-sections/Greeting'
import Intro from '../components/about-me-sections/Intro'
import Hobbies from '../components/about-me-sections/Hobbies'

export const AboutMe = () => {
  const handleScrollToSection = id => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="about-me">
      <Navbar />
      <Greeting onScroll={handleScrollToSection} />
      <Intro />
      <Hobbies />
    </div>
  )
}
