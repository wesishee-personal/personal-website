import type { Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p className="card__body">{project.description}</p>
      <ul className="tags">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer">
          View project →
        </a>
      )}
    </article>
  )
}
