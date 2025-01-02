import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../styles/pages/ProjectPage.css'
import AllRoutesButton from '../components/extras/AllRoutesBtn'

const projects = [
  {
    id: 'translation-app',
    title: 'Translation App',
    category: 'Personal Tool',
    year: '2023',
    description: 'A personal text-to-speech translator designed for accessibility and convenience.',
    redirectUrl: '/projects/translation-app',
    images: ['/images/translatePreview.png', '/images/flowchart.png', '/images/translateApp.mp4'],
    tools: ['JavaScript', 'React', 'Node.js'],
    route: null,
  },
  {
    id: 'huffman-code',
    title: 'Simple Huffman Coding Platform',
    category: 'Web Application',
    year: '2022',
    description: 'An interactive huffman encoding and decoding platform.',
    redirectUrl: '/projects/huffman-code-app',
    images: ['/images/huffman-preview.png', '/images/huffman-coding-app.mp4'],
    tools: ['Java', 'Spring Boot', 'React'],
    route: 'https://github.com/AminaK2724/HuffmanCode',
  },
  {
    id: 'e-commerce-website',
    title: 'E-Commerce Website',
    category: 'Web Application',
    year: '2022',
    description: 'A mock online store with modern UI/UX and seamless checkout features.',
    redirectUrl: '/projects/e-commerce-website2',
    images: ['ecommerce1.jpg', 'ecommerce2.jpg'],
    tools: ['HTML', 'CSS', 'JavaScript'],
    route: null,
  },
]


const ProjectPage = () => {
  const { projectId } = useParams()
  const projectIndex = projects.findIndex(project => project.id === projectId)
  const project = projects[projectIndex]

  useEffect(() => {
    // Scroll to the absolute top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Optional smooth scroll effect
    })
  }, [projectId])

  if (!project) {
    return <div>Project not found</div>
  }

  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return (
    <div className="bg">
      <div className="project-page">
        <AllRoutesButton />
        <section className="project-container">
          {/* Header Section */}
          <header className="project-header">
            <div className="project-preview">
              {project.images && project.images.length > 0 && (
                <img src={project.images[0]} alt={`${project.title} Preview`} className="preview-image" />
              )}
            </div>
          </header>

          {/* Project Details */}
          <div className="project-details">
            <h2 className="project-title">{project.title}</h2>
            <div className="project-meta-wrapper">
              <div className="project-left">
                <div className="project-meta">
                  <p className='meta-category'>
                    <span className="meta-title">Category: </span>
                    {project.category}
                  </p>
                  <p className='meta-category'>
                    <span className="meta-title">Year: </span>
                    {project.year}
                  </p>
                  <div className="project-tools">
                    <span className="meta-title">Tools Used: </span>
                    <div className="tools-list">
                      {project.tools.map((tool, index) => (
                        <span key={index} className="tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-right">
                <p className="project-description">{project.description}</p>
                {project.route ? (
                  <a href={project.route} className="project-button" target="_blank" rel="noopener noreferrer">
                    View Project →
                  </a>
                ) : (
                  <button disabled className="project-button disabled" target="_blank" rel="noopener noreferrer">
                    It'll be up soon!
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Project Images */}
          <div className="project-images">
            {project.images.slice(1).map((media, index) =>
              media.endsWith('.mp4') ? (
                <video key={index} controls width="100%">
                  <source src={media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img key={index} src={media} alt={`Media ${index + 1}`} />
              ),
            )}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="project-footer">
          {previousProject && (
            <Link
              to={`/projects/${previousProject.id}`}
              className="footer-link previous"
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            >
              ← Previous Project
            </Link>
          )}
          {nextProject && (
            <Link
              to={`/projects/${nextProject.id}`}
              className="footer-link next"
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            >
              Next Project →
            </Link>
          )}
        </footer>
      </div>
    </div>
  )
}

export default ProjectPage
