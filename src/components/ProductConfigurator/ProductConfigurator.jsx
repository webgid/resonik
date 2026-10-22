'use client';
import { useState } from 'react';
import data from '@/data/products.json';
import ProductSpecs from '../ProductSpecs/ProductSpecs';
import Button from '../Button/Button';
import styles from './ProductConfigurator.module.css';
export default function ProductConfigurator({ product }) {
  const [vehicle, setVehicle] = useState(data.vehicleOptions[0].id);
  const [generation, setGeneration] = useState('');
  const [material, setMaterial] = useState(data.materials[0].id);
  const [color, setColor] = useState(data.colors[0].id);
  return (
    <aside className={styles.panel} aria-label="Комплектація бампера">
      <p className="eyebrow">ПІД ВАШ АВТОМОБІЛЬ</p>
      <h2>
        Оберіть свою
        <br />
        комплектацію.
      </h2>
      <label className={styles.field}>
        Модель авто
        <select value={vehicle} onChange={(event) => setVehicle(event.target.value)}>
          {data.vehicleOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
      <label className={styles.field}>
        Рік або покоління
        <input
          value={generation}
          onChange={(event) => setGeneration(event.target.value)}
          maxLength={80}
          placeholder="Наприклад, 2018 / J150"
        />
      </label>
      <fieldset>
        <legend>Матеріал · метал 3 мм</legend>
        <div className={styles.materials}>
          {data.materials.map((option, index) => (
            <label key={option.id}>
              <input
                type="radio"
                name={`material-${product.id}`}
                value={option.id}
                checked={material === option.id}
                onChange={() => setMaterial(option.id)}
              />
              <span>
                <img
                  src={index ? '/design/7b1de.svg' : '/design/985c6.svg'}
                  width="32"
                  height="32"
                  alt=""
                />
                {option.name}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Колір</legend>
        <div className={styles.colors}>
          {data.colors.map((option) => (
            <label key={option.id}>
              <input
                type="radio"
                name={`color-${product.id}`}
                value={option.id}
                checked={color === option.id}
                onChange={() => setColor(option.id)}
              />
              <span>
                <i style={{ background: option.hex }} />
                {option.name}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <p className={styles.note}>
        Відтінок і сумісність з авто погоджуємо окремо. На фото — концепт виконання.
      </p>
      <p className={styles.price}>${product.price}</p>
      <ProductSpecs product={product} />
      <Button light configuration={{ productId: product.id, vehicle, generation, material, color }}>
        Надіслати запит
      </Button>
      <p className={styles.note}>
        Попередня ціна та габарити. Фінальну конструкцію, комплектацію й строки погоджуємо до
        виготовлення.
      </p>
    </aside>
  );
}
