import styles from './Home.module.css';
const features = [
  ['Ручне виготовлення', 'Увага майстра до конструкції та кожної деталі.'],
  ['Сучасні технології', 'Токарна обробка, ЧПК і зварювання для втілення вашого задуму.'],
  ['Потрійна перевірка', 'Кожен виріб перевіряємо на співвісність.'],
];
export default function Production({ standalone = false }) {
  const Heading = standalone ? 'h1' : 'h2';
  return (
    <section id="production" className={styles.production}>
      <div className={`container ${styles.productionGrid}`}>
        <div>
          <p className="eyebrow">RESONIK / ВИРОБНИЦТВО</p>
          <Heading>
            Ручна робота.
            <br />
            Технологічна точність.
          </Heading>
          <p>
            Кожен виріб виготовляємо вручну з використанням сучасних технологій і потрійною
            перевіркою співвісності.
          </p>
          <dl className={styles.features}>
            {features.map(([title, text]) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure>
          <picture>
            <source media="(max-width: 600px)" srcSet="/design/9f475.svg" />
            <img
              src="/design/a2c67.svg"
              width="698"
              height="550"
              alt="Труба вздовж спільної осі через три контрольні перерізи — схема перевірки співвісності"
            />
          </picture>
          <figcaption>ТРУБА ВЗДОВЖ СПІЛЬНОЇ ОСІ / СХЕМА КОНТРОЛЮ</figcaption>
        </figure>
      </div>
    </section>
  );
}
