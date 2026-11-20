import { profile } from '../data/profile'

export function Footer({ wide = false }: { wide?: boolean }) {
  return (
    <footer className="footer">
      <div className={wide ? 'container container--wide footer__inner' : 'container footer__inner'}>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <ul className="footer__links">
          {profile.links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} rel="me noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
