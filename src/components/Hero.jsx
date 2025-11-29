import React from 'react'
import { ReactTyped } from 'react-typed'
import { PERSONAL_INFO, USE_GITHUB_IMAGE } from '../config'

function Hero({ profile, loading }) {
  const displayName = profile?.name || PERSONAL_INFO.name
  
  // Determine which image to use based on config
  const getProfileImage = () => {
    if (USE_GITHUB_IMAGE && profile?.avatar_url) {
      return profile.avatar_url
    }
    return PERSONAL_INFO.profileImage
  }
  
  const profileImage = getProfileImage()
  
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <p className="hero-tag">{PERSONAL_INFO.tagline}</p>
        <h1>
          Hi, I&apos;m <span className="accent">{displayName}</span>
        </h1>
        <h2 className="hero-subtitle">
          I&apos;m a{' '}
          <span className="typed-text">
            <ReactTyped
              strings={PERSONAL_INFO.typedStrings}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2000}
              loop
              cursorChar="|"
            />
          </span>
        </h2>
        <p className="hero-text">
          {PERSONAL_INFO.description}
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
          {loading && USE_GITHUB_IMAGE ? (
            <div className="hero-image-placeholder">Loading...</div>
          ) : profileImage ? (
            <img src={profileImage} alt={displayName} className="hero-image" />
          ) : (
            <div className="hero-image-placeholder">{displayName?.charAt(0) || '?'}</div>
          )}
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

export default Hero
