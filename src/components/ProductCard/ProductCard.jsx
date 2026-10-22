import ProductMedia from '../ProductMedia/ProductMedia';
import ProductSpecs from '../ProductSpecs/ProductSpecs';
import Button from '../Button/Button';
import styles from './ProductCard.module.css';
export default function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <ProductMedia product={product} studio sizes="(max-width: 767px) 100vw, 50vw" />
      <div className={styles.body}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="eyebrow">3 ММ / СТАЛЬ АБО НЕРЖАВІЙКА</span>
        <ProductSpecs product={product} />
        <p className={styles.price}>${product.price}</p>
        <p className={styles.note}>Попередні параметри · уточнюємо під авто</p>
        <Button href={`/catalog/${product.slug}`}>
          Обрати {product.id === 'front-bumper' ? 'передній' : 'задній'}
        </Button>
      </div>
    </article>
  );
}
