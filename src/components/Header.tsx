import { useState, useEffect } from 'react';
import './Header.css';

const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Nos Produits', href: '#produits' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className={`header${isScrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#accueil" className="header__logo" onClick={handleNavClick}>
          <span className="header__logo-icon" aria-hidden="true">&#127863;</span>
          <span className="header__logo-text">
            <strong>Au Bon Pain</strong>
            <small>Boulangerie Artisanale</small>
          </span>
        </a>

        <button
          className={`header__burger${isMenuOpen ? ' header__burger--open' : ''}`}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav${isMenuOpen ? ' header__nav--open' : ''}`} aria-label="Navigation principale">
          <ul className="header__nav-list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="header__nav-link" onClick={handleNavClick}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary header__cta" onClick={handleNavClick}>
            Nous contacter
          </a>
        </nav>
      </div>
    </header>
  );
}
