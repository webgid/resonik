import data from '@/data/products.json';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './catalog.module.css';
export const metadata = {
  title: 'Каталог бамперів на замовлення',
  alternates: { canonical: '/catalog' },
};
export default function CatalogPage() {
  return (
    <section className={`container ${styles.catalog}`}>
      <div className={styles.heading}>
        <p className="eyebrow">RESONIK / КАТАЛОГ</p>
        <h1>
          Ваше авто.
          <br />
          Ваш характер.
        </h1>
        <p>
          Два вироби — передній і задній бампер. Оберіть модель авто, матеріал та колір. Кожну
          конструкцію погоджуємо перед виготовленням.
        </p>
      </div>
      <div className="product-grid">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.note}>
        <p>
          Сталь або нержавійка · метал 3 мм
          <br />
          Кольори: чорний, хакі, койот
        </p>
        <p>
          Не знаєте покоління авто? Надішліть модель і рік випуску — уточнимо сумісність перед
          погодженням.
        </p>
      </div>
    </section>
  );
}
