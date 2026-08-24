export interface ProfileLink {
  label: string
  href: string
}

export const profile = {
  name: 'Wes Ishee',
  title: 'Senior Software Engineer — Distributed Systems & Platform',
  location: 'Austin, TX',
  email: 'wesishee@gmail.com',
  phone: '(512) 996-7257',
  links: [
    { label: 'Email', href: 'mailto:wesishee@gmail.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/wesishee' },
    { label: 'GitHub', href: 'https://github.com/wesishee-personal' },
  ] as ProfileLink[],

  /** First person, for the About page. */
  bio: [
    "I'm a backend engineer in Austin, Texas. For the past twelve years I've designed, built, and operated high-throughput distributed systems and internet-scale APIs — mostly in PHP, with Python and TypeScript along the way.",
    "I've been at Salesforce on the Pardot team since 2014, where I lead technically and own services end to end: architecture and API versioning through incident response and performance work. The problems I like most are the unglamorous ones — sync pipelines that fall behind, APIs that have to stay backward compatible for years, observability that should have surfaced a problem before a customer did.",
    "Lately a lot of my work involves pointing AI agents at that same class of problem: rebuilding observability across divergent pipelines, cutting manual toil, and shortening the path from an idea to something running in production.",
  ],

  /** Third person, as written on the resume. */
  summary:
    'Senior Software Engineer with 12+ years designing, building, and operating high-throughput distributed systems and internet-scale APIs. Deep experience owning services end-to-end in production, from architecture and versioning through incident response and performance optimization. Skilled in applying AI tooling and agents to accelerate engineering delivery, strengthen observability, and cut manual toil. Proven track record mentoring engineers and partnering cross-functionally to ship systems that drive measurable business impact.',

  resumePdf: '/wes-ishee-resume.pdf',
}
