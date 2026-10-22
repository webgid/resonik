'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import data from '@/data/products.json';
import styles from './MobileProductPicker.module.css';

export default function MobileProductPicker() {
  const pathname = usePathname();

  return (
    <nav className={styles.bar} aria-label="Швидкий вибір бампера">
      <div className={styles.options}>
        {data.products.map((product) => {
          const active = pathname === `/catalog/${product.slug}`;
          return (
            <Link
              key={product.id}
              href={`/catalog/${product.slug}`}
              aria-label={product.name}
              aria-current={active ? 'page' : undefined}
              className={styles.option}
            >
              <Image
                src={product.image}
                alt=""
                width={90}
                height={60}
                sizes="90px"
                className={styles.image}
              />
              <span className={styles.label}>
                <span>{product.id === 'front-bumper' ? 'Передній' : 'Задній'}</span>
                <small>бампер</small>
              </span>
              <span className={styles.indicator} aria-hidden="true" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
