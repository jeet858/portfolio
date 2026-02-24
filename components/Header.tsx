'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  // { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        const el = section as HTMLElement
        const top = el.offsetTop - 100
        const bottom = top + el.offsetHeight
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveLink(`#${el.id}`)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setActiveLink(href)
    setNavOpen(false)
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          Software<span>Dev</span>
        </a>
        <button
          className="mobile-toggle"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
        >
          <i className={`fas fa-${navOpen ? 'times' : 'bars'}`}></i>
        </button>
        <nav className={`nav${navOpen ? ' active' : ''}`} id="nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link${activeLink === link.href ? ' active' : ''}`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
