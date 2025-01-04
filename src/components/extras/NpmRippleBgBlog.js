import React from 'react'
import '../../styles/extras/NpmRippleBgBlog.css'

const NpmRippleBgBlog = () => {
  return (
    <div className="blog-post">
      <header className="blog-header">
        <h1>Case Study: Developing the Reusable Ripple Background</h1>
        <p className="blog-subtitle">Enhancing Web Interactivity with Animated Backgrounds</p>
      </header>

      <article className="blog-content">
        {/* Introduction */}
        <section>
          <h2>🌟 Introduction</h2>
          <p>
            I’ve always been fascinated by <strong>interactive web animations</strong> and how subtle effects can
            <strong> enhance user experience</strong>. While experimenting with the <strong>Canvas API</strong>, I
            decided to build a <strong>reusable ripple background</strong> that adds a smooth,
            <strong>water-like ripple animation</strong> to any web application.
          </p>
          <p>
            The goal? To create a <strong>lightweight</strong>, <strong>fully customizable</strong>, and
            <strong>performance-optimized</strong> component that developers can <strong>easily integrate</strong>
            into their projects.
          </p>
        </section>

        {/* Why I Built This */}
        <section>
          <h2>💡 Why I Built This</h2>
          <p>
            While building my portfolio, I wanted a <strong>subtle background effect</strong> that wouldn't distract
            users but would make the UI feel <strong>more alive</strong>. Existing solutions were
            <strong> either too complex</strong> or required <strong>large libraries</strong>. I wanted something
            <strong> simple</strong>, <strong>customizable</strong>, and <strong>high-performing</strong>—so I built it
            myself!
          </p>
        </section>

        {/* Features */}
        <section>
          <h2>🚀 Key Features</h2>
          <ul>
            <li>
              <strong>Smooth and interactive ripple animations</strong>
            </li>
            <li>
              <strong>Fully customizable</strong> with props (color, speed, size, waves)
            </li>
            <li>
              <strong>Responsive and optimized for performance</strong>
            </li>
            <li>
              Uses <strong>Canvas API</strong> for efficient rendering (avoids unnecessary DOM updates)
            </li>
            <li>
              Available as an <strong>NPM package</strong> for easy integration
            </li>
          </ul>
        </section>

        {/* Live Preview */}
        <section>
          <h2>🎥 Live Demo</h2>
          <p>See it in action!</p>
          <iframe
            src="https://codesandbox.io/embed/sssg36?view=preview&hidenavigation=1&theme=dark"
            style={{ width: '100%', height: '500px', border: '1px solid #00e0ff', borderRadius: '8px' }}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        {/* Installation */}
        <section>
          <h2>📦 Installation</h2>
          <pre>
            <code>npm install npm-ripple-wave-bg</code>
          </pre>
        </section>

        {/* Usage Example */}
        <section>
          <h2>🛠 Usage</h2>
          <p>Quick example of how to use it:</p>
          <pre>
            <code>
              {`import React from 'react'
import RippleBackground from 'npm-ripple-wave-bg'

const App = () => {
  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1e1e2f',
      overflow: 'hidden'
    }}>
      <RippleBackground />
      <div style={{
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        background: 'rgba(0, 0, 0, 0.3)',
        padding: '20px 40px',
        borderRadius: '12px',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)'
      }}>
        <h1>Welcome to the Ripple Effect</h1>
        <p>Experience smooth and interactive ripples in the background.</p>
      </div>
    </div>
  )
}

export default App`}
            </code>
          </pre>
        </section>

        {/* Challenges & Learnings */}
        <section>
          <h2>⚠️ Challenges & Learnings</h2>
          <p>
            This was my <strong>first NPM package</strong>, and I encountered numerous challenges during
            <strong> build, deployment, and testing</strong>. Here are some of the key difficulties I faced:
          </p>
          <ul>
            <li>
              <strong>Ensuring performance efficiency</strong> – The ripple animations needed to run smoothly
              <strong> without affecting page performance</strong>.
            </li>
            <li>
              <strong>Handling NPM Build & Deployment Errors</strong> – I faced issues with{' '}
              <strong>package versioning, Babel, and dependency management</strong>.
            </li>
            <li>
              <strong>Testing the Package in Different Environments</strong> – Making sure it worked in
              <strong>create-react-app, Next.js, and vanilla React</strong> was a challenge.
            </li>
          </ul>
        </section>

        {/* License */}
        <section>
          <h2>📄 License</h2>
          <p>ISC License © 2025 Amina Khan</p>
        </section>

        {/* Support & Feedback */}
        <section className="blog-cta">
          <h3>⭐ Support & Feedback</h3>
          <p>
            If you like this package, please <strong>give it a ⭐ on GitHub!</strong>
          </p>
          <ul>
            <li>
              <a href="https://www.npmjs.com/package/npm-ripple-wave-bg" target="_blank" rel="noopener noreferrer">
                View on NPM →
              </a>
            </li>
            <li>
              <a href="https://github.com/AminaK2724/npm-ripple-wave-bg" target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  )
}

export default NpmRippleBgBlog
