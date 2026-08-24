import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="page">
      <div className="container stack">
        <h1>Page not found</h1>
        <p className="hero__title">
          That page doesn&rsquo;t exist &mdash; it may have moved or never been here.
        </p>
        <div className="button-row">
          <Link to="/" className="button button--accent">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
