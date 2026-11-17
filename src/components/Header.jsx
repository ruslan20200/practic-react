import { navigation, profile } from '../data/content.js'

export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label={`${profile.name} — home`}>
        <span className="wordmark-mark">R</span>
        <span>{profile.name}</span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-contact" href={`mailto:${profile.email}`}>
        Get in touch <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}
