import Link from 'next/link';
import Brand from '../Brand/Brand';
import Button from '../Button/Button';
import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <h2>
            Метал — наша стихія.
            <br />
            Точність — наш характер.
          </h2>
          <div>
            <p>
              Любимо метал за силу й можливості. Точимо, зварюємо та надаємо форму вашим ідеям — з
              увагою до кожної деталі.
            </p>
            <Button light>Обговорити ідею</Button>
          </div>
        </div>
        <div className={styles.bottom}>
          <Brand footer />
          <nav aria-label="Навігація у футері">
            <Link href="/catalog">Каталог</Link>
            <Link href="/production">Наш підхід</Link>
            <Link href="/how-to-order">Як замовити</Link>
          </nav>
        </div>
        <p className={styles.signature}>RESONIK · Із задуму — в метал.</p>
      </div>
    </footer>
  );
}
