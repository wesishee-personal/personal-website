export interface ViatutaStat {
  value: string
  label: string
}

export const viatuta = {
  name: 'Viatuta',
  status: 'In development',
  tagline: 'A cycling route planner that optimises for safety first.',
  description: [
    'While training for an Ironman 70.3 triathlon, I had one too many close calls with cars and decided that cyclists need a way to find safe routes to ride both for commuting as well as for exercise. Thus Viatuta was born. The name is a paraphrase of a latin phrase that means "The safe route".',
    'With the methodology based on a 2012 study on cyclist\'s interactions with traffic patterns, Viatuta optimizes routing for safety for cyclists. It factors in cycling infrastructure, historical collision reports, speed limits, road surface, lighting, and user reported hazards to find the safest route for a cyclist to get from A to B.',
  ],
  tags: ['Go', 'PostGIS', 'React', 'Mapbox', 'iOS'],
  stats: [
    { value: '4', label: 'rider profiles' },
    { value: '412k', label: 'directed edges' },
    { value: '~400 ms', label: 'graph load' },
  ] as ViatutaStat[],

  /**
   * Set once the app is live (planned: the web app, API, and mobile app all
   * behind viatuta.wesishee.com). The button renders only when present.
   */
  url: undefined as string | undefined,
}
