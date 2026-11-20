/**
 * Placeholder illustration: safest route (solid) vs shortest path (dotted).
 * Replace the SVG with a screenshot or an iframe of the live web app once it
 * is hosted; nothing else in the feature card depends on what is in here.
 */
export function ViatutaPreview() {
  return (
    <figure>
      <svg
        className="map"
        viewBox="0 0 400 260"
        role="img"
        aria-label="Illustration of a safest route versus the shortest path on a street grid"
      >
        <g className="map__arterial" strokeWidth="7" fill="none">
          <path d="M0 70H400M0 150H400M0 215H400M70 0V260M170 0V260M290 0V260" />
        </g>
        <g className="map__street" strokeWidth="2" fill="none">
          <path d="M0 110H400M0 185H400M120 0V260M230 0V260M350 0V260" />
        </g>
        <path
          className="map__shortest"
          d="M40 205 L40 150 L120 150 L120 110 L230 110 L230 60 L350 60"
          strokeWidth="5"
          strokeDasharray="2 7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="map__safest"
          d="M40 205 L70 205 L70 150 L170 150 L170 70 L290 70 L290 40 L350 40"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle className="map__start" cx="40" cy="205" r="7" strokeWidth="3" />
        <circle className="map__end" cx="350" cy="40" r="7" />
      </svg>
      <figcaption className="caption">
        Illustration, not the real app: safest route (solid) vs shortest path (dotted).
      </figcaption>
    </figure>
  )
}
