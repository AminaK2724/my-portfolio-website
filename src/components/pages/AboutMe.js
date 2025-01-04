import React from 'react'
import RippleBackground from '../common/RippleBackground'
import Timeline from '../about-me-sections/Timeline'
import '../../styles/pages/AboutMe.css'
import AllRoutesButton from '../extras/AllRoutesBtn'

const AboutMe = () => {
  return (
    <div>
      <RippleBackground />
      <AllRoutesButton />
      <section className="me">
        <div className="me-content">
          <h1 className="me-heading">Hello, I'm Amina</h1>
          <p className="me-description">
            A passionate full-stack developer and graphic designer who thrives on solving complex problems, creating
            stunning user interfaces, and continuously learning new technologies.
          </p>
        </div>
        <div className="me-image">
          <img src="/images/amina-profile.png" alt="Amina" />
        </div>
      </section>
      <section className="timeline">
        <Timeline />
      </section>
    </div>
  )
}

export default AboutMe
