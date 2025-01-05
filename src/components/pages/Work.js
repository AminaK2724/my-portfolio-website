import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/pages/Work.css'
import AllRoutesButton from '../extras/AllRoutesBtn'
import RippleBackground from '../common/RippleBackground'

const projects = [
  {
    id: 'data-recovery',
    title: 'Data Recovery App',
    category: 'Full Stack Application',
    year: '2024',
    description: 'File recovery from corrupted storage',
    redirectUrl: '/projects/data-recovery',
    images: '',
    tags: ['Accessibility', 'Text-to-Speech', 'React'],
  },
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
    tags: ['Full Stack', 'Algorithm', 'Spring Boot'],
  },
  {
    id: 'rpg-game',
    title: 'RPG Game Simulator',
    category: 'Full Stack Application',
    year: '2022',
    description: 'An interactive huffman encoding and decoding platform.',
    redirectUrl: '/projects/hrpg-game',
    images: '',
    tags: ['Full Stack', 'Game', 'Spring Boot'],
  },
  {
    id: 'planner-web-app',
    title: 'Cohesive Planner Web App',
    category: 'Project',
    year: '2024',
    description:
      'An intuitive planner designed for ADHD individuals to streamline tasks and stay organized effortlessly.',
    redirectUrl: '/projects/planner-web-app',
    images: '',
    tags: ['Task Management', 'Productivity', 'Web Application'],
  },
  {
    id: 'svg-animation-generator',
    title: 'SVG Animation Generator',
    category: 'Web Application',
    year: '2022',
    description: 'An fun and interactive svg path animation generator',
    redirectUrl: '/projects/svg-animation-generator',
    images: '',
    tags: ['E-Commerce', 'UI/UX', 'React'],
  },
  {
    id: 'ripple-bg-npm',
    title: 'Reusable Ripple Background',
    category: 'Tool',
    year: '2024',
    description: 'A reusable background to make your webpages more interactive',
    redirectUrl: '/projects/ripple-bg-npm',
    images: '/images/npm-ripple-bg-preview.gif',
    tags: ['NPM', 'Web Dev', 'Interactive'],
  },
  {
    id: 'all-routes-btn-npm',
    title: 'Reusable Routes Button',
    category: 'Tool',
    year: '2024',
    description: 'A reusable button to seamlessly navigate across all available routes in your application.',
    redirectUrl: '/projects/all-routes-btn-npm',
    images: '/images/npm-all-routes-btn-preview.gif',
    tags: ['NPM', 'Navigation Tool', 'Reusable'],
  },
  {
    id: 'task-mgmt-design',
    title: 'Upgraded Map App',
    category: 'UI/UX',
    year: '2022',
    description: 'A mock online store with modern UI/UX and seamless checkout features.',
    redirectUrl: '/projects/task-mgmt-design',
    images: '/images/task-mgmt-prototype/Home-page.png',
    tags: ['Wireframe', 'Web Design', 'Prototyping'],
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
        <RippleBackground />
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
