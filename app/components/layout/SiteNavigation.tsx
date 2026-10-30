import type { PageNavigation } from '../../shared/types/design'

export default function SiteNavigation({ navigation, onNotice }: { navigation: PageNavigation; onNotice: (message: string, duration?: number) => void }) {
  return <nav className="site-nav" aria-label="Main navigation"><a className="brand" href="#home"><span className="brand-mark">✳</span> {navigation.brand}</a><div className="nav-links">{navigation.links.map((link) => <a key={link} href={'#' + link.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-')}>{link}</a>)}</div>{navigation.showLogin && <button className="nav-login" type="button" onClick={() => onNotice('Welcome back!')}>{navigation.loginLabel}</button>}</nav>
}
