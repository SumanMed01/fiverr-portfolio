const Footer = () => {
  const links = ['About', 'Skills', 'Projects', 'Services', 'Contact']

  return (
    <footer style={{
      background: 'rgba(13,13,26,0.9)',
      borderTop: '1px solid rgba(124,58,237,0.2)',
      padding: '3rem 2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '1.8rem',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          SumanTheDev
        </div>

        {/* Nav Links */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {links.map(link => (
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
        </div>

        {/* Social Links */}
        <div style={{
          display: 'flex',
          gap: '1rem'
        }}>
          {[
            { icon: '🐙', link: 'https://github.com/SumanMed01', label: 'GitHub' },
            { icon: '💼', link: 'https://www.linkedin.com/in/suman-medhi-20381624b/', label: 'LinkedIn' },
            { icon: '🚀', link: 'https://www.fiverr.com/s/0b20P0q', label: 'Fiverr' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              title={social.label}
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                background: 'rgba(124,58,237,0.1)',
                border: '1px solid rgba(124,58,237,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(124,58,237,0.3)'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.6)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(124,58,237,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)'
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{
          color: '#475569',
          fontSize: '0.85rem',
          textAlign: 'center'
        }}>
          © 2026 Suman Medhi. All rights reserved. Built with React & Three.js
        </div>
      </div>
    </footer>
  )
}

export default Footer