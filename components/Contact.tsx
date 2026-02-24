'use client'

import { useState, FormEvent } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (form.name && form.email && form.subject && form.message) {
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title fade-up">Get In Touch</h2>
        <p className="section-subtitle fade-up">
          Let&apos;s discuss your project and create something amazing together
        </p>
        <div className="contact-content">
          <div className="contact-info fade-right">
            <div className="contact-list">
              {[
                { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Kolkata, West Bengal, India 700126' },
                { icon: 'fas fa-envelope', label: 'Email', value: 'jeetmajumder858@gmail.com' },
                { icon: 'fas fa-phone-alt', label: 'Phone', value: '+91 8617741681' },
              ].map((item) => (
                <div key={item.label} className="contact-item">
                  <div className="contact-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="contact-text">
                    <h4>{item.label}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hero-social">
              {[
                { icon: 'fab fa-github', link: 'https://github.com/jeet858' },
                { icon: 'fab fa-linkedin-in', link: 'http://www.linkedin.com/in/jeet-m' },
              ].map((s, i) => (
                <a key={i} href={s.link} className="social-icon">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form fade-left">
            {submitted && (
              <div style={{
                padding: '1rem',
                background: 'linear-gradient(135deg, rgba(138,43,226,0.2), rgba(255,0,255,0.1))',
                borderRadius: '10px',
                marginBottom: '1rem',
                color: '#E0E0FF',
                border: '1px solid rgba(138,43,226,0.3)'
              }}>
                ✓ Thank you! I&apos;ll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your Name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'Your Email' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject' },
              ].map((field) => (
                <div key={field.id} className="form-group">
                  <label htmlFor={field.id} className="form-label">{field.label}</label>
                  <input
                    type={field.type}
                    id={field.id}
                    className="form-control"
                    placeholder={field.placeholder}
                    value={form[field.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                  />
                </div>
              ))}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
