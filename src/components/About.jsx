import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo('.about-content',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.about-content', start: 'top 80%' } }
    )
    gsap.fromTo('.about-stats',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.about-stats', start: 'top 80%' } }
    )
  }, [])

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Built' },
    { number: '4', label: 'Certifications' },
    { number: '100%', label: 'Satisfaction' },
  ]

  return (
    <section id="about" ref={sectionRef} style={{ padding: '6rem 0', width: '100%', background: '#050510' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#a855f7', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Who I Am
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800' }}>
            About Me
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div className="about-content">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Creative Frontend Engineer & MERN Developer
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '1rem', fontSize: '0.95rem' }}>
              Hi! I am Suman Medhi, a passionate frontend engineer from Guwahati, Assam.
              I specialize in building fast, modern, and fully responsive websites using React, NextJS, and Three.js.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '2rem', fontSize: '0.95rem' }}>
              I build 100% custom code — no templates, no WordPress. Just clean, modern web experiences
              that convert visitors into customers. From 3D interactive websites to full-stack MERN applications,
              I deliver quality work fast.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="mailto:sumanmedhi775@gmail.com"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: 'white', padding: '0.7rem 1.5rem', borderRadius: '50px', fontWeight: '600', fontSize: '0.9rem', display: 'inline-block' }}
              >
                Contact Me
              </a>
              <a
                href="https://github.com/SumanMed01"
                target="_blank"
                rel="noreferrer"
                style={{ background: 'transparent', color: 'white', padding: '0.7rem 1.5rem', borderRadius: '50px', fontWeight: '600', fontSize: '0.9rem', border: '1px solid rgba(124,58,237,0.5)', display: 'inline-block' }}
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="about-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '16px', padding: '2rem', textAlign: 'center', transition: 'border-color 0.3s ease, transform 0.3s ease' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.6)'
                  e.currentTarget.style.transform = 'translateY(-5px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: '900', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>
                  {stat.number}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: '500' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About