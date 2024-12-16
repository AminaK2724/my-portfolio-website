import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/AllRoutes.css'
import AllRoutesBtn from '../components/extras/AllRoutesBtn'
import RippleBackground from '../components/common/RippleBackground'

const AllRoutes = () => {
  return (
    <div className="gradient all-routes-page">
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
      <AllRoutesBtn />
    </div>
  )
}

export default AllRoutes
