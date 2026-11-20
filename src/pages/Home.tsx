import { Link } from 'react-router-dom'
import { ExperienceEntry } from '../components/ExperienceEntry'
import { Tabs, type TabItem } from '../components/Tabs'
import { ViatutaFeature } from '../components/ViatutaFeature'
import { education, experience } from '../data/experience'
import { profile } from '../data/profile'

/** The homepage shows the highlights; the full list lives on /resume. */
const HIGHLIGHTS = 3

const experienceTabs: TabItem[] = [
  ...experience.map((entry) => ({
    label: entry.company,
    content: (
      <>
        <ExperienceEntry entry={{ ...entry, bullets: entry.bullets.slice(0, HIGHLIGHTS) }} />
        <p className="tab__more">
          <Link to="/resume">Full resume →</Link>
        </p>
      </>
    ),
  })),
  {
    label: 'Earlier roles',
    content: <p className="soon">Coming soon.</p>,
  },
  {
    label: 'Education',
    content: (
      <>
        {education.map((entry) => (
          <div key={entry.school}>
            <h3>{entry.school}</h3>
            <p className="entry__role">{entry.degree}</p>
          </div>
        ))}
      </>
    ),
  },
]

export function Home() {
  return (
    <main className="page">
      <div className="container container--wide">
        <section className="section">
          <p className="eyebrow">{profile.location}</p>
          <h1>{profile.headline}</h1>
          <p className="hero__title hero__title--wide">
            {profile.name} &middot; {profile.tagline}
          </p>
          <div className="button-row hero__actions">
            <a href={`mailto:${profile.email}`} className="button button--accent">
              Get in touch
            </a>
            <a href={profile.resumePdf} className="button" download="Wes-Ishee-Resume.pdf">
              Resume PDF
            </a>
            {profile.links
              .filter(({ label }) => label === 'GitHub')
              .map(({ label, href }) => (
                <a key={href} href={href} className="button" rel="me noreferrer">
                  {label}
                </a>
              ))}
          </div>
        </section>

        <section className="section">
          <ViatutaFeature />
        </section>

        <section className="section">
          <h2 className="section-title">Experience</h2>
          <Tabs tabs={experienceTabs} label="Professional experience" />
        </section>
      </div>
    </main>
  )
}
