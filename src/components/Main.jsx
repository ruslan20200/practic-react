import { profile, sections } from '../data/content.js'

export function Main() {
  return (
    <main id="home">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {profile.role}
          </p>
          <h1 id="hero-title">
            Building my
            <br />
            <span>way forward.</span>
          </h1>
          <p className="hero-description">{profile.introduction}</p>
          <a className="text-link" href="#projects">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-aside" aria-label={`Based in ${profile.location}`}>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <span className="hero-monogram" aria-hidden="true">
            {profile.name.charAt(0)}
          </span>
          <p className="location-label">
            <span aria-hidden="true">↗</span> {profile.location}
          </p>
        </div>
      </section>

      <section className="content-section section-shell" id="about">
        <div className="section-label">
          <span>01</span>
          <p>{sections.about.eyebrow}</p>
        </div>
        <div className="section-content">
          <h2>{sections.about.title}</h2>
          <p className="section-description">{sections.about.description}</p>
        </div>
      </section>

      <section className="content-section section-shell" id="education">
        <div className="section-label">
          <span>02</span>
          <p>{sections.education.eyebrow}</p>
        </div>
        <div className="section-content">
          <h2>{sections.education.title}</h2>
          <p className="section-description">{sections.education.description}</p>
        </div>
      </section>

      <section className="content-section section-shell" id="skills">
        <div className="section-label">
          <span>03</span>
          <p>{sections.skills.eyebrow}</p>
        </div>
        <div className="section-content">
          <h2>{sections.skills.title}</h2>
          <ul className="skill-list">
            {sections.skills.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section project-section section-shell" id="projects">
        <div className="section-label">
          <span>04</span>
          <p>{sections.projects.eyebrow}</p>
        </div>
        <article className="project-card">
          <div className="project-number" aria-hidden="true">
            01
          </div>
          <div>
            <h2>{sections.projects.title}</h2>
            <p className="section-description">{sections.projects.description}</p>
            <ul className="project-tags" aria-label="Technologies">
              {sections.projects.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <span className="project-arrow" aria-hidden="true">
            ↗
          </span>
        </article>
      </section>

      <section className="contact-banner section-shell">
        <p className="eyebrow">Have a question or an idea?</p>
        <a href={`mailto:${profile.email}`}>
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  )
}
