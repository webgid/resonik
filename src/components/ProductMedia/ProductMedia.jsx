import Image from 'next/image';
import styles from './ProductMedia.module.css';
export default function ProductMedia({
  product,
  studio = false,
  className = '',
  preload = false,
  sizes = '(max-width: 767px) 100vw, 60vw',
}) {
  return (
    <div className={`${styles.media} ${className}`}>
      {studio && (
        <Image
          className={styles.background}
          sizes={sizes}
          src={product.background}
          alt=""
          width="1536"
          height="1024"
        />
      )}
      <Image
        className={styles.product}
        sizes={sizes}
        preload={preload}
        src={product.image}
        alt={product.imageAlt}
        width="1536"
        height="1024"
      />
    </div>
  );
}
