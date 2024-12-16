import React from 'react'
import '../styles/pages/AboutMe.css'
import { Navbar } from '../components/common/Navbar'
import AllRoutesButton from '../components/extras/AllRoutesBtn'
import RippleBackground from '../components/common/RippleBackground'

export const AboutMe = () => {
  // const handleScrollToSection = id => {
  //   const section = document.getElementById(id)
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  //   }
  // }

  return (
    <div className="about-me">
      <RippleBackground />
      <Navbar />
      <AllRoutesButton />
      <section>Coming Soon</section>
    </div>
  )
}
