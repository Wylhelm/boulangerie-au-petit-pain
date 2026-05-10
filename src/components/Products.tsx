import './Products.css';

interface Product {
  id: string;
  emoji: string;
  name: string;
  description: string;
  tag?: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'baguette',
    emoji: '&#127849;',
    name: 'Baguette Tradition',
    description: 'Notre baguette phare, croustillante dehors et moelleuse dedans. Fabriquée selon les méthodes traditionnelles françaises.',
    tag: 'Incontournable',
  },
  {
    id: 'pain-campagne',
    emoji: '&#127838;',
    name: 'Pain de Campagne',
    description: 'Un pain rustique au levain naturel, à la croûte dorée et à la mie aérée avec des notes légèrement acidulées.',
    tag: 'Coup de coeur',
  },
  {
    id: 'croissant',
    emoji: '&#127850;',
    name: 'Croissant au Beurre',
    description: 'Feuilletage délicat, beurre AOP de qualité, dorure parfaite. Le croissant comme vous l\'aimez, chaque matin.',
    tag: 'Best-seller',
  },
  {
    id: 'pain-chocolat',
    emoji: '&#127851;',
    name: 'Pain au Chocolat',
    description: 'Deux rangées de chocolat noir fondu enveloppées dans une pâte feuilletée beurrée à souhait.',
  },
  {
    id: 'brioche',
    emoji: '&#129392;',
    name: 'Brioche Maison',
    description: 'Filante, dorée, parfumée à la fleur d\'oranger. Notre brioche est le fruit de 24h de pousse lente pour un résultat incomparable.',
  },
  {
    id: 'tarte',
    emoji: '&#127856;',
    name: 'Tartes & Viennoiseries',
    description: 'Une sélection de tartes du jour aux fruits de saison et de viennoiseries variées pour ravir toutes les envies.',
    tag: 'Saison',
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      {product.tag && (
        <span className="product-card__tag">{product.tag}</span>
      )}
      <div
        className="product-card__emoji"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: product.emoji }}
      />
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__desc">{product.description}</p>
    </article>
  );
}

export default function Products() {
  return (
    <section id="produits" className="section">
      <div className="container">
        <header className="section-header">
          <span className="section-header__eyebrow">Notre savoir-faire</span>
          <h2 className="section-header__title">Nos produits &amp; spécialités</h2>
          <div className="divider" />
          <p className="section-header__subtitle">
            Du pain au chocolat de l'enfance aux pains au levain pour les amateurs de goût,
            tout est préparé chaque jour avec amour.
          </p>
        </header>

        <ul className="products-grid">
          {PRODUCTS.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
