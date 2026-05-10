import './Hero.css';

export default function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Boulangerie artisanale depuis 1978</span>
          <h1 className="hero__title">
            Le pain fait avec&nbsp;
            <span className="hero__title-highlight">passion</span>,<br />
            savouré avec plaisir
          </h1>
          <p className="hero__description">
            Chaque matin, nous pétrissons, façonnons et cuisons nos pains et viennoiseries
            à la main, avec des ingrédients soigneusement sélectionnés pour vous offrir
            le meilleur de l'artisanat boulanger.
          </p>
          <div className="hero__actions">
            <a href="#produits" className="btn btn--primary">
              Découvrir nos produits
            </a>
            <a href="#contact" className="btn btn--outline">
              Nous trouver
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__badge">
            <span className="hero__badge-icon">&#127863;</span>
            <span className="hero__badge-text">Fait maison chaque jour</span>
          </div>
          <div className="hero__bread-grid">
            <div className="hero__bread-card hero__bread-card--lg">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=420&fit=crop&auto=format&q=80"
                alt="Pain de campagne au levain"
                className="hero__bread-img"
                loading="eager"
              />
              <span className="hero__bread-label">Pain de campagne</span>
            </div>
            <div className="hero__bread-card">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=320&fit=crop&auto=format&q=80"
                alt="Croissant au beurre"
                className="hero__bread-img"
                loading="eager"
              />
              <span className="hero__bread-label">Croissant</span>
            </div>
            <div className="hero__bread-card">
              <img
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=400&h=320&fit=crop&auto=format&q=80"
                alt="Baguette tradition"
                className="hero__bread-img"
                loading="eager"
              />
              <span className="hero__bread-label">Baguette</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
