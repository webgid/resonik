import Link from 'next/link';
import Button from '../Button/Button';
import styles from './PageNextSteps.module.css';
export default function PageNextSteps({ eyebrow, title, text, primary, secondary }) {
  return (
    <section className={`container ${styles.section}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div>
        <p className={styles.description}>{text}</p>
        <div className={styles.actions}>
          <Button href={primary.href}>{primary.label}</Button>
          <Link href={secondary.href}>
            {secondary.label}
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
