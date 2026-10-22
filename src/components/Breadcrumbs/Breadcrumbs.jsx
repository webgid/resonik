import Link from 'next/link';
import styles from './Breadcrumbs.module.css';
export default function Breadcrumbs({ current, dark = false }) {
  return (
    <nav
      aria-label="Навігаційний ланцюжок"
      className={`${styles.breadcrumbs} ${dark ? styles.dark : ''}`}
    >
      <div className="container">
        <Link href="/">Головна</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{current}</span>
      </div>
    </nav>
  );
}
