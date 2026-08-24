import type { Experience } from '../data/experience'

export function ExperienceEntry({ entry }: { entry: Experience }) {
  return (
    <article>
      <div className="entry__head">
        <h3>{entry.company}</h3>
        <span className="entry__period">{entry.period}</span>
        <span className="entry__role">{entry.role}</span>
      </div>
      <ul className="bullets">
        {entry.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  )
}
