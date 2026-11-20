import { viatuta } from '../data/viatuta'
import { ViatutaPreview } from './ViatutaPreview'

export function ViatutaFeature() {
  return (
    <div className="feature">
      <div className="stack">
        <p className="eyebrow">
          Side project <span className="badge">{viatuta.status}</span>
        </p>
        <h2>{viatuta.name}</h2>
        <p className="feature__lead">{viatuta.tagline}</p>
        {viatuta.description.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="feature__body">
            {paragraph}
          </p>
        ))}
        <ul className="tags">
          {viatuta.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
        {viatuta.url && (
          <div className="button-row">
            <a className="button button--accent" href={viatuta.url}>
              Open Viatuta →
            </a>
          </div>
        )}
      </div>
      <div>
        <ViatutaPreview />
        <dl className="stats">
          {viatuta.stats.map(({ value, label }) => (
            <div key={label} className="stat">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
