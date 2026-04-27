import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  useEffect(() => {
    gsap.fromTo('.skill-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' }
      }
    )
  }, [])

  const skills = [
    { name: 'React', level: '90%' },
    { name: 'NextJS', level: '85%' },
    { name: 'Three.js', level: '80%' },
    { name: 'TypeScript', level: '75%' },
    { name: 'Node.js', level: '80%' },
    { name: 'MongoDB', level: '75%' },
    { name: 'GSAP', level: '85%' },
    { name: 'Tailwind CSS', level: '90%' },
    { name: 'JavaScript', level: '90%' },
    { name: 'WebGL', level: '70%' },
    { name: 'Figma', level: '75%' },
    { name: 'Git & GitHub', level: '85%' },
  ]

  return (
    <section id="skills" style={{ padding: '6rem 0', width: '100%', background: 'rgba(13,13,26,0.5)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#a855f7', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            What I Know
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800' }}>
            Skills & Technologies
          </h2>
        </div>

        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '16px', padding: '1.5rem', transition: 'all 0.3s ease' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.6)'
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(124,58,237,0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{skill.name}</span>
                <span style={{ color: '#a855f7', fontWeight: '700', fontSize: '0.9rem' }}>{skill.level}</span>
              </div>
              <div style={{ background: 'rgba(124,58,237,0.1)', borderRadius: '50px', height: '6px', overflow: 'hidden' }}>
                <div style={{ width: skill.level, height: '100%', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', borderRadius: '50px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills