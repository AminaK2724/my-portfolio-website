import React from 'react'
import '../../styles/extras/Blogs.css'

const KeepMeOnTrackBlog = () => {
  return (
    <div className="blog-post">
      <header className="blog-header">
        <h1>Designing the "Keep Me on Track" Task Management App</h1>
        <p className="blog-subtitle">A User-Centered Approach to Productivity and Focus</p>
      </header>

      <article className="blog-content">
        {/* Introduction */}
        <section>
          <h2>🌟 Introduction</h2>
          <p>
            Managing tasks efficiently is crucial for productivity, yet many applications fail to provide an intuitive
            user experience.
            <strong> Keep Me on Track </strong> is a <strong> UX-driven desktop application </strong> designed to
            address these issues through
            <strong> seamless navigation, task tracking, and productivity enhancement. </strong>
          </p>
          <p>
            The app integrates a{' '}
            <strong> customizable Kanban board, accountability badges, and AI-powered focus assistance </strong>
            to help users stay productive with minimal distractions.
          </p>
        </section>

        {/* Research and Discovery */}
        <section>
          <h2>🔍 Research and Discovery</h2>

          <h3>User Research:</h3>
          <ul>
            <li>Conducted interviews with university students to understand task management needs.</li>
            <li>
              Identified major pain points:{' '}
              <strong>
                task prioritization, distraction control, unclear UI elements, lack of intuitive navigation.
              </strong>
            </li>
          </ul>

          <h3>Key Insights from Affinity Diagram Analysis:</h3>
          <ul>
            <li>
              Users prefer <strong>customizable dashboards</strong>.
            </li>
            <li>
              Users need <strong>visual feedback and notifications</strong> to stay on track.
            </li>
            <li>
              Users require <strong>collaborative task sharing and tracking</strong>.
            </li>
          </ul>
        </section>

        {/* Usability Testing & Iterations */}
        <section>
          <h2>🧪 Usability Testing & Iterations</h2>

          <h3>Cognitive Walkthrough Findings:</h3>
          <ul>
            <li>
              Users found <strong>navigation unclear</strong> → <strong>Solution:</strong> Added clearer labels, back
              buttons, and intuitive tooltips.
            </li>
            <li>
              <strong>Lack of Undo for Task Deletion</strong> → <strong>Solution:</strong> Added an Undo/Delete feature.
            </li>
            <li>
              <strong>Unclear Task Movement between Columns</strong> → <strong>Solution:</strong> Introduced
              drag-and-drop visual indicators.
            </li>
            <li>
              <strong>Poor Visibility of Badge Progress</strong> → <strong>Solution:</strong> Greyed out incomplete
              badges for better tracking.
            </li>
          </ul>

          <h3>Final Adjustments:</h3>
          <ul>
            <li>
              Improved <strong>icons, color coding, and hierarchy</strong> for better usability.
            </li>
            <li>
              Enhanced <strong>progress tracking feedback</strong> (pop-ups, notifications, progress bars).
            </li>
          </ul>
        </section>

        {/* Feature 1: Task Dashboard */}
        <section className="feature-section">
          <h2>🚀 Core Features</h2>
          <h3>📌 Feature 1: Task Dashboard (Kanban Board)</h3>
          <p>
            This feature allows users to manage tasks visually using a Kanban-style board. Tasks are categorized into
            <strong> To Do, In Progress, and Done </strong> to track progress efficiently.
          </p>

          <h4>📝 Low-Fidelity Prototype</h4>
          <div className="prototype-showcase">
            <img src="YOUR_LOW_FIDELITY_IMAGE_1" alt="Low-Fidelity Prototype - Task Dashboard" />
          </div>

          <h4>🎨 High-Fidelity Prototypes</h4>
          <div className="prototype-showcase">
            <figure>
              <img src="/images/task-mgmt-prototype/Home-page.png" alt="Task Dashboard" />
              <figcaption>
                <strong>Home Page</strong>
              </figcaption>
            </figure>

            <figure>
              <img src="/images/task-mgmt-prototype/Task-Dashboard.png" alt="Task Dashboard" />
              <figcaption>
                <strong>Task Dashboard:</strong> Displays an overview of all tasks, categorized for easy management.
              </figcaption>
            </figure>

            <figure>
              <img src="/images/task-mgmt-prototype/Task-Kanban-board.png" alt="Task - Kanban Board" />
              <figcaption>
                <strong>Kanban Board:</strong> A visual representation of tasks, allowing easy movement between stages.
              </figcaption>
            </figure>

            <figure>
              <img src="/images/task-mgmt-prototype/Task-KanBan-(Single-Task).png" alt="Task - Kanban (Single Task)" />
              <figcaption>
                <strong>Single Task View:</strong> Displays details of an individual task, including deadlines and tags.
              </figcaption>
            </figure>

            <figure>
              <img src="/images/task-mgmt-prototype/Task-Task-Added.png" alt="Task - Task Added" />
              <figcaption>
                <strong>Task Added Confirmation:</strong> A pop-up confirmation when a new task is successfully created.
              </figcaption>
            </figure>

            <figure>
              <img src="/images/task-mgmt-prototype/Task-Move-tasks.png" alt="Task - Move Tasks" />
              <figcaption>
                <strong>Task Movement:</strong> Drag and drop functionality for seamless workflow management.
              </figcaption>
            </figure>

            <figure>
              <img src="/images/task-mgmt-prototype/Task-Tags.png" alt="Task - Tags" />
              <figcaption>
                <strong>Task Tagging:</strong> Allows users to assign color-coded tags for better task categorization.
              </figcaption>
            </figure>

            <figure>
              <img src="/images/task-mgmt-prototype/Task-Share-KanBan-Board.png" alt="Task - Share Kanban Board" />
              <figcaption>
                <strong>Sharing Kanban Board:</strong> Enables task collaboration by sharing boards with other users.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Feature 2: STAR Badges */}
        <section className="feature-section">
          <h3>⭐ Feature 2: STAR Badges (Accountability System)</h3>
          <p>
            This gamification feature rewards users with <strong>milestone badges</strong> when they complete tasks
            before deadlines, helping them stay motivated.
          </p>

          <h4>📝 Low-Fidelity Prototype</h4>
          <div className="prototype-showcase">
            <img src="YOUR_LOW_FIDELITY_IMAGE_2" alt="Low-Fidelity Prototype - STAR Badges" />
          </div>

          <h4>🎨 High-Fidelity Prototypes</h4>
          <div className="prototype-showcase">
            <figure>
              <img src="/images/task-mgmt-prototype/Home-page.png" alt="Task Dashboard" />
              <figcaption>
                <strong>Home Page</strong>
              </figcaption>
            </figure>

            <figure>
              <img src="/images/task-mgmt-prototype/Milestone-page.png" alt="Milestone Page" />
              <figcaption>
                <strong>Milestone Page:</strong> Overview of achievements and progress tracking through milestones.
              </figcaption>
            </figure>

            <figure>
              <img src="/images/task-mgmt-prototype/View-milestone.png" alt="View Milestone" />
              <figcaption>
                <strong>View Milestone:</strong> Displays milestone details, including completion status.
              </figcaption>
            </figure>

            <figure>
              <img src="/images/task-mgmt-prototype/Share-Milestone-List.png" alt="Share Milestone - List" />
              <figcaption>
                <strong>Milestone Sharing:</strong> Users can share their milestones with their team for accountability.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Feature 3: TRACKMEgpt */}
        <section className="feature-section">
          <h3>🤖 Feature 3: TRACKMEgpt (Distraction Control AI)</h3>
          <p>
            TRACKMEgpt is an AI-powered assistant that suggests ways to stay focused based on user activity and detected
            distractions.
          </p>

          <h4>📝 Low-Fidelity Prototype</h4>
          <div className="prototype-showcase">
            <img src="YOUR_LOW_FIDELITY_IMAGE_3" alt="Low-Fidelity Prototype - TRACKMEgpt" />
          </div>

          {/* High-Fidelity Prototypes for TRACKMEgpt */}
          <h4>🎨 High-Fidelity Prototypes</h4>
          <div className="prototype-showcase">
            <figure>
              <img src="/images/task-mgmt-prototype/Home-page.png" alt="Home Page" />
              <figcaption>
                <strong>Home Page</strong>
              </figcaption>
            </figure>
            <figure>
              <img
                src="/images/task-mgmt-prototype/AI-Distraction-Landing-Page.png"
                alt="AI Distraction Landing Page"
              />
              <figcaption>
                <strong>AI Distraction Landing:</strong> The main page where users can activate distraction management.
              </figcaption>
            </figure>

            <figure>
              <img
                src="/images/task-mgmt-prototype/AI-Distraction-Suggestion-Selection.png"
                alt="AI Distraction Suggestion Selection"
              />
              <figcaption>
                <strong>Suggestion Selection:</strong> AI provides focus-improving recommendations based on user
                activity.
              </figcaption>
            </figure>

            <figure>
              <img
                src="/images/task-mgmt-prototype/AI-Distraction-Notification.png"
                alt="AI Distraction Notification"
              />
              <figcaption>
                <strong>Distraction Notification:</strong> AI alerts the user when they start losing focus.
              </figcaption>
            </figure>

            <figure>
              <img src="/images/task-mgmt-prototype/AI-Distraction-Alternative.png" alt="AI Distraction Alternative" />
              <figcaption>
                <strong>Alternative Focus Mode:</strong> The AI suggests different approaches to minimize distractions.
              </figcaption>
            </figure>

            <figure>
              <img
                src="/images/task-mgmt-prototype/AI-Distraction-Alternative-after-pause.png"
                alt="AI Distraction Alternative After Pause"
              />
              <figcaption>
                <strong>Alternative After Pause:</strong> When the user pauses a session, the AI provides refocusing
                strategies.
              </figcaption>
            </figure>

            <figure>
              <img
                src="/images/task-mgmt-prototype/AI-Distraction-Warning-Sign.png"
                alt="AI Distraction Warning Sign"
              />
              <figcaption>
                <strong>Warning Sign:</strong> A visual alert when excessive distractions are detected.
              </figcaption>
            </figure>

            <figure>
              <img src="/images/task-mgmt-prototype/AI-Distraction-Toggle-Off.png" alt="AI Distraction Toggle Off" />
              <figcaption>
                <strong>Toggle Off AI:</strong> Users can deactivate AI distraction management if they choose.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Challenges & Learnings */}
        <section>
          <h2>⚠️ Challenges & Learnings</h2>
          <p>
            Designing <strong>Keep Me on Track</strong> was an iterative process, and I learned a lot:
          </p>
          <ul>
            <li>
              <strong>Balancing simplicity & functionality</strong> – Avoiding <strong>overloading</strong> the UI
              while ensuring feature-rich experiences.
            </li>
            <li>
              <strong>Ensuring intuitive interactions</strong> – Users needed <strong>clear feedback</strong> for
              every action.
            </li>
            <li>
              <strong>Performance Optimization</strong> – Kept <strong>DOM updates minimal</strong> and used{' '}
              <strong>efficient animations</strong>.
            </li>
            <li>
              <strong>Data-Driven Design Decisions</strong> – Cognitive walkthroughs{' '}
              <strong>guided iterative improvements</strong>.
            </li>
          </ul>
        </section>

        {/* Support & Feedback */}
        <section className="blog-cta">
          <h3>⭐ Support & Feedback</h3>
          <p>
            If you like this project, check out the <strong>Figma design</strong> and drop feedback!
          </p>
          <ul>
            <li>
              <a href="https://www.figma.com/proto/YOUR_FIGMA_LINK_HERE" target="_blank" rel="noopener noreferrer">
                View on Figma →
              </a>
            </li>
            {/* <li>
              <a href="https://github.com/AminaK2724/keep-me-on-track" target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </li> */}
          </ul>
        </section>
      </article>
    </div>
  )
}

export default KeepMeOnTrackBlog
