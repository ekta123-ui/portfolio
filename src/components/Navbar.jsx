import React, { useState, useEffect } from 'react'
import { GITHUB_USERNAME, USE_GITHUB_IMAGE, PERSONAL_INFO } from '../config'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [profileImage, setProfileImage] = useState(null)

  // Fetch GitHub profile image if enabled
  useEffect(() => {
    if (USE_GITHUB_IMAGE) {
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        .then(res => res.json())
        .then(data => setProfileImage(data.avatar_url))
        .catch(() => setProfileImage(null))
    } else {
      setProfileImage(PERSONAL_INFO.profileImage)
    }
  }, [])

  // Handle scroll for floating effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`navbar-floating ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-island">
        <div className="nav-profile">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="nav-profile-img" />
          ) : (
            <div className="nav-profile-placeholder">
              {PERSONAL_INFO.name?.charAt(0) || '?'}
            </div>
          )}
        </div>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </nav>

        <button 
          className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </header>
  )
}

export default Navbar
