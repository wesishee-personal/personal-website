import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export function About() {
  return (
    <main className="page">
      <div className="container">
        <section className="section">
          <h1>{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__meta">{profile.location}</p>
        </section>

        <section className="section stack">
          {profile.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </section>

        <section className="section button-row">
          <Link to="/projects" className="button button--accent">
            See what I&rsquo;ve built
          </Link>
          <Link to="/resume" className="button">
            Read my resume
          </Link>
          <a href={`mailto:${profile.email}`} className="button">
            Get in touch
          </a>
        </section>
      </div>
    </main>
  )
}
