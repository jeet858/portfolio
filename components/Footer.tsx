const quickLinks = ['Home', 'About', 'Services', 'Portfolio', 'Contact']
const services = ['Web Development', 'Mobile App Development', 'Full Stack Development', 'Responsive Design', 'Performance Optimization', 'SEO Optimization', 'Website Maintenance']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <a href="#" className="footer-logo">Cyber<span>Dev</span></a>
            <p className="footer-text">
              Creating stunning digital experiences that combine aesthetic design with technical excellence.
            </p>
            <div className="footer-social">
              {[
                { icon: 'fab fa-github', link: 'https://github.com/jeet858' },
                { icon: 'fab fa-linkedin-in', link: 'http://www.linkedin.com/in/jeet-m' },
              ].map((s, i) => (
                <a key={i} href={s.link} className="footer-social-icon">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer-links-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-links-title">Services</h3>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="footer-link">{service}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SoftwareDev. All rights reserved. Designed with <span style={{ color: 'var(--primary)' }}>♥</span> by Jeet Majumder</p>
        </div>
      </div>
    </footer>
  )
}
