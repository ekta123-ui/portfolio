import React from 'react'
import { GITHUB_USERNAME, PERSONAL_INFO } from '../config'

function Contact({ profile }) {
  const email = profile?.email || PERSONAL_INFO.email
  const location = profile?.location || PERSONAL_INFO.location
  const githubUrl = `https://github.com/${GITHUB_USERNAME}`
  
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
                <input id="email" type="email" placeholder="your.email@example.com" required />
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
              <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
              <p>Location: {location}</p>
            </div>

            <div className="contact-card">
              <h3>Social Links</h3>
              <ul className="social-links">
                <li>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                {PERSONAL_INFO.linkedin && (
                  <li>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
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

export default Contact
