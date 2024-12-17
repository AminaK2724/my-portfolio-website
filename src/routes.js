import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {Home} from './pages/Home'
import Work from './pages/Work'
import ContactMe from './pages/ContactMe'
import AllRoutes from './pages/AllRoutes'
import AboutMe from './pages/AboutMe'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/work',
    element: <Work />,
  },
  {
    path: '/about-me',
    element: <AboutMe />,
  },
  {
    path: '/contact',
    element: <ContactMe />,
  },
  {
    path: '/AllRoutes',
    element: <AllRoutes />,
  },
])
