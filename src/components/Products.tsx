import './Products.css';
import imgBaguette from '../assets/baguette.webp';
import imgPainCampagne from '../assets/pain-campagne.webp';
import imgCroissant from '../assets/croissant.webp';
import imgPainChocolat from '../assets/pain-chocolat.webp';
import imgBrioche from '../assets/brioche.webp';
import imgTarte from '../assets/tarte.webp';

interface Product {
  id: string;
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  tag?: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'baguette',
    image: imgBaguette,
    imageAlt: 'Baguettes tradition fraîchement cuites',
    name: 'Baguette Tradition',
    description: 'Notre baguette phare, croustillante dehors et moelleuse dedans. Fabriquée selon les méthodes traditionnelles françaises.',
    tag: 'Incontournable',
  },
  {
    id: 'pain-campagne',
    image: imgPainCampagne,
    imageAlt: 'Pain de campagne au levain naturel',
    name: 'Pain de Campagne',
    description: 'Un pain rustique au levain naturel, à la croûte dorée et à la mie aérée avec des notes légèrement acidulées.',
    tag: 'Coup de coeur',
  },
  {
    id: 'croissant',
    image: imgCroissant,
    imageAlt: 'Croissants au beurre AOP dorés',
    name: 'Croissant au Beurre',
    description: 'Feuilletage délicat, beurre AOP de qualité, dorure parfaite. Le croissant comme vous l\'aimez, chaque matin.',
    tag: 'Best-seller',
  },
  {
    id: 'pain-chocolat',
    image: imgPainChocolat,
    imageAlt: 'Pains au chocolat feuilletés',
    name: 'Pain au Chocolat',
    description: 'Deux rangées de chocolat noir fondu enveloppées dans une pâte feuilletée beurrée à souhait.',
  },
  {
    id: 'brioche',
    image: imgBrioche,
    imageAlt: 'Brioche maison filante et dorée',
    name: 'Brioche Maison',
    description: 'Filante, dorée, parfumée à la fleur d\'oranger. Notre brioche est le fruit de 24h de pousse lente pour un résultat incomparable.',
  },
  {
    id: 'tarte',
    image: imgTarte,
    imageAlt: 'Tarte aux fruits de saison',
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
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="product-card__image"
          loading="lazy"
          width={600}
          height={400}
        />
      </div>
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
