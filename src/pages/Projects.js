import React from "react";
import "./Projects.css";

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2.2c-3.34.72-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .12-.8.42-1.3.76-1.6-2.67-.3-5.46-1.33-5.46-5.94 0-1.3.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.92 1.23 3.22 0 4.62-2.8 5.63-5.47 5.93.43.37.81 1.1.81 2.22v3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const projects = [
  {
    title: "Quantum Mind",
    subtitle: "AI Quiz & Learning Platform",
    description:
      "Built an AI-driven quiz platform with contextual memory and adaptive question generation using LLMs.",
    live: "https://www.quantummindzz.com",
    tech: ["LLMs", "LangChain", "Next.js", "Python"],
  },
  {
    title: "Voice OTC Trading Assistant",
    subtitle: "Conversational AI for Finance",
    description:
      "Implemented a voice-driven OTC trading assistant that automates trade capture via conversational AI workflows across multiple crypto exchanges.",
    github: "https://github.com/aadyasharma13/Voice-OTC-Trading-Assistant",
    tech: ["Python", "FastAPI", "Bland AI", "WebSockets"],
  },
  {
    title: "ReliefDAO",
    subtitle: "Decentralized Disaster Relief",
    description:
      "Developed a decentralized disaster-relief fund platform using Solana smart contracts and Jupiter-powered swaps for transparent, on-chain allocation of aid.",
    github: "https://github.com/aadyasharma13/reliefDAO",
    tech: ["Next.js", "TypeScript", "Solana", "Tailwind CSS"],
  },
  {
    title: "I-Win Healthcare Community",
    subtitle: "Community Platform",
    description:
      "A comprehensive healthcare community platform connecting patients, caregivers, and medical professionals with real-time messaging and role-based access.",
    github: "https://github.com/aadyasharma13/iwinrepo",
    tech: ["Next.js", "React", "Firebase", "Express.js"],
  },
];

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-subtitle">
        A collection of things I've built — from AI learning platforms and
        voice-driven finance tools to decentralized disaster relief and
        healthcare community platforms.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-header">
              <h2>{project.title}</h2>
              {project.subtitle && (
                <p className="project-sub">{project.subtitle}</p>
              )}
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-actions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn project-btn-primary"
                >
                  <GithubIcon />
                  <span>GitHub</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn project-btn-secondary"
                >
                  <ExternalIcon />
                  <span>Live Site</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
