import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {AboutMe} from './pages/AboutMe'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AboutMe />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <ContactMe />,
  },
])
