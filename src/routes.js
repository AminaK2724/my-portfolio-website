import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './components/pages/Home'
import Work from './components/pages/Work'
import ContactMe from './components/pages/ContactMe'
import AllRoutes from './components/pages/AllRoutes'
import AboutMe from './components/pages/AboutMe'
import ProjectPage from './components/pages/ProjectPage'

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
  {
    path: '/projects/:projectId',
    element: <ProjectPage />,
  },
])
