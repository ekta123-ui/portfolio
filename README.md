# React Portfolio

A dynamic portfolio website built with React + Vite that fetches your GitHub profile and repositories automatically.

## Architecture

```
src/
├── config.js          # Central configuration (GitHub username, personal info, skills)
├── App.jsx            # Main app - handles GitHub API fetching
├── main.jsx           # Entry point
├── styles.css         # All styles (CSS variables, components, responsive)
└── components/
    ├── Navbar.jsx     # Floating island navigation with mobile hamburger
    ├── Hero.jsx       # Hero section with react-typed animation
    ├── About.jsx      # About section
    ├── Skills.jsx     # Skills grid with devicon icons
    ├── Projects.jsx   # GitHub repositories as project cards
    ├── Contact.jsx    # Contact form
    └── Footer.jsx     # Footer
```

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure** - Edit `src/config.js`:
   ```js
   export const GITHUB_USERNAME = 'your-github-username'
   export const USE_GITHUB_IMAGE = true // or false for local image
   export const PERSONAL_INFO = {
     name: 'Your Name',
     typedStrings: ['Developer', 'Designer', ...],
     // ... other fields
   }
   ```

3. **Run locally**
   ```bash
   npm run dev
   ```

4. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## Features

- **Dynamic GitHub Integration** - Fetches profile, avatar, and repos via GitHub API
- **Typing Animation** - React-typed for hero section
- **Responsive** - Mobile-first with floating navbar
- **Configurable** - Single config file for all customization

## Tech Stack

- React 18 + Vite 5
- GitHub Pages (gh-pages)
- Devicon CSS (skill icons)
- react-typed
