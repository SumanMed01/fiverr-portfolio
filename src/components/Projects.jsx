import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  useEffect(() => {
    gsap.fromTo('.project-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%'
        }
      }
    )
  }, [])

  const projects = [
    {
      title: 'Core AI OS',
      description: 'AAA-grade 3D AI interface with voice reactivity. A futuristic AI operating system built with Three.js and WebGL for immersive user experience.',
      tags: ['Three.js', 'WebGL', 'JavaScript', 'AI'],
      github: 'https://github.com/SumanMed01/core-ai-os',
      live: null,
      color: '#7c3aed'
    },
    {
      title: 'Project Silica',
      description: 'A spatial memory system for the modern web using Next.js and Supabase. Helps users organize and retrieve information spatially.',
      tags: ['NextJS', 'TypeScript', 'Supabase', 'React'],
      github: 'https://github.com/SumanMed01/project-silica',
      live: null,
      color: '#a855f7'
    },
    {
      title: 'Obys Agency',
      description: 'Creative agency website clone with stunning GSAP animations, smooth scroll effects and modern UI design inspired by award-winning websites.',
      tags: ['HTML', 'CSS', 'GSAP', 'Lenis'],
      github: 'https://github.com/SumanMed01/Obys-agency',
      live: null,
      color: '#ec4899'
    },
  ]

  return (
    <section id="projects" style={{
      padding: '6rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{
          color: '#a855f7',
          fontSize: '0.9rem',
          fontWeight: '600',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem'
        }}>
          My Work
        </p>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          fontWeight: '800'
        }}>
          Featured Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              background: 'rgba(13,13,26,0.8)',
              border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: '20px',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(124,58,237,0.6)'
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(124,58,237,0.2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Project Color Bar */}
            <div style={{
              height: '4px',
              background: `linear-gradient(135deg, ${project.color}, #ec4899)`
            }} />

            <div style={{ padding: '2rem' }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'white'
              }}>
                {project.title}
              </h3>

              <p style={{
                color: '#94a3b8',
                fontSize: '0.9rem',
                lineHeight: '1.7',
                marginBottom: '1.5rem'
              }}>
                {project.description}
              </p>

              {/* Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{
                    background: 'rgba(124,58,237,0.15)',
                    border: '1px solid rgba(124,58,237,0.3)',
                    color: '#a855f7',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: 'transparent',
                    color: 'white',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    border: '1px solid rgba(124,58,237,0.5)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(124,58,237,0.15)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  🐙 GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                      color: 'white',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '50px',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    🚀 Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a
          href="https://github.com/SumanMed01"
          target="_blank"
          rel="noreferrer"
          style={{
            background: 'transparent',
            color: 'white',
            padding: '0.8rem 2rem',
            borderRadius: '50px',
            fontWeight: '600',
            fontSize: '0.95rem',
            border: '1px solid rgba(124,58,237,0.5)',
            display: 'inline-block',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(124,58,237,0.15)'
            e.currentTarget.style.transform = 'translateY(-3px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          View All on GitHub →
        </a>
      </div>
    </section>
  )
}

export default Projects