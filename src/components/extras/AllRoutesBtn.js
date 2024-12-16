import React from 'react'
import { useLocation } from 'react-router-dom'
import '../../styles/extras/AllRoutesBtn.css'

const AllRoutesBtn = () => {
  const location = useLocation() // Get the current route
  const isOnAllRoutesPage = location.pathname === '/AllRoutes'

  return (
    <a href={isOnAllRoutesPage ? '/' : '/AllRoutes'} className="all-routes-btn">
      {isOnAllRoutesPage ? 'Go Back' : 'All Routes →'}
    </a>
  )
}

export default AllRoutesBtn
