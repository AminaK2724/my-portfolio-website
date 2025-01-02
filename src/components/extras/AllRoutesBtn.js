import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../styles/extras/AllRoutesBtn.css'

const AllRoutesBtn = ({ onGoBack, onNavigate }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = () => {
    if (location.pathname === '/AllRoutes') {
      if (onGoBack) {
        onGoBack() // Trigger slide-out animation
      }
    } else {
      if (onNavigate) {
        onNavigate() // Trigger slide-in animation
      }
      navigate('/AllRoutes') // Navigate to All Routes
    }
  }

  return (
    <button onClick={handleClick} className="all-routes-btn">
      {location.pathname === '/AllRoutes' ? 'Go Back' : 'All Routes →'}
    </button>
  )
}

export default AllRoutesBtn
