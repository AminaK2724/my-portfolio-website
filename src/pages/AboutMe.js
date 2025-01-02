import React from 'react'
import RippleBackground from '../components/common/RippleBackground'
import { Navbar } from '../components/common/Navbar'
import Timeline from '../components/about-me-sections/Timeline'
import '../styles/pages/AboutMe.css'

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <RippleBackground />
      <section className="me">
        <div className="me-content">
          <h1 className="me-heading">Hello, I'm Amina</h1>
          <p className="me-description">
            A passionate full-stack developer and graphic designer who thrives on solving complex problems, creating
            stunning user interfaces, and continuously learning new technologies.
          </p>
        </div>
        <div className="me-image">
          <img src="/path-to-your-image.jpg" alt="Amina" />
        </div>
      </section>
      <section className="timeline">
        <Timeline />
      </section>
    </div>
  )
}

export default AboutMe
