export interface ViatutaStat {
  value: string
  label: string
}

export const viatuta = {
  name: 'Viatuta',
  status: 'In development',
  tagline: 'A cycling route planner that optimises for safety first.',
  description: [
    'Not distance, not time: safety is the objective function and everything else is a constraint on it. Viatuta ships its own routing engine because the cost function is the product, so it has to be mine to tune.',
    'Bike lanes, road type, and speed limits from OpenStreetMap feed the cost alongside historical cyclist collisions, junction risk, and terrain. Riders can report hazards that change routes immediately. v1 covers Austin, TX.',
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
