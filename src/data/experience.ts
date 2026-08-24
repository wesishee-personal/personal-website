export interface Experience {
  company: string
  role: string
  period: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    company: 'Salesforce (Pardot)',
    role: 'Senior Software Engineer — Technical Lead',
    period: 'July 2014 – Present',
    bullets: [
      'Owned architectural design and delivery of a cross-functional, automated system detecting application usage overages and generating upsell opportunities at scale, generating $36M+ in revenue; partnered with Sales, Product, and Legal to define compliance policy and build the automated workflow.',
      'Applied AI agents to redesign observability across 5 sync pipelines with divergent implementations, building dashboards and alerts on Prometheus/Grafana and ELK that proactively surfaced issues and reduced support investigations.',
      'Delivered a Slack-based self-service workflow in TypeScript for demo environment provisioning, cutting time-to-value by 96% and removing manual ops overhead.',
      "Mentored 6 engineers on system design, scalability, and production ownership, including two mentees who won Salesforce's All-Star award (top 1% of performers).",
      "Designed and implemented the majority of Pardot's v5 REST API, maintaining 100% backward compatibility across versions while adding 10 new endpoints — treating versioning, reliability, and consistency as first-order design constraints.",
      "Redesigned Pardot's core object sync framework serving high-throughput customer workloads, cutting average sync queue size by 73% and securing a new multi-million dollar contract on the strength of the reliability gains.",
      'Migrated authentication for 100% of customers to Salesforce SSO, unifying identity across products with zero-downtime cutover.',
      'Built an automated email spam-detection system that identifies abusive sending behavior and revokes privileges in real time, protecting platform-wide deliverability.',
      'Shipped the Engagement Studio transfer API, letting customers move programs between business units instantly instead of hours of manual setup.',
      'Built a usage-metrics pipeline integrating scuba.io with ELK, Splunk, and S3 for cross-team analytics and monitoring.',
    ],
  },
]

export interface Education {
  school: string
  degree: string
}

export const education: Education[] = [
  {
    school: 'University of Georgia',
    degree: 'Bachelor of Science, Computer Science',
  },
]
