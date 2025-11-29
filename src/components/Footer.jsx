import React from 'react'
import { GITHUB_USERNAME, PERSONAL_INFO } from '../config'

function Footer({ profile }) {
  const displayName = profile?.name || PERSONAL_INFO.name
  const githubUrl = `https://github.com/${GITHUB_USERNAME}`
  
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {displayName}. All rights reserved.</p>
        <div className="footer-links">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {PERSONAL_INFO.linkedin && (
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
