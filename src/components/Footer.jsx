import { footer, profile } from '../data/content.js'

export function Footer() {
  return (
    <footer className="site-footer section-shell">
      <a className="wordmark footer-wordmark" href="#home">
        <span className="wordmark-mark">R</span>
        <span>{profile.name}</span>
      </a>
      <p>{footer.note}</p>
      <p>
        {footer.copyright} {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  )
}
