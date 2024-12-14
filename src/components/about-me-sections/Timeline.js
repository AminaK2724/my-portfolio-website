import React, { useEffect, useRef } from 'react'
import '../../styles/components/about-me-sections/Timeline.css'

const timelineData = [
  {
    year: '2023',
    title: 'Milestone 1',
    description: 'Description for milestone 1.',
  },
  {
    year: '2022',
    title: 'Milestone 2',
    description: 'Description for milestone 2.',
  },
  {
    year: '2021',
    title: 'Milestone 3',
    description: 'Description for milestone 3.',
  },
  {
    year: '2020',
    title: 'Milestone 4',
    description: 'Description for milestone 4.',
  },
  {
    year: '2019',
    title: 'Milestone 5',
    description: 'Description for milestone 5.',
  },
]

const Timeline = () => {
  return (
    <div className="timeline-container">
      {timelineData.map((data, index) => (
        <div key={index} className={`box ${index % 2 === 0 ? '' : 'box2'}`}>
          <div className="timeline-content">
            <h2 className="timeline-year">{data.year}</h2>
            <h3 className="timeline-title">{data.title}</h3>
            <p className="timeline-description">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
