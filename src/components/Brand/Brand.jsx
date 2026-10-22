import Link from 'next/link';
import styles from './Brand.module.css';
export default function Brand({ footer = false }) {
  return (
    <Link href="/" aria-label="RESONIK — головна" className={footer ? styles.footer : styles.brand}>
      {footer ? (
        <span className={styles.crop}>
          <img src="/design/88abe.png" alt="" width="1024" height="1024" />
        </span>
      ) : (
        <img src="/design/3f51c.svg" alt="" width="32" height="34" />
      )}
      <span>RESONIK</span>
    </Link>
  );
}
