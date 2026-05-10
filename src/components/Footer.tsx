import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo-icon" aria-hidden="true">&#127863;</span>
          <div>
            <strong className="footer__brand-name">Au Bon Pain</strong>
            <p className="footer__brand-tagline">Boulangerie Artisanale depuis 1978</p>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Navigation pied de page">
          <ul className="footer__nav-list">
            <li><a href="#accueil" className="footer__nav-link">Accueil</a></li>
            <li><a href="#produits" className="footer__nav-link">Nos Produits</a></li>
            <li><a href="#contact" className="footer__nav-link">Contact</a></li>
          </ul>
        </nav>

        <div className="footer__contact">
          <p>12 Rue du Four à Bois, 75011 Paris</p>
          <a href="tel:+33142000000">01 42 00 00 00</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {CURRENT_YEAR} Au Bon Pain. Tous droits réservés.</p>
          <p className="footer__bottom-love">Fait avec &#10084;&#65039; à Paris</p>
        </div>
      </div>
    </footer>
  );
}
