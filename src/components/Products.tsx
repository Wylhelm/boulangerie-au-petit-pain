import './Products.css';

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
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=600&h=400&fit=crop&auto=format&q=80',
    imageAlt: 'Baguettes tradition fraîchement cuites',
    name: 'Baguette Tradition',
    description: 'Notre baguette phare, croustillante dehors et moelleuse dedans. Fabriquée selon les méthodes traditionnelles françaises.',
    tag: 'Incontournable',
  },
  {
    id: 'pain-campagne',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop&auto=format&q=80',
    imageAlt: 'Pain de campagne au levain naturel',
    name: 'Pain de Campagne',
    description: 'Un pain rustique au levain naturel, à la croûte dorée et à la mie aérée avec des notes légèrement acidulées.',
    tag: 'Coup de coeur',
  },
  {
    id: 'croissant',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=400&fit=crop&auto=format&q=80',
    imageAlt: 'Croissants au beurre AOP dorés',
    name: 'Croissant au Beurre',
    description: 'Feuilletage délicat, beurre AOP de qualité, dorure parfaite. Le croissant comme vous l\'aimez, chaque matin.',
    tag: 'Best-seller',
  },
  {
    id: 'pain-chocolat',
    image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&h=400&fit=crop&auto=format&q=80',
    imageAlt: 'Pains au chocolat feuilletés',
    name: 'Pain au Chocolat',
    description: 'Deux rangées de chocolat noir fondu enveloppées dans une pâte feuilletée beurrée à souhait.',
  },
  {
    id: 'brioche',
    image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=600&h=400&fit=crop&auto=format&q=80',
    imageAlt: 'Brioche maison filante et dorée',
    name: 'Brioche Maison',
    description: 'Filante, dorée, parfumée à la fleur d\'oranger. Notre brioche est le fruit de 24h de pousse lente pour un résultat incomparable.',
  },
  {
    id: 'tarte',
    image: 'https://images.unsplash.com/photo-1488477181375-a73ba7093dc2?w=600&h=400&fit=crop&auto=format&q=80',
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
