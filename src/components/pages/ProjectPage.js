import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../../styles/pages/ProjectPage.css'
import AllRoutesButton from '../extras/AllRoutesBtn'
import NpmRippleBgBlog from '../extras/NpmRippleBgBlog'
import NpmAllRoutesBtnBlog from '../extras/NpmAllRoutesBtnBlog'
import KeepMeOnTrackBlog from '../extras/KeepMeOnTrackBlog'

const projects = [
  {
    id: 'data-recovery',
    title: 'Data Recovery App',
    category: 'Full Stack Application',
    year: '2024',
    description: 'File recovery from corrupted storage',
    redirectUrl: '/projects/data-recovery',
    images: '',
    tools: [],
    route: null,
    blogComponent: '',
  },
  {
    id: 'translation-app',
    title: 'Translation Web App',
    category: 'Personal Tool',
    year: '2024',
    description: 'A personal text-to-speech translator designed for accessibility and convenience.',
    redirectUrl: '/projects/translation-app',
    images: ['/images/translatePreview.png', '/images/flowchart.png', '/images/translateApp.mp4'],
    tools: ['AWS', 'Python', 'React.js', 'Node.js', 'Netlify'],
    route: null,
    repo: null,
  },
  {
    id: 'huffman-code',
    title: 'Simple Huffman Coding Platform',
    category: 'Full Stack Application',
    year: '2022',
    description: 'An interactive huffman encoding and decoding platform.',
    redirectUrl: '/projects/huffman-code-app',
    images: ['/images/huffman-preview.png', '/images/huffman-coding-app.mp4'],
    tools: ['Java', 'Spring Boot', 'Maven', 'React.js', 'Netlify'],
    route: 'https://github.com/AminaK2724/HuffmanCode',
    repo: 'https://github.com/AminaK2724/HuffmanCode',
  },
  {
    id: 'rpg-game',
    title: 'RPG Game Simulator',
    category: 'Full Stack Application',
    year: '2022',
    description: 'An interactive huffman encoding and decoding platform.',
    redirectUrl: '/projects/huffman-code-app',
    images: ['/images/huffman-preview.png', '/images/huffman-coding-app.mp4'],
    tools: ['Java', 'Spring Boot', 'Maven', 'React.js', 'Netlify'],
    route: 'https://github.com/AminaK2724/HuffmanCode',
  },
  {
    id: 'planner-web-app',
    title: 'Cohesive Planner Web App',
    category: 'Project',
    year: '2024',
    description:
      'A comprehensive and intuitive planner specifically designed for individuals with ADHD, helping you streamline daily tasks, track progress effortlessly, and stay organized in a way that works for you.',
    redirectUrl: '/projects/planner-web-app',
    images: ['ecommerce2.jpg'],
    tools: ['React.js', 'CSS', 'Netlify'],
    route: null,
  },
  {
    id: 'svg-animation-generator',
    title: 'SVG Animation Generator',
    category: 'Web Application',
    year: '2024',
    description: 'An fun and interactive svg path animation generator',
    redirectUrl: '/projects/svg-animation-generator',
    images: ['ecommerce1.jpg', 'ecommerce2.jpg'],
    tools: ['HTML', 'CSS', 'JavaScript'],
    route: null,
  },
  {
    id: 'ripple-bg-npm',
    title: 'Reusable Ripple Background',
    category: 'NPM Tool',
    year: '2024',
    description:
      'An engaging and reusable animated background component designed to enhance user interaction and bring a dynamic visual appeal to your webpages.',
    redirectUrl: '/projects/ripple-bg-npm',
    images: ['/images/npm-ripple-bg-preview.gif'],
    tools: ['React.js', 'Canvas API', 'JavaScript', 'NPM'],
    route: 'https://www.npmjs.com/package/npm-ripple-wave-bg',
    repo: 'https://github.com/AminaK2724/npm-ripple-wave-bg',
    blogComponent: <NpmRippleBgBlog />,
  },
  {
    id: 'all-routes-btn-npm',
    title: 'Reusable Routes Button',
    category: 'NPM Tool',
    year: '2024',
    description:
      'A customizable and reusable button component designed to provide seamless navigation across all available routes in your application.',
    redirectUrl: '/projects/all-routes-btn-npm',
    images: ['/images/npm-all-routes-btn-preview.gif'],
    tools: ['React.js', 'CSS', 'Netlify'],
    route: 'https://www.npmjs.com/package/npm-all-routes-button',
    repo: 'https://github.com/AminaK2724/npm-all-routes-btn',
    blogComponent: <NpmAllRoutesBtnBlog />,
  },
  {
    id: 'task-mgmt-design',
    title: 'Upgraded Map App',
    category: 'UI/UX Design',
    year: '2024',
    description: 'A mock online store with modern UI/UX and seamless checkout features.',
    redirectUrl: '/projects/task-mgmt-design',
    images: ['/images/task-mgmt-prototype/Home-page.png'],
    tools: ['Figma'],
    route: null,
    blogComponent: <KeepMeOnTrackBlog />,
  },
]

const ProjectPage = () => {
  const { projectId } = useParams()
  const projectIndex = projects.findIndex(project => project.id === projectId)
  const project = projects[projectIndex]

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
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
        <Link to="/work" className="projects-back">
          ← Projects
        </Link>
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
                  <p className="meta-category">
                    <span className="meta-title">Category: </span>
                    {project.category}
                  </p>
                  <p className="meta-category">
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
                    {project.category.includes('NPM') ? 'View on NPM' : 'Live Demo'} →
                  </a>
                ) : (
                  <button disabled className="project-button disabled">
                    Coming Soon!
                  </button>
                )}
                {project.repo && (
                  <a href={project.repo} className="project-button secondary" target="_blank" rel="noopener noreferrer">
                    View on GitHub →
                  </a>
                )}
              </div>
            </div>
          </div>
          {project.blogComponent && project.blogComponent}
        </section>
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
