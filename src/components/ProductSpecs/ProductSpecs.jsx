import styles from './ProductSpecs.module.css';
export default function ProductSpecs({ product }) {
  const specs = product.specifications;
  return (
    <dl className={styles.specs}>
      <div>
        <dt>Довжина</dt>
        <dd>{specs.lengthMm} мм</dd>
      </div>
      <div>
        <dt>Ширина</dt>
        <dd>{specs.widthMm} мм</dd>
      </div>
      <div>
        <dt>Висота</dt>
        <dd>{specs.heightMm} мм</dd>
      </div>
      <div>
        <dt>Вага</dt>
        <dd>{specs.weightKg == null ? 'Уточнюється' : `${specs.weightKg} кг`}</dd>
      </div>
    </dl>
  );
}
