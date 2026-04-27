import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  useEffect(() => {
    gsap.fromTo('.service-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%'
        }
      }
    )
  }, [])

  const services = [
    {
      icon: '⚛️',
      title: 'React & NextJS Websites',
      description: 'Fast, modern, fully responsive websites built with React and NextJS. 100% custom code, no templates.',
      price: 'From $80'
    },
    {
      icon: '🎮',
      title: '3D Interactive Websites',
      description: 'Stunning 3D websites using Three.js and WebGL. Immersive experiences that make your brand stand out.',
      price: 'From $200'
    },
    {
      icon: '🔥',
      title: 'MERN Full Stack Apps',
      description: 'Complete web applications with React frontend, Node.js backend, Express API and MongoDB database.',
      price: 'From $250'
    },
    {
      icon: '🎯',
      title: 'Figma to React',
      description: 'Pixel-perfect conversion of your Figma designs into clean, responsive React components.',
      price: 'From $100'
    },
    {
      icon: '🚀',
      title: 'Landing Pages',
      description: 'High-converting landing pages with smooth animations, modern UI and fast load times.',
      price: 'From $80'
    },
    {
      icon: '🔌',
      title: 'API Integration',
      description: 'Connect your frontend to any REST API, third-party services, payment gateways and more.',
      price: 'From $100'
    },
  ]

  return (
    <section id="services" style={{
      padding: '6rem 2rem',
      background: 'rgba(13,13,26,0.5)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            What I Offer
          </p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: '800'
          }}>
            My Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{
                background: 'rgba(13,13,26,0.8)',
                border: '1px solid rgba(124,58,237,0.2)',
                borderRadius: '20px',
                padding: '2rem',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.6)'
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(124,58,237,0.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                {service.icon}
              </div>

              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                marginBottom: '0.8rem',
                color: 'white'
              }}>
                {service.title}
              </h3>

              <p style={{
                color: '#94a3b8',
                fontSize: '0.9rem',
                lineHeight: '1.7',
                marginBottom: '1.5rem'
              }}>
                {service.description}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  color: '#a855f7',
                  fontWeight: '700',
                  fontSize: '1rem'
                }}>
                  {service.price}
                </span>
                <a
                  href="https://www.fiverr.com/s/0b20P0q"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                    color: 'white',
                    padding: '0.5rem 1.2rem',
                    borderRadius: '50px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  Hire Me
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services