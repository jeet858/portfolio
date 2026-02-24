'use client'

import { useEffect, useState } from 'react'

export default function ScrollEffects() {
  const [scrollTop, setScrollTop] = useState(false)

  useEffect(() => {
    // Scroll progress bar
    const progressBar = document.getElementById('scrollProgress')

    // Fade animation observer
    const fadeElements = document.querySelectorAll('.fade-up, .fade-right, .fade-left, .fade-in, .scale-up')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )
    fadeElements.forEach((el) => observer.observe(el))

    // Scroll handlers
    const handleScroll = () => {
      if (progressBar) {
        const scrolled = window.scrollY
        const docHeight = document.body.offsetHeight - window.innerHeight
        progressBar.style.width = `${(scrolled / docHeight) * 100}%`
      }
      setScrollTop(window.scrollY > 500)
    }

    // Cursor
    const cursor = document.querySelector('.cursor') as HTMLElement
    const follower = document.querySelector('.cursor-follower') as HTMLElement

    const moveCursor = (e: MouseEvent) => {
      if (cursor) { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px' }
      if (follower) {
        setTimeout(() => {
          follower.style.left = e.clientX + 'px'
          follower.style.top = e.clientY + 'px'
        }, 100)
      }
    }

    // Parallax
    const shapes = document.querySelectorAll('.floating-shape') as NodeListOf<HTMLElement>
    const handleMouseMove = (e: MouseEvent) => {
      shapes.forEach((shape) => {
        const speed = 0.05
        const x = (window.innerWidth - e.clientX * speed) / 100
        const y = (window.innerHeight - e.clientY * speed) / 100
        shape.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousemove', handleMouseMove)
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" id="scrollProgress"></div>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
      <button
        className={`scroll-top${scrollTop ? ' active' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  )
}
