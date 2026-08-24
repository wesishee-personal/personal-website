export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['PHP', 'Python', 'TypeScript', 'SQL', 'APEX'],
  },
  {
    category: 'Distributed Systems & Cloud',
    items: ['AWS', 'Docker', 'Kubernetes', 'Kafka', 'Storm', 'Consul', 'Vault'],
  },
  {
    category: 'Observability & Reliability',
    items: ['Prometheus', 'Grafana', 'ELK', 'Splunk', 'Graphite', 'Victoria Metrics'],
  },
  {
    category: 'Datastores',
    items: ['MySQL', 'Redis'],
  },
  {
    category: 'Tooling & Practice',
    items: ['Git', 'CI/CD', 'Jira', 'JetBrains IDEs', 'AI-assisted engineering'],
  },
]
