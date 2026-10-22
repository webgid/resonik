import data from '@/data/products.json';
import { orderSteps } from '@/data/site';
import ProductMedia from '../ProductMedia/ProductMedia';
import Button from '../Button/Button';
import styles from './Home.module.css';
export default function HowToOrder({ standalone = false }) {
  const Heading = standalone ? 'h1' : 'h2';
  return (
    <section id="how-to-order" className={`container ${styles.how}`}>
      <div className={styles.howHeading}>
        <p className="eyebrow">RESONIK / ЯК ЗАМОВИТИ</p>
        <Heading>
          Від вашого вибору —<br />
          до готового виробу.
        </Heading>
        <p>
          Оберіть бампер і залиште запит. Ми уточнимо дані авто, погодимо комплектацію та домовимося
          про наступні кроки.
        </p>
      </div>
      <div className={styles.configuration}>
        <p className="eyebrow">КОМПЛЕКТАЦІЯ ПІД ВАШЕ АВТО</p>
        <h3>
          Форма має значення.
          <br />
          Кожна деталь — теж.
        </h3>
        <ProductMedia product={data.products[0]} />
        <p className="eyebrow">МЕТАЛ 3 ММ</p>
        <p>Сталь або нержавійка</p>
        <div className={styles.swatches}>
          {data.colors.map((color) => (
            <span key={color.id}>
              <i style={{ background: color.hex }} />
              {color.name}
            </span>
          ))}
        </div>
        <small>Концепт виробу. Остаточне виконання погоджується під модель авто.</small>
      </div>
      <div className={styles.howSteps}>
        <dl>
          {orderSteps.map(([title, text]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
        <Button>Надіслати запит</Button>
        <p className={styles.howNote}>
          Можна звернутися без креслення. Моделі авто та фото достатньо для першого обговорення.
        </p>
      </div>
    </section>
  );
}
