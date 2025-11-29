import React, { useState, useEffect } from 'react'
import { GITHUB_USERNAME } from './config'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// GitHub API functions
async function fetchGitHubProfile(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`)
    if (!response.ok) throw new Error('Failed to fetch profile')
    return await response.json()
  } catch (error) {
    console.error('Error fetching GitHub profile:', error)
    return null
  }
}

async function fetchGitHubRepos(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
    )
    if (!response.ok) throw new Error('Failed to fetch repos')
    const repos = await response.json()
    // Sort by stars and return top 6
    return repos
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

function App() {
  const [githubProfile, setGithubProfile] = useState(null)
  const [githubRepos, setGithubRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadGitHubData() {
      setLoading(true)
      const [profile, repos] = await Promise.all([
        fetchGitHubProfile(GITHUB_USERNAME),
        fetchGitHubRepos(GITHUB_USERNAME)
      ])
      setGithubProfile(profile)
      setGithubRepos(repos)
      setLoading(false)
    }
    loadGitHubData()
  }, [])

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero profile={githubProfile} loading={loading} />
        <About profile={githubProfile} />
        <Skills repos={githubRepos} />
        <Projects repos={githubRepos} loading={loading} />
        <Contact profile={githubProfile} />
      </main>

      <Footer profile={githubProfile} />
    </div>
  )
}

export default App