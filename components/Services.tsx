const services = [
  {
    icon: 'fa-brands fa-chrome',
    title: 'Web Development',
    desc: 'Creating responsive and performant websites with clean code and modern technologies to ensure the best user experience.',
  },
  {
    icon: 'fa-brands fa-flutter',
    title: 'Mobile App Development',
    desc: 'Building high-performance cross-platform applications that deliver seamless experiences across Android and iOS devices.',
  },
  {
    icon: 'fas fa-code',
    title: 'Full Stack Development',
    desc: 'Developing scalable end-to-end solutions by seamlessly integrating robust backend systems with dynamic, user-friendly frontends.',
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Responsive Design',
    desc: 'Building websites that work flawlessly across all devices, from desktops to smartphones and tablets.',
  },
  {
    icon: 'fas fa-rocket',
    title: 'Performance Optimization',
    desc: 'Improving website speed and performance to enhance user experience and search engine rankings.',
  },
  {
    icon: 'fas fa-search',
    title: 'SEO Optimization',
    desc: "Implementing best practices to improve your website's visibility in search engines and drive organic traffic.",
  },
  {
    icon: 'fas fa-cogs',
    title: 'Website Maintenance',
    desc: 'Providing ongoing support and updates to keep your website secure, up-to-date, and running smoothly.',
  },
]

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <h2 className="section-title fade-up">My Services</h2>
        <p className="section-subtitle fade-up">
          Specialized solutions to elevate your digital presence and create memorable user experiences
        </p>
        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card fade-up">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.desc}</p>
              <a href="#" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
