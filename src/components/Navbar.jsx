import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['About', 'Skills', 'Projects', 'Services', 'Contact']

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: scrolled ? 'rgba(5,5,16,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(124,58,237,0.2)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        fontSize: '1.5rem',
        fontWeight: '800',
        background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        SumanTheDev
      </div>

      {/* Desktop Links */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }} className="desktop-nav">
        {navLinks.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              color: '#94a3b8',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={e => e.target.style.color = '#a855f7'}
            onMouseLeave={e => e.target.style.color = '#94a3b8'}
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
            color: 'white',
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: '600',
            transition: 'opacity 0.3s ease'
          }}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer'
        }}
        className="mobile-menu-btn"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          background: 'rgba(5,5,16,0.98)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          borderBottom: '1px solid rgba(124,58,237,0.2)'
        }}>
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#94a3b8',
                fontSize: '1.1rem',
                fontWeight: '500'
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              color: 'white',
              padding: '0.8rem 1.5rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: '600',
              textAlign: 'center'
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar