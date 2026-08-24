import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile'

const links = [
  { to: '/', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
]

export function Nav() {
  return (
    <header className="nav">
      <nav className="container nav__inner" aria-label="Main">
        <NavLink to="/" className="nav__brand">
          {profile.name}
        </NavLink>
        <ul className="nav__links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive ? 'nav__link is-active' : 'nav__link'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
