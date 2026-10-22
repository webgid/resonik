import data from '@/data/products.json';
import Button from '../Button/Button';
import ProductMedia from '../ProductMedia/ProductMedia';
import styles from './Home.module.css';
export default function HomeHero() {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.heroTitle}>
        <p className="eyebrow">RESONIK / БАМПЕРИ НА ЗАМОВЛЕННЯ</p>
        <h1>
          Задум.
          <br />У металі.
        </h1>
      </div>
      <div className={styles.heroCopy}>
        <p>
          Передній чи задній. Сталь або нержавійка 3 мм. Оберіть основу — решту узгодимо під ваше
          авто.
        </p>
        <Button href="/catalog">Обрати бампер</Button>
        <span>Сталь і нержавійка. Під вашу задачу.</span>
      </div>
      <div className={styles.heroMedia}>
        <ProductMedia
          product={data.products[0]}
          preload
          sizes="(max-width: 1440px) 100vw, 1296px"
        />
      </div>
      <div className={styles.heroMeta}>
        <div>
          <span className="eyebrow">ПЕРЕДНІЙ БАМПЕР / КОНЦЕПТ</span>
          <p>Метал 3 мм · Сталь або нержавійка</p>
        </div>
        <div>
          <span className="eyebrow">ВИГОТОВЛЕННЯ ПІД АВТОМОБІЛЬ</span>
          <p>Модель, покоління та кріплення узгоджуємо перед роботою.</p>
        </div>
      </div>
    </section>
  );
}
