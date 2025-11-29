import React from 'react'
import { GITHUB_USERNAME, PERSONAL_INFO } from '../config'

function About({ profile }) {
  const githubUrl = `https://github.com/${GITHUB_USERNAME}`
  
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
            {profile?.bio && (
              <p className="github-bio">
                <em>"{profile.bio}"</em>
              </p>
            )}
            <p>
              I&apos;m always open to learning new tools, collaborating on interesting projects, and
              contributing to real-world products.
            </p>

            <div className="about-buttons">
              <a href={PERSONAL_INFO.resumeUrl} download className="btn primary">
                Download Resume
              </a>
              <a
                href={githubUrl}
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

export default About
