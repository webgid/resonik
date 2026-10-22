import Button from '../Button/Button';
import styles from './BrandOverview.module.css';
export default function BrandOverview() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <article>
          <p className="eyebrow">RESONIK / ВИРОБНИЦТВО</p>
          <h2>
            Ручна робота.
            <br />
            Технологічна точність.
          </h2>
          <p>
            За кожною формою — робота майстра, сучасні технології та потрійна перевірка
            співвісності.
          </p>
          <Button href="/production" outline>
            Побачити наш підхід
          </Button>
        </article>
        <article>
          <p className="eyebrow">RESONIK / ЯК ЗАМОВИТИ</p>
          <h2>
            Ваш вибір.
            <br />
            Спільне рішення.
          </h2>
          <p>
            Від моделі автомобіля до погодженої конструкції. Розповідаємо, що потрібно для першого
            кроку.
          </p>
          <Button href="/how-to-order" light>
            Як замовити бампер
          </Button>
        </article>
      </div>
    </section>
  );
}
