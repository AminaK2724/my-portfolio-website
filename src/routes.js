import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {AboutMe} from './pages/AboutMe'
import Work from './pages/Work'
import ContactMe from './pages/ContactMe'
import Greeting from './pages/Greeting'
import AllRoutes from './pages/AllRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Greeting />,
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
