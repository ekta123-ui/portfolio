import React from 'react'

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Bootstrap', level: 75 },
  { name: 'Python', level: 80 },
  { name: 'AI & ML', level: 75 },
  { name: 'MY-SQL', level: 80 },
  { name: 'Excel', level: 75 },

]

const projects = [
  {
    title: 'Omnifood',
    tag: 'frontend',
    description:
      'a web development website in which we order good food in also different country ',
    tech: ['CSS', 'HTML', 'JAVASCRIPT'],
  },
  {
    title: 'Responsive Portfolio Website',
    tag: 'Frontend',
    description:
      'A fully responsive personal portfolio showcasing projects, skills, and contact details with modern animations and UI.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'ATTENDENCE TRACKER ',
    tag: 'PYTHON ',
    description:
      'In this we record the stuent in which time they repord ',
    tech: ['Python'],
  },
]

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="logo">MyPortfolio<span>.</span></div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <p className="hero-tag">Frontend Developer • MCA (AI & ML)</p>
        <h1>
          Hi, I&apos;m <span className="accent">Ekta Beniwal</span>
        </h1>
        <h2 className="hero-subtitle">
          I build modern web interfaces and intelligent applications.
        </h2>
        <p className="hero-text">
          I&apos;m a frontend developer with a Master of Computer Applications specialization in
          Artificial Intelligence &amp; Machine Learning. I love combining beautiful UI with
          intelligent features powered by data.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn ghost">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-photo-wrapper">
        <div className="hero-photo">
        <img src="src/ekta.jpg" alt="Ekta" className="hero-image" />
          <div className="photo-circle"></div>
          <div className="hero-badge hero-badge-top">
            <span className="dot" /> Frontend Dev
          </div>
          <div className="hero-badge hero-badge-bottom">
            <span className="dot" /> AI &amp; ML Enthusiast
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container section-inner">
        <div className="section-header">
          <p className="section-tag">About Me</p>
          <h2>Frontend &amp; AI/ML Developer</h2>
        </div>
        <div className="about-layout">
          <div className="about-text">
            <p>
              I&apos;m currently pursuing <strong>MCA with specialization in AI and ML</strong>.
              My main focus is building responsive, user-friendly web applications using modern
              frontend technologies like <strong>HTML, CSS, JavaScript, React and Bootstrap</strong>.
            </p>
            <p>
              Along with frontend development, I&apos;m also passionate about{' '}
              <strong>Artificial Intelligence and Machine Learning</strong>. I enjoy working with
              Python to build data-driven solutions such as prediction models and recommendation
              systems.
            </p>
            <p>
              I&apos;m always open to learning new tools, collaborating on interesting projects, and
              contributing to real-world products.
            </p>

            <div className="about-buttons">
              <a href="/src/assets/resume-placeholder.pdf" download className="btn primary">
                Download Resume
              </a>
              <a
                href="https://github.com/ekta123-ui"
                target="_blank"
                rel="noreferrer"
                className="btn ghost"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          <div className="highlights">
            <div className="highlight-card">
              <h3>Frontend</h3>
              <p>Clean, responsive UI with modern CSS and React components.</p>
            </div>
            <div className="highlight-card">
              <h3>AI &amp; ML</h3>
              <p>Hands-on with ML models, data analysis and Python libraries.</p>
            </div>
            <div className="highlight-card">
              <h3>Team Work</h3>
              <p>Experience working in group projects and academic collaborations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container section-inner">
        <div className="section-header">
          <p className="section-tag">Skills</p>
          <h2>Technical Stack</h2>
          <p className="section-subtitle">
            A mix of frontend technologies and AI/ML tools that I use in my projects.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ '--level': `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container section-inner">
        <div className="section-header">
          <p className="section-tag">Projects</p>
          <h2>Featured Work</h2>
          <p className="section-subtitle">
            Some of my academic and personal projects combining frontend and AI/ML.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-tag">{project.tag}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container section-inner">
        <div className="section-header">
          <p className="section-tag">Contact</p>
          <h2>Let&apos;s Connect</h2>
          <p className="section-subtitle">
            Have a project, internship or opportunity in mind? Reach out to me.
          </p>
        </div>

        <div className="contact-layout">
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault()
              alert('This is a demo form. Please connect via email or LinkedIn!')
            }}
          >
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="ektabenowal2303@gmail.com" required />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell me about your project or opportunity..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn primary full-width">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <div className="contact-card">
              <h3>Contact Details</h3>
              <p>Email: <a href="mailto:your.email@example.com">ektabeniwal2303@gmail.com</a></p>
              <p>Location: Gurugram, India</p>
            </div>

            <div className="contact-card">
              <h3>Social Links</h3>
              <ul className="social-links">
                <li>
                  <a
                    href="https://github.com/ekta123-ui"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ekta-beniwal-9b8a5a326"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact-card">
              <h3>Availability</h3>
              <p>
                Available for internship, freelance projects, and full-time opportunities related to
                Frontend Development or AI/ML.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Ekta Beniwal. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/ekta123-ui" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ekta-beniwal-9b8a5a326"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default App