import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import suman from '../assets/suman.png'

const Hero = () => {
  const canvasRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    let animId
    let renderer
    let handleResize

    import('three').then((THREE) => {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true
      })

      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      camera.position.z = 3

      const particlesGeometry = new THREE.BufferGeometry()
      const count = 2000
      const positions = new Float32Array(count * 3)
      for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10
      }
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: '#a855f7',
        transparent: true,
        opacity: 0.8
      })

      const particles = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particles)

      const animate = () => {
        animId = requestAnimationFrame(animate)
        particles.rotation.y += 0.0005
        particles.rotation.x += 0.0002
        renderer.render(scene, camera)
      }
      animate()

      handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', handleResize)
    })

    return () => {
      if (handleResize) window.removeEventListener('resize', handleResize)
      if (animId) cancelAnimationFrame(animId)
      if (renderer) renderer.dispose()
    }
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo('.hero-tag',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo('.hero-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo('.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo('.hero-btns',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo('.hero-image',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
  }, [])

  return (
    <section id="home" ref={heroRef} style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 2rem',
      width: '100%'
    }}>
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Content wrapper */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
        zIndex: 1,
        position: 'relative',
        paddingTop: '5rem',
        paddingBottom: '3rem'
      }}>
        {/* Left Side */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="hero-tag" style={{
            display: 'inline-block',
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid rgba(124,58,237,0.4)',
            color: '#a855f7',
            padding: '0.4rem 1rem',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: '500',
            marginBottom: '1.5rem'
          }}>
            Available for Work
          </div>

          <h1 className="hero-title" style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            lineHeight: '1.1',
            marginBottom: '1rem'
          }}>
            Hi, I am <br />
            <span style={{
              background: 'linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Suman Medhi
            </span>
          </h1>

          <p className="hero-subtitle" style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#94a3b8',
            marginBottom: '0.5rem',
            fontWeight: '500'
          }}>
            Creative Frontend Engineer
          </p>
          <p className="hero-subtitle" style={{
            fontSize: '0.95rem',
            color: '#64748b',
            marginBottom: '2rem'
          }}>
            React - NextJS - Three.js - MERN Stack
          </p>

          <div className="hero-btns" style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <a
              href="#projects"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                color: 'white',
                padding: '0.8rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'transform 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              View Projects
            </a>
            <a
              href="https://www.fiverr.com/s/0b20P0q"
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
                transition: 'all 0.3s ease',
                display: 'inline-block'
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
              Hire Me on Fiverr
            </a>
          </div>
        </div>

        {/* Right Side - Photo */}
        <div className="hero-image" style={{
          flex: '0 0 auto',
          position: 'relative'
        }}>
          <div style={{
            width: 'clamp(220px, 28vw, 360px)',
            height: 'clamp(220px, 28vw, 360px)',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
            padding: '4px',
            boxShadow: '0 0 60px rgba(124,58,237,0.4)'
          }}>
            <img
              src={suman}
              alt="Suman Medhi"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          {/* Floating badges */}
          <div style={{
            position: 'absolute',
            top: '8%',
            right: '-8%',
            background: 'rgba(13,13,26,0.9)',
            border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: '12px',
            padding: '0.5rem 1rem',
            fontSize: '0.8rem',
            color: '#a855f7',
            fontWeight: '600',
            backdropFilter: 'blur(10px)',
            whiteSpace: 'nowrap'
          }}>
            Three.js
          </div>
          <div style={{
            position: 'absolute',
            bottom: '12%',
            left: '-8%',
            background: 'rgba(13,13,26,0.9)',
            border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: '12px',
            padding: '0.5rem 1rem',
            fontSize: '0.8rem',
            color: '#a855f7',
            fontWeight: '600',
            backdropFilter: 'blur(10px)',
            whiteSpace: 'nowrap'
          }}>
            MERN Stack
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'linear-gradient(to top, #050510, transparent)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
    </section>
  )
}

export default Hero