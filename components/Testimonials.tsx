'use client'

import { useState, useEffect, useCallback } from 'react'

const testimonials = [
  {
    text: '"Working with this developer was an incredible experience. Their attention to detail and creative approach transformed our vision into a stunning website that perfectly represents our brand in the digital space."',
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    avatarClass: 'avatar-1',
  },
  {
    text: '"The developer\'s technical expertise and creative vision helped us create a website that not only looks amazing but also performs exceptionally well. Our conversion rates have increased significantly since launch."',
    name: 'Michael Brown',
    role: 'Marketing Director, Innovate Inc.',
    avatarClass: 'avatar-2',
  },
  {
    text: '"The animations and interactive elements created for our website have completely transformed our brand\'s online presence. Our customers frequently comment on how engaging and unique our site feels."',
    name: 'Emily Chen',
    role: 'Founder, Design Hub',
    avatarClass: 'avatar-3',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))
  }, [])

  const prev = () => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  }

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <h2 className="section-title fade-up">Testimonials</h2>
        <p className="section-subtitle fade-up">
          What clients say about my work and collaboration experience
        </p>
        <div className="testimonial-container fade-up">
          <div
            className="testimonial-list"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="testimonial-card">
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <div className={`author-avatar ${t.avatarClass}`}>
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="author-info">
                      <h4>{t.name}</h4>
                      <p>{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-nav">
            <button className="nav-btn prev-btn" onClick={prev}>
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="nav-btn next-btn" onClick={next}>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`dot${current === i ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
