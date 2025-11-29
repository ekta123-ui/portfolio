import React from 'react'
import { SKILLS } from '../config'

// Skill icons mapping (using devicon classes or emoji fallbacks)
const skillIcons = {
  'HTML': { icon: 'devicon-html5-plain', color: '#e34c26' },
  'CSS': { icon: 'devicon-css3-plain', color: '#1572b6' },
  'JavaScript': { icon: 'devicon-javascript-plain', color: '#f7df1e' },
  'TypeScript': { icon: 'devicon-typescript-plain', color: '#3178c6' },
  'React': { icon: 'devicon-react-original', color: '#61dafb' },
  'Vue': { icon: 'devicon-vuejs-plain', color: '#4fc08d' },
  'Angular': { icon: 'devicon-angularjs-plain', color: '#dd0031' },
  'Node.js': { icon: 'devicon-nodejs-plain', color: '#339933' },
  'Python': { icon: 'devicon-python-plain', color: '#3776ab' },
  'Java': { icon: 'devicon-java-plain', color: '#ed8b00' },
  'C++': { icon: 'devicon-cplusplus-plain', color: '#00599c' },
  'C': { icon: 'devicon-c-plain', color: '#555555' },
  'C#': { icon: 'devicon-csharp-plain', color: '#68217a' },
  'PHP': { icon: 'devicon-php-plain', color: '#4f5d95' },
  'Ruby': { icon: 'devicon-ruby-plain', color: '#cc342d' },
  'Go': { icon: 'devicon-go-plain', color: '#00add8' },
  'Rust': { icon: 'devicon-rust-plain', color: '#dea584' },
  'Swift': { icon: 'devicon-swift-plain', color: '#fa7343' },
  'Kotlin': { icon: 'devicon-kotlin-plain', color: '#7f52ff' },
  'Dart': { icon: 'devicon-dart-plain', color: '#0175c2' },
  'Bootstrap': { icon: 'devicon-bootstrap-plain', color: '#7952b3' },
  'Tailwind': { icon: 'devicon-tailwindcss-plain', color: '#38b2ac' },
  'SASS': { icon: 'devicon-sass-original', color: '#cc6699' },
  'Git': { icon: 'devicon-git-plain', color: '#f05032' },
  'Docker': { icon: 'devicon-docker-plain', color: '#2496ed' },
  'MongoDB': { icon: 'devicon-mongodb-plain', color: '#47a248' },
  'MySQL': { icon: 'devicon-mysql-plain', color: '#4479a1' },
  'MY-SQL': { icon: 'devicon-mysql-plain', color: '#4479a1' },
  'PostgreSQL': { icon: 'devicon-postgresql-plain', color: '#336791' },
  'Firebase': { icon: 'devicon-firebase-plain', color: '#ffca28' },
  'AWS': { icon: 'devicon-amazonwebservices-original', color: '#ff9900' },
  'Linux': { icon: 'devicon-linux-plain', color: '#fcc624' },
  'Jupyter': { icon: 'devicon-jupyter-plain', color: '#f37626' },
  'TensorFlow': { icon: 'devicon-tensorflow-original', color: '#ff6f00' },
  'PyTorch': { icon: 'devicon-pytorch-original', color: '#ee4c2c' },
  'AI & ML': { icon: null, emoji: '🤖', color: '#9333ea' },
  'Excel': { icon: null, emoji: '📊', color: '#217346' },
  'Shell': { icon: 'devicon-bash-plain', color: '#89e051' },
}

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

function Skills({ repos }) {
  // Get unique languages from GitHub repos
  const githubLanguages = [...new Set(repos.map(repo => repo.language).filter(Boolean))]
  
  // Combine config skills with GitHub languages (avoid duplicates)
  const configSkillNames = SKILLS.map(s => s.name.toLowerCase())
  const additionalGithubSkills = githubLanguages
    .filter(lang => !configSkillNames.includes(lang.toLowerCase()))
    .map(lang => ({ name: lang }))
  
  const allSkills = [...SKILLS, ...additionalGithubSkills]
  
  const getSkillIcon = (skillName) => {
    const skill = skillIcons[skillName] || skillIcons[skillName.replace('-', '')] 
    if (skill?.icon) {
      return <i className={skill.icon} style={{ color: skill.color }}></i>
    } else if (skill?.emoji) {
      return <span className="skill-emoji">{skill.emoji}</span>
    }
    // Default icon for unknown skills
    return <span className="skill-emoji">💻</span>
  }
  
  const getSkillColor = (skillName) => {
    return skillIcons[skillName]?.color || languageColors[skillName] || '#6366f1'
  }

  return (
    <section id="skills" className="section skills">
      <div className="container section-inner">
        <div className="section-header">
          <p className="section-tag">Skills</p>
          <h2>Technical Stack</h2>
          <p className="section-subtitle">
            Technologies from my projects and skills I work with.
          </p>
        </div>

        <div className="skills-icon-grid">
          {allSkills.map((skill) => (
            <div 
              className="skill-icon-card" 
              key={skill.name}
              style={{ '--skill-color': getSkillColor(skill.name) }}
            >
              <div className="skill-icon-wrapper">
                {getSkillIcon(skill.name)}
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
