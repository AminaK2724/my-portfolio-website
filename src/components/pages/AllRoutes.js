import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/pages/AllRoutes.css'
import AllRoutesBtn from '../extras/AllRoutesBtn'
import RippleBackground from '../common/RippleBackground'

const AllRoutes = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true) // Trigger slide-in animation when the component mounts
  }, [])

  const handleGoBack = () => {
    setIsVisible(false) // Trigger the slide-out animation
    setTimeout(() => {
      window.history.back() // Navigate back after animation
    }, 500) // Match the animation duration
  }

  return (
    <div className={`all-routes-page ${isVisible ? 'slide-in' : 'slide-out'}`}>
      <RippleBackground />
      <h1>Explore All Pages</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-me">About Me</Link>
        </li>
        <li>
          <Link to="/work">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
      <AllRoutesBtn onGoBack={handleGoBack} />
    </div>
  )
}

export default AllRoutes
