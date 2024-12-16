import React from 'react'
import '../styles/pages/Work.css'
import { Navbar } from '../components/common/Navbar'
import AllRoutesButton from '../components/extras/AllRoutesBtn'

const projects = [
  {
    title: 'Translation App',
    description: 'Personal text-to-speech translator',
  },
  {
    title: 'E-Commerce Website',
    description: 'A mock online store project',
  },
  {
    title: 'AI Chatbot',
    description: 'Conversational assistant demo',
  },
  {
    title: 'Portfolio Website',
    description: 'Minimalistic showcase site',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather forecast app',
  },
  {
    title: 'Task Manager',
    description: 'Manage your daily tasks efficiently',
  },
  {
    title: 'Blog Platform',
    description: 'A clean, responsive blog system',
  },
  {
    title: 'Game App',
    description: 'Fun and interactive game demo',
  },
]

const Work = () => {
  return (
    <div className="about-me content-sections">
      <Navbar />
      <section id="section-2" className="intro-section">
        <header className="intro-header">
          <h2 className="intro-title">Projects</h2>
          <p className="intro-description">A collection of my work demonstrating technical skills and creativity.</p>
        </header>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-preview-placeholder">Preview</div>
              <div className="project-hover-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <AllRoutesButton />
    </div>
  )
}

export default Work
