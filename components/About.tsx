const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.Js', 'Vue.js', 'Flutter', 'React Native', "Firebase", "Prisma",  'Node.js', 'Tailwind CSS', 'Nest.Js', 'SEO', 'PostGreSQL', 'GIT', 'GITHUB', "Vercel", "Netlify", "AWS" , "Figma", "Supabase"
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image fade-right">
            <div className="about-img-container">
              <div className="code-pattern">
                <div className="code-content">
                  <i className="fas fa-laptop-code"></i>
                </div>
              </div>
              <div className="experience-badge">
                <span className="experience-number">2+</span>
                <span className="experience-text">Years Experience</span>
              </div>
            </div>
          </div>

          <div className="about-text fade-left">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate about creating digital experiences that matter
            </p>
            <p className="about-description">
              I am a Full Stack Developer with a strong foundation in programming languages and frameworks such as React, Next.Js, Nest.js, Flutter, React-Native, and Node.js
            </p>
            <p className="about-description">
              My keen eye for detail and exceptional problem-solving skills help me consistently deliver high-quality results.
            </p>
            <p className="about-description">
              Passionate about collaborating in dynamic teams, I adapt easily to new technologies and contribute meaningfully to development projects, enhancing both user experiences and operational efficiencies
            </p>
            <a href="#contact" className="btn btn-primary">
              Let&apos;s Talk <i className="fas fa-paper-plane"></i>
            </a>
            <h3 className="mt-4 mb-2 gradient-text">My Skills</h3>
            <div className="skills">
              {skills.map((skill) => (
                <span key={skill} className="skill">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
