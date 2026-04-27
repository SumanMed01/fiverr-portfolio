import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    gsap.fromTo('.contact-content',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-content',
          start: 'top 80%'
        }
      }
    )
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:sumanmedhi775@gmail.com?subject=Project Inquiry from ${formData.name}&body=${formData.message}`
  }

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'sumanmedhi775@gmail.com', link: 'mailto:sumanmedhi775@gmail.com' },
    { icon: '💼', label: 'Fiverr', value: 'fiverr.com/SumanTheDev', link: 'https://www.fiverr.com/s/0b20P0q' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/SumanMed01', link: 'https://github.com/SumanMed01' },
    { icon: '💬', label: 'LinkedIn', value: 'Suman Medhi', link: 'https://www.linkedin.com/in/suman-medhi-20381624b/' },
  ]

  return (
    <section id="contact" style={{
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
          Get In Touch
        </p>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          fontWeight: '800'
        }}>
          Contact Me
        </h2>
      </div>

      <div className="contact-content" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'start'
      }}>
        {/* Left - Info */}
        <div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Let's work together!
          </h3>
          <p style={{
            color: '#94a3b8',
            lineHeight: '1.8',
            marginBottom: '2rem',
            fontSize: '0.95rem'
          }}>
            Have a project in mind? I'd love to help you build something amazing.
            Reach out and let's discuss how I can bring your ideas to life.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'rgba(13,13,26,0.8)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  borderRadius: '12px',
                  padding: '1rem 1.5rem',
                  transition: 'all 0.3s ease',
                  color: 'white'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.6)'
                  e.currentTarget.style.transform = 'translateX(5px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{info.icon}</span>
                <div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#a855f7',
                    fontWeight: '600',
                    marginBottom: '0.2rem'
                  }}>
                    {info.label}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#94a3b8'
                  }}>
                    {info.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div style={{
          background: 'rgba(13,13,26,0.8)',
          border: '1px solid rgba(124,58,237,0.2)',
          borderRadius: '20px',
          padding: '2rem'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                color: '#94a3b8',
                fontSize: '0.85rem',
                fontWeight: '500',
                marginBottom: '0.5rem'
              }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                style={{
                  width: '100%',
                  background: 'rgba(124,58,237,0.05)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  borderRadius: '10px',
                  padding: '0.8rem 1rem',
                  color: 'white',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(124,58,237,0.2)'}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                color: '#94a3b8',
                fontSize: '0.85rem',
                fontWeight: '500',
                marginBottom: '0.5rem'
              }}>
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                style={{
                  width: '100%',
                  background: 'rgba(124,58,237,0.05)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  borderRadius: '10px',
                  padding: '0.8rem 1rem',
                  color: 'white',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(124,58,237,0.2)'}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                color: '#94a3b8',
                fontSize: '0.85rem',
                fontWeight: '500',
                marginBottom: '0.5rem'
              }}>
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                style={{
                  width: '100%',
                  background: 'rgba(124,58,237,0.05)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  borderRadius: '10px',
                  padding: '0.8rem 1rem',
                  color: 'white',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter, sans-serif'
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(124,58,237,0.2)'}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                color: 'white',
                padding: '1rem',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                border: 'none'
              }}
              onMouseEnter={e => {
                e.target.style.opacity = '0.9'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.target.style.opacity = '1'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact