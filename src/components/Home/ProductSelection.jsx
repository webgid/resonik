import data from '@/data/products.json';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Home.module.css';
export default function ProductSelection() {
  return (
    <section className={`container ${styles.selection}`}>
      <p className="eyebrow">ПЕРЕДНІЙ І ЗАДНІЙ / БАМПЕРИ RESONIK</p>
      <h2>З чого почнемо?</h2>
      <div className="product-grid">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
