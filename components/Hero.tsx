'use client'

import { useEffect, useRef } from 'react'

const texts = ['Jeet Majumder', 'Web Developer', 'Mobile App Developer', 'Freelancer']

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typingSpeed = 100
    let timeout: NodeJS.Timeout

    function type() {
      const el = typedRef.current
      if (!el) return
      const currentText = texts[textIndex]

      if (isDeleting) {
        el.textContent = currentText.substring(0, charIndex - 1)
        charIndex--
        typingSpeed = 50
      } else {
        el.textContent = currentText.substring(0, charIndex + 1)
        charIndex++
        typingSpeed = 100
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true
        typingSpeed = 1000
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length
        typingSpeed = 500
      }

      timeout = setTimeout(type, typingSpeed)
    }

    const init = setTimeout(type, 1000)
    return () => {
      clearTimeout(init)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section className="hero section" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title fade-up">
            <span>Hi, I&apos;m</span> <br />
            <span className="typed-text" ref={typedRef}>John Doe</span>
          </h1>
          <p className="hero-subtitle fade-up">
            A software developer dedicated to crafting efficient, user-centric digital experiences. I bridge design and technology to turn innovative ideas into robust, end-to-end solutions.
          </p>
          <div className="hero-cta fade-up">
            <a href="#portfolio" className="btn btn-primary">
              View My Work <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
          {/* <div className="hero-social fade-up">
            {[
              { icon: 'fab fa-github', href: '#' },
              { icon: 'fab fa-linkedin-in', href: '#' },
              { icon: 'fab fa-twitter', href: '#' },
              { icon: 'fab fa-dribbble', href: '#' },
            ].map((s, i) => (
              <a key={i} href={s.href} className="social-icon">
                <i className={s.icon}></i>
              </a>
            ))}
          </div> */}
        </div>

        <div className="hero-image fade-left">
          <div className="hero-image-wrapper">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
            <div className="hero-image-container">
              <div className="dev-image">
                <i className="fas fa-code"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
      }}>
        <span className="scroll-indicator-text">Scroll Down</span>
        <i className="fas fa-chevron-down scroll-indicator-icon"></i>
      </div>
    </section>
  )
}
