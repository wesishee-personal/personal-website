import { ExperienceEntry } from '../components/ExperienceEntry'
import { SkillGroup } from '../components/SkillGroup'
import { education, experience } from '../data/experience'
import { profile } from '../data/profile'
import { skills } from '../data/skills'

export function Resume() {
  return (
    <main className="page">
      <div className="container">
        <section className="section stack">
          <h1>Resume</h1>
          <p className="hero__meta">
            {profile.location} &middot;{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <div className="button-row">
            <a
              className="button button--accent"
              href={profile.resumePdf}
              download="Wes-Ishee-Resume.pdf"
            >
              Download PDF
            </a>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Professional summary</h2>
          <p>{profile.summary}</p>
        </section>

        <section className="section">
          <h2 className="section-title">Skills</h2>
          {skills.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </section>

        <section className="section">
          <h2 className="section-title">Experience</h2>
          {experience.map((entry) => (
            <ExperienceEntry key={entry.company} entry={entry} />
          ))}
        </section>

        <section className="section">
          <h2 className="section-title">Education</h2>
          {education.map((entry) => (
            <div key={entry.school}>
              <h3>{entry.school}</h3>
              <p className="entry__role">{entry.degree}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
