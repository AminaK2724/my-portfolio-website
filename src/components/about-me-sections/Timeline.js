import React, { useEffect, useState } from 'react'
import '../../styles/components/about-me-sections/Timeline.css'

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState([])

  const timelineItems = [
    { id: 1, date: '2021', title: 'Started My Journey', description: 'Began learning web development.', icon: '🌟' },
    {
      id: 2,
      date: '2022',
      title: 'First Project',
      description: 'Built my first responsive web application.',
      icon: '💻',
    },
    {
      id: 3,
      date: '2023',
      title: 'Freelancing',
      description: 'Took on freelance projects and improved skills.',
      icon: '🖌️',
    },
    {
      id: 4,
      date: '2024',
      title: 'New Challenges',
      description: 'Exploring new technologies and growing.',
      icon: '🚀',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, entry.target.id])
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    const items = document.querySelectorAll('.timeline-item')
    items.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="timeline-container">
      <div className="timeline-indicator">
        {timelineItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <div
              id={`dot-${item.id}`}
              className={`timeline-dot ${visibleItems.includes(`item-${item.id}`) ? 'visible' : ''}`}
            />
            {index < timelineItems.length - 1 && <div className="timeline-line" />}
          </React.Fragment>
        ))}
      </div>
      <div className="timeline-content">
        {timelineItems.map(item => (
          <div
            key={item.id}
            id={`item-${item.id}`}
            className={`timeline-item ${visibleItems.includes(`item-${item.id}`) ? 'visible' : ''}`}
          >
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-details">
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-date">{item.date}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline