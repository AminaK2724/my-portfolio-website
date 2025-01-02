import React, { useEffect, useRef } from 'react'

const RippleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Resize canvas to fit the parent container
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let ripples = []
    const mouse = { x: 0, y: 0 }

    // Ripple Constructor
    class Ripple {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.radius = 0 // Start with a smaller radius
        this.alpha = 1
        this.speed = Math.random() * 1.5 + 0.5 // Slower speed for smaller ripples
        this.dy = -1 // Reduced upward velocity
        this.gravity = 0.05 // Gravity effect
        this.color = `rgba(136, 172, 224, ${this.alpha})` // Light blue color
      }

      update() {
        this.radius += this.speed // Smaller growth rate
        this.dy += this.gravity // Apply gravity
        this.y += this.dy // Update position with velocity
        this.alpha -= 0.02 // Fade out
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.strokeStyle = this.color
        ctx.lineWidth = 1.5 // Thinner stroke for smaller ripples
        ctx.stroke()
        ctx.closePath()
      }
    }

    // Draw multiple background waves
    const drawWaves = () => {
      const waveConfigs = [
        { waveHeight: 15, frequency: 0.015, opacity: 0.2 },
        { waveHeight: 20, frequency: 0.02, opacity: 0.3 },
        { waveHeight: 10, frequency: 0.025, opacity: 0.15 },
        { waveHeight: 25, frequency: 0.01, opacity: 0.25 },
      ]

      waveConfigs.forEach(config => {
        ctx.beginPath()
        for (let x = 0; x <= canvas.width; x += 20) {
          const y = canvas.height / 2 + config.waveHeight * Math.sin(x * config.frequency + Date.now() / 800)
          ctx.lineTo(x, y)
        }
        ctx.strokeStyle = `rgba(136, 172, 224, ${config.opacity})`
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.closePath()
      })
    }

    // Mouse Events
    canvas.addEventListener('mousemove', e => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      // Create subtle wave trails
      for (let i = 0; i < 2; i++) {
        ripples.push(new Ripple(mouse.x + Math.random() * 5 - 2.5, mouse.y + Math.random() * 5 - 2.5))
      }
    })

    canvas.addEventListener('click', e => {
      ripples.push(new Ripple(e.clientX, e.clientY))
    })

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw water background
      ctx.fillStyle = 'transparent'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw waves
      drawWaves()

      // Update and draw ripples
      ripples = ripples.filter(ripple => ripple.alpha > 0 && ripple.y < canvas.height)
      ripples.forEach(ripple => {
        ripple.update()
        ripple.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas className="ripple-background" ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }} />
  )
}

export default RippleBackground
