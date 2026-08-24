import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <main className="page">
      <div className="container">
        <section className="section stack">
          <h1>Projects</h1>
          <p className="hero__title">
            Selected work from twelve years of building and running backend systems.
            Most of it lives behind Salesforce&rsquo;s walls, so these are write-ups
            rather than repositories.
          </p>
        </section>

        <section className="section">
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
