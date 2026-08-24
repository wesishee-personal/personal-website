export interface Project {
  title: string
  description: string
  tags: string[]
  /** Rendered as a link on the card only when present. */
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Pardot v5 REST API',
    description:
      'Designed and implemented the majority of Pardot’s v5 REST API, adding 10 new endpoints while holding 100% backward compatibility with prior versions. Versioning, reliability, and consistency were treated as first-order design constraints rather than things to sort out later.',
    tags: ['PHP', 'REST', 'API versioning'],
  },
  {
    title: 'Core object sync framework redesign',
    description:
      'Rebuilt the sync framework behind Pardot’s highest-throughput customer workloads, cutting average sync queue size by 73%. The reliability gains were concrete enough to secure a new multi-million dollar contract.',
    tags: ['PHP', 'MySQL', 'Kafka'],
  },
  {
    title: 'Usage-overage detection & upsell automation',
    description:
      'An automated system that detects application usage overages and turns them into upsell opportunities at scale, generating $36M+ in revenue. Built across Sales, Product, and Legal to define the compliance policy alongside the workflow itself.',
    tags: ['PHP', 'Distributed systems', 'Automation'],
  },
  {
    title: 'Slack self-service demo provisioning',
    description:
      'A Slack-driven workflow that provisions demo environments on request, cutting time-to-value by 96% and removing the manual ops step entirely.',
    tags: ['TypeScript', 'Slack API', 'AWS'],
  },
]
