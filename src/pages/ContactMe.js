import React, { useRef, useEffect, useState } from 'react'
import '../styles/pages/ContactMe.css'

const ContactMe = () => {
  const sectionRef = useRef(null)
  const [bgOpacity, setBgOpacity] = useState(0) // Initial background opacity

  useEffect(() => {
    const section = sectionRef.current

    const handleScroll = () => {
      if (section) {
        const sectionTop = section.getBoundingClientRect().top
        const sectionHeight = section.offsetHeight
        const viewportHeight = window.innerHeight

        // Calculate visibility as a value between 0 and 1
        const visiblePercentage = Math.max(
          0,
          Math.min(1, 1 - Math.abs(sectionTop - viewportHeight / 2) / (sectionHeight / 2)),
        )

        // Update the background opacity based on visibility
        setBgOpacity(visiblePercentage)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="contact-section" ref={sectionRef} className="contact-section" style={{ '--bg-opacity': bgOpacity }}>
      <div className="container">
        <div className="front side">
          <div className="content">
            <h1>Amina Khan</h1>
            <p>
              I'm a software developer and data enthusiast specializing in full-stack web development, database systems,
              and creative problem-solving. Feel free to reach out!
            </p>
          </div>
        </div>
        <div className="back side">
          <div className="content">
            <h1>Contact Me</h1>
            <form>
              <label>Your Name :</label>
              <input type="text" placeholder="Your Name" />
              <label>Your E-mail :</label>
              <input type="email" placeholder="example@mail.com" />
              <label>Your message :</label>
              <textarea placeholder="Write your message here"></textarea>
              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe
