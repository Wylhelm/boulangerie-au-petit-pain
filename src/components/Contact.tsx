import './Contact.css';

const HOURS = [
  { day: 'Lundi', hours: 'Fermé', closed: true },
  { day: 'Mardi – Vendredi', hours: '6h30 – 19h30', closed: false },
  { day: 'Samedi', hours: '6h00 – 19h00', closed: false },
  { day: 'Dimanche', hours: '7h00 – 13h00', closed: false },
];

function InfoCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="info-card">
      <div className="info-card__icon" aria-hidden="true">{icon}</div>
      <div className="info-card__body">
        <h3 className="info-card__title">{title}</h3>
        <div className="info-card__content">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <header className="section-header">
          <span className="section-header__eyebrow">Venez nous rendre visite</span>
          <h2 className="section-header__title">Contact &amp; Horaires</h2>
          <div className="divider" />
          <p className="section-header__subtitle">
            Notre boulangerie vous accueille du mardi au dimanche.
            N'hésitez pas à passer ou à nous appeler.
          </p>
        </header>

        <div className="contact-grid">
          {/* Hours table */}
          <div className="contact-hours">
            <h3 className="contact-hours__title">Horaires d'ouverture</h3>
            <table className="hours-table">
              <tbody>
                {HOURS.map(({ day, hours, closed }) => (
                  <tr key={day} className={`hours-table__row${closed ? ' hours-table__row--closed' : ''}`}>
                    <td className="hours-table__day">{day}</td>
                    <td className="hours-table__hours">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Info cards */}
          <div className="contact-info">
            <InfoCard icon="&#128205;" title="Adresse">
              <p>12 Rue du Four à Bois</p>
              <p>75011 Paris, France</p>
              <a
                href="https://maps.google.com"
                className="info-card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir sur Google Maps &rarr;
              </a>
            </InfoCard>

            <InfoCard icon="&#128222;" title="Téléphone">
              <a href="tel:+33142000000" className="info-card__phone">
                01 42 00 00 00
              </a>
              <p className="info-card__note">Commandes et renseignements</p>
            </InfoCard>

            <InfoCard icon="&#128140;" title="Email">
              <a href="mailto:bonjour@aubonpain.fr" className="info-card__link">
                bonjour@aubonpain.fr
              </a>
              <p className="info-card__note">Réponse sous 24h</p>
            </InfoCard>

            <InfoCard icon="&#128247;" title="Réseaux sociaux">
              <div className="info-card__socials">
                <a href="#" className="info-card__social-link" aria-label="Instagram">
                  Instagram
                </a>
                <a href="#" className="info-card__social-link" aria-label="Facebook">
                  Facebook
                </a>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
