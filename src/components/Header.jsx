import { copy, navigation, profile } from '../data/content.js'

export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label={copy.homeLinkLabel}>
        <span className="wordmark-mark">R</span>
        <span>{profile.name}</span>
      </a>
      <nav className="site-nav" aria-label={copy.navigationLabel}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-contact" href={`mailto:${profile.email}`}>
        {copy.contactLink} <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}
