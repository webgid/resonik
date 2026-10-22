import Link from 'next/link';
import { notFound } from 'next/navigation';
import data from '@/data/products.json';
import ProductMedia from '@/components/ProductMedia/ProductMedia';
import ProductConfigurator from '@/components/ProductConfigurator/ProductConfigurator';
import styles from './product.module.css';
export function generateStaticParams() {
  return data.products.map((product) => ({ slug: product.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = data.products.find((item) => item.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} на замовлення`,
    description: `${product.name} RESONIK: сталь або нержавійка 3 мм. Оберіть автомобіль, матеріал і колір. Конструкцію та ціну узгоджуємо перед виготовленням.`,
    alternates: { canonical: `/catalog/${slug}` },
  };
}
export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = data.products.find((item) => item.slug === slug);
  if (!product) notFound();
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://resonik.com${product.image}`,
    brand: { '@type': 'Brand', name: 'RESONIK' },
    material: ['Сталь 3 мм', 'Нержавійка 3 мм'],
  };
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\u003c') }}
      />
      <div className="container">
        <nav className={styles.breadcrumb} aria-label="Навігаційний ланцюжок">
          <Link href="/">Головна</Link>
          <span>/</span>
          <Link href="/catalog">Каталог</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>
        <div className={styles.grid}>
          <section className={styles.stage}>
            <p className="eyebrow">{product.name.toUpperCase()} / НА ЗАМОВЛЕННЯ</p>
            <h1>
              <span className="visually-hidden">{product.name}. </span>Форма під авто.
              <br />
              Характер — ваш.
            </h1>
            <ProductMedia product={product} preload />
            <p className={styles.caption}>
              КОНЦЕПТ ВИРОБУ / ОСТАТОЧНЕ ВИКОНАННЯ ПОГОДЖУЄМО ПІД АВТО
            </p>
            <div className={styles.material}>
              <div>
                <strong>3 мм</strong>
                <span className="eyebrow">ТОВЩИНА МЕТАЛУ</span>
              </div>
              <div>
                <p>
                  Сталь або
                  <br />
                  нержавійка
                </p>
                <span>Матеріал під ваші задачі.</span>
              </div>
            </div>
          </section>
          <ProductConfigurator product={product} />
        </div>
        <section className={styles.approval}>
          <h2>Спочатку — погоджена конструкція.</h2>
          <p>
            Уточнюємо модель, покоління, геометрію та кріплення. Фінальний вигляд і вартість
            погоджуємо перед виготовленням.
          </p>
        </section>
      </div>
    </div>
  );
}
