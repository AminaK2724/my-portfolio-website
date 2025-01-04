import React from 'react'
import '../../styles/extras/Blogs.css'

const NpmAllRoutesBtnBlog = () => {
  return (
    <div className="blog-post">
      <header className="blog-header">
        <h1>Developing the Reusable AllRoutes Button</h1>
        <p className="blog-subtitle">Enhancing Navigation with a Dynamic Multi-Route Button</p>
      </header>

      <article className="blog-content">
        {/* Introduction */}
        <section>
          <h2>🌟 Introduction</h2>
          <p>
            Navigation plays a <strong>crucial role</strong> in user experience, and I wanted to create a{' '}
            <strong>minimal yet powerful solution</strong> for applications with multiple routes. Inspired by the need
            for a simple way to access all pages in a web app, I built the <strong>AllRoutesButton</strong>—a{' '}
            <strong>lightweight, animated, and fully customizable</strong> React component that developers can easily
            integrate into their projects.
          </p>
          <p>
            The goal? <strong>A seamless navigation experience</strong> with <strong>smooth animations</strong>,{' '}
            <strong>custom styling options</strong>, and a{' '}
            <strong>reversible animation effect when switching pages</strong>.
          </p>
        </section>

        {/* Why I Built This */}
        <section>
          <h2>💡 Why I Built This</h2>
          <p>
            While working on my portfolio, I wanted a <strong>quick-access navigation button</strong> that could display{' '}
            <strong>all routes in a clean overlay</strong>. Existing solutions were either <strong>too complex</strong>,{' '}
            <strong>not customizable</strong>, or <strong>lacked animations</strong>. So, I built{' '}
            <strong>AllRoutesButton</strong>—a fully customizable component that integrates smoothly with React Router
            while ensuring performance efficiency.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2>🚀 Key Features</h2>
          <ul>
            <li>
              <strong>Animated full-screen navigation overlay</strong>
            </li>
            <li>
              <strong>Supports multiple transition effects</strong> (slide, fade, zoom)
            </li>
            <li>
              <strong>Reverse animation</strong> when closing or navigating away
            </li>
            <li>
              <strong>Easily customizable</strong> through props (button styles, animations, colors, layout)
            </li>
            <li>
              <strong>Optimized for performance</strong> with minimal re-renders
            </li>
            <li>
              <strong>Works seamlessly with React Router</strong>
            </li>
            <li>
              <strong>Available as an NPM package</strong> for quick integration
            </li>
          </ul>
        </section>

        {/* Live Preview */}
        <section>
          <h2>🎥 See it in action!</h2>
          <iframe
            title="npm-all-routes-btn-live"
            src="https://codesandbox.io/embed/wsdl2p?view=preview&hidenavigation=1&theme=dark"
            style={{ width: '100%', height: '500px', border: '1px solid #00e0ff', borderRadius: '8px' }}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        {/* Customization */}
        <section>
          <h2>🎨 Customization</h2>
          <p>
            The <strong>AllRoutesButton</strong> component supports several props for customization:
          </p>

          <table className="customization-table">
            <thead>
              <tr>
                <th>Prop Name</th>
                <th>Type</th>
                <th>Default Value</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>routes</code>
                </td>
                <td>array</td>
                <td>[]</td>
                <td>
                  List of routes with <code>{`{ name, path }`}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>animation</code>
                </td>
                <td>string</td>
                <td>'fade-in'</td>
                <td>
                  Transition effect (<code>slide-in</code>, <code>fade-in</code>, <code>zoom-in</code>)
                </td>
              </tr>
              <tr>
                <td>
                  <code>buttonStyles</code>
                </td>
                <td>object</td>
                <td>{`{}`}</td>
                <td>Custom styles for the button</td>
              </tr>
              <tr>
                <td>
                  <code>overlayStyles</code>
                </td>
                <td>object</td>
                <td>{`{}`}</td>
                <td>Styles for the full-screen overlay</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Installation */}
        <section>
          <h2>📦 Installation</h2>
          <pre>
            <code>npm install all-routes-button</code>
          </pre>
        </section>

        {/* Usage Example */}
        <section>
          <h2>🛠 Usage</h2>
          <p>Quick example of how to use it:</p>
          <pre>
            <code>
              {`import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutesButton from 'all-routes-button'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About Me', path: '/about-me' },
  { name: 'Contact', path: '/contact' },
  { name: 'Projects', path: '/projects/1' },
]

const App = () => {
  return (
    <Router>
      <AllRoutesButton routes={routes} animation="slide-in" />
    </Router>
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
            This was my first attempt at building a <strong>fully reusable React component</strong>, and I faced several
            challenges:
          </p>
          <ul>
            <li>
              <strong>Ensuring smooth animations</strong> – The animations needed to feel natural and fluid, without
              causing layout shifts.
            </li>
            <li>
              <strong>Handling route transitions correctly</strong> – Implementing reverse animations for a seamless
              navigation experience.
            </li>
            <li>
              <strong>Testing across different environments</strong> – The component was tested in{' '}
              <strong>create-react-app, Next.js, and various React projects</strong>.
            </li>
            <li>
              <strong>Optimizing performance</strong> – I minimized unnecessary re-renders and kept the{' '}
              <strong>DOM updates lightweight</strong>.
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
              <a href="https://www.npmjs.com/package/all-routes-button" target="_blank" rel="noopener noreferrer">
                View on NPM →
              </a>
            </li>
            <li>
              <a href="https://github.com/AminaK2724/all-routes-button" target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  )
}

export default NpmAllRoutesBtnBlog
