import React, { useState, useEffect } from 'react'
import quotes from './Quotes'

const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState({ text: '', author: '' })

  useEffect(() => {
    const updateQuote = () => {
      const dayIndex = new Date().getDay() // Get the day of the week (0-6)
      setCurrentQuote(quotes[dayIndex % quotes.length]) // Rotate through quotes based on the day
    }

    updateQuote() // Set the initial quote
    const interval = setInterval(updateQuote, 24 * 60 * 60 * 1000) // Update every 24 hours

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [])

  return (
    <div className="quote">
      <p>"{currentQuote.text}"</p>
      <p className='quote-author'>- {currentQuote.author}</p>
    </div>
  )
}

export default Quote