import React, { useState, useEffect } from 'react'

const Quote = () => {
  const quotes = [
    'Be stronger than your excuses.',
    'Success is not for the lazy.',
    'Dream big and dare to fail.',
    'Push yourself, because no one else will.',
    'Your limitation—it’s only your imagination.',
    'The best time for new beginnings is now.',
  ]

  const [currentQuote, setCurrentQuote] = useState('')

  useEffect(() => {
    const updateQuote = () => {
      const dayIndex = new Date().getDay() // Get the day of the week (0-6)
      setCurrentQuote(quotes[dayIndex % quotes.length]) // Rotate through quotes based on the day
    }

    updateQuote() // Set the initial quote
    const interval = setInterval(updateQuote, 24 * 60 * 60 * 1000) // Update at midnight

    return () => clearInterval(interval) // Clean up interval on component unmount
  }, [quotes])

  return <p className="quote">"{currentQuote}"</p>
}

export default Quote
