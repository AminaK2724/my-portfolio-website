import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/pages/Work.css'
import AllRoutesButton from '../components/extras/AllRoutesBtn'

const projects = [
  {
    id: 'translation-app',
    title: 'Translation App',
    category: 'Personal Tool',
    year: '2023',
    description: 'A personal text-to-speech translator designed for accessibility and convenience.',
    redirectUrl: '/projects/translation-app',
    images: '/images/translatePreview.png',
    tags: ['Accessibility', 'Text-to-Speech', 'React'],
  },
  {
    id: 'huffman-code',
    title: 'Huffman Coding Platform',
    category: 'Web Application',
    year: '2022',
    description: 'A simple Huffman coding application for encoding and decoding.',
    redirectUrl: '/projects/huffman-code-app',
    images: '/images/huffman-preview.png',
    tags: ['Algorithm', 'Compression', 'Spring Boot'],
  },
  {
    id: 'e-commerce-website',
    title: 'E-Commerce Website',
    category: 'Web Application',
    year: '2022',
    description: 'A mock online store with modern UI/UX and seamless checkout features.',
    redirectUrl: '/projects/e-commerce-website',
    images: '/images/image2.png',
    tags: ['E-Commerce', 'UI/UX', 'React'],
  },
  {
    id: 'e-commerce-website',
    title: 'E-Commerce Website',
    category: 'Web Application',
    year: '2022',
    description: 'A mock online store with modern UI/UX and seamless checkout features.',
    redirectUrl: '/projects/e-commerce-website',
    images: '/images/flowchart.png',
    tags: ['Flowchart', 'Web Design', 'Prototyping'],
  },
]

const Work = () => {
  const navigate = useNavigate()

  const handleCardClick = projectId => {
    navigate(`/projects/${projectId}`)
  }

  return (
    <div className="work-page bg">
      <section className="intro-section">
        <header className="intro-header">
          <h2 className="intro-title">Projects</h2>
          <p className="intro-description">A collection of my work demonstrating technical skills and creativity.</p>
        </header>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => handleCardClick(project.id)}
              role="button"
              tabIndex="0"
            >
              <img src={project.images} alt={`${project.title} preview`} className="project-preview-placeholder" />
              <div className="project-hover-overlay">
                <h3 className="projects-title">{project.title}</h3>
                <p className="projects-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
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
