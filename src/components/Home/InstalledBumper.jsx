import Image from 'next/image';
import Button from '../Button/Button';
import styles from './Home.module.css';
export default function InstalledBumper() {
  return (
    <section className={styles.installed}>
      <div className={`container ${styles.installedGrid}`}>
        <div>
          <p className="eyebrow">ВИГОТОВЛЕННЯ ПІД ВАШ АВТОМОБІЛЬ</p>
          <h2>
            Ваше авто.
            <br />
            Ваш бампер.
          </h2>
          <p>
            Модель, покоління та кріплення — основа конструкції. Матеріал і деталі виконання
            узгоджуємо під ваші задачі.
          </p>
          <Button href="/catalog" outline>
            Підібрати бампер
          </Button>
        </div>
        <figure>
          <Image
            sizes="(max-width: 767px) 100vw, 66vw"
            src="/images/installed-bumper.png"
            alt="Концепт позашляховика з металевим бампером RESONIK"
            width="1536"
            height="1024"
          />
          <figcaption>ФОТО-КОНЦЕПТ / ПРИКЛАД ВИКОНАННЯ, НЕ РЕАЛЬНИЙ КЕЙС</figcaption>
        </figure>
      </div>
    </section>
  );
}
