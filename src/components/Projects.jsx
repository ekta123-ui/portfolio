import React from 'react'
import { GITHUB_USERNAME } from '../config'

// Language to color mapping
const languageColors = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3776ab',
  HTML: '#e34c26',
  CSS: '#1572b6',
  Java: '#ed8b00',
  'C++': '#00599c',
  C: '#555555',
  'C#': '#68217a',
  PHP: '#4f5d95',
  Ruby: '#cc342d',
  Go: '#00add8',
  Rust: '#dea584',
  Swift: '#fa7343',
  Kotlin: '#7f52ff',
  Dart: '#0175c2',
  Vue: '#4fc08d',
  Shell: '#89e051',
  Jupyter: '#f37626',
}

function Projects({ repos, loading }) {
  return (
    <section id="projects" className="section projects">
      <div className="container section-inner">
        <div className="section-header">
          <p className="section-tag">Projects</p>
          <h2>Featured Work</h2>
          <p className="section-subtitle">
            Projects fetched automatically from my GitHub repositories.
          </p>
        </div>

        {loading ? (
          <div className="loading-state">
            <p>Loading projects from GitHub...</p>
          </div>
        ) : repos.length === 0 ? (
          <div className="empty-state">
            <p>No public repositories found.</p>
          </div>
        ) : (
          <div className="projects-grid">
            {repos.map((repo) => (
              <article className="project-card" key={repo.id}>
                <div className="project-header">
                  <p className="project-tag">
                    <span 
                      className="lang-dot" 
                      style={{ backgroundColor: languageColors[repo.language] || '#8b8b8b' }}
                    ></span>
                    {repo.language || 'Unknown'}
                  </p>
                  <div className="project-stats">
                    <span title="Stars">⭐ {repo.stargazers_count}</span>
                    <span title="Forks">🍴 {repo.forks_count}</span>
                  </div>
                </div>
                <h3>{repo.name}</h3>
                <p className="project-description">
                  {repo.description || 'No description available.'}
                </p>
                <div className="project-meta">
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="project-tech">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <span key={topic}>{topic}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="project-links">
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn ghost small"
                  >
                    View Code
                  </a>
                  {repo.homepage && (
                    <a 
                      href={repo.homepage} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn primary small"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
        
        <div className="view-all-projects">
          <a 
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} 
            target="_blank" 
            rel="noreferrer"
            className="btn ghost"
          >
            View All Repositories →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
