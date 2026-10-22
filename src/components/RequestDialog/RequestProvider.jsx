'use client';
import { createContext, useContext, useRef, useState, useEffect, useId } from 'react';
import data from '@/data/products.json';
import { normalizePhone, validateRequest } from '@/lib/request';
import styles from './RequestDialog.module.css';
const RequestContext = createContext(null);
export function useRequest() {
  return useContext(RequestContext);
}
const initialValues = { name: '', phone: '380', comment: '', consent: false };
export default function RequestProvider({ children }) {
  const dialog = useRef(null);
  const previousFocus = useRef(null);
  const [configuration, setConfiguration] = useState(null);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(false);
  const titleId = useId();
  function openRequest(nextConfiguration = null) {
    previousFocus.current = document.activeElement;
    setConfiguration(nextConfiguration);
    setPreview(false);
    setErrors({});
    dialog.current.showModal();
    document.body.style.overflow = 'hidden';
  }
  function close() {
    dialog.current.close();
  }
  useEffect(() => {
    const element = dialog.current;
    function onClose() {
      document.body.style.overflow = document.querySelector('dialog[open]') ? 'hidden' : '';
      previousFocus.current?.focus();
    }
    element.addEventListener('close', onClose);
    return () => {
      element.removeEventListener('close', onClose);
      document.body.style.overflow = '';
    };
  }, []);
  function update(event) {
    const { name, value, checked, type } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : name === 'phone' ? normalizePhone(value) : value,
    }));
  }
  function submit(event) {
    event.preventDefault();
    const nextErrors = validateRequest(values);
    setErrors(nextErrors);
    if (!Object.keys(nextErrors).length) setPreview(true);
  }
  const product = data.products.find((item) => item.id === configuration?.productId);
  const details = configuration
    ? [
        data.vehicleOptions.find((item) => item.id === configuration.vehicle)?.name,
        configuration.generation,
        data.materials.find((item) => item.id === configuration.material)?.name,
        data.colors.find((item) => item.id === configuration.color)?.name,
      ]
        .filter(Boolean)
        .join(' · ')
    : '';
  return (
    <RequestContext.Provider value={{ openRequest }}>
      {children}
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className={styles.content}>
          <button type="button" className={styles.close} aria-label="Закрити форму" onClick={close}>
            ×
          </button>
          <p className="eyebrow">RESONIK / ОБГОВОРИМО ВАШ ЗАДУМ</p>
          <h2 id={titleId}>
            Із задуму —<br />
            до деталей.
          </h2>
          {product && (
            <div className={styles.summary}>
              <strong>{product.name}</strong>
              <p>{details}</p>
            </div>
          )}
          <p className={styles.local}>
            Локальний перегляд: дані не надсилаються і не зберігаються на сервері.
          </p>
          {preview ? (
            <div role="status" className={styles.preview}>
              <h3>Запит підготовлено для перегляду</h3>
              <p>Це попередній перегляд. Заявку не відправлено.</p>
              <dl>
                <dt>Ім’я</dt>
                <dd>{values.name}</dd>
                <dt>Телефон</dt>
                <dd>+{values.phone}</dd>
                {values.comment && (
                  <>
                    <dt>Ваш задум</dt>
                    <dd>{values.comment}</dd>
                  </>
                )}
              </dl>
              <button type="button" onClick={() => setPreview(false)}>
                Повернутися до форми
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <label>
                Ваше ім’я
                <input
                  name="name"
                  value={values.name}
                  onChange={update}
                  maxLength={80}
                  autoComplete="name"
                  required
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${titleId}-name` : undefined}
                />
              </label>
              {errors.name && (
                <p className={styles.error} id={`${titleId}-name`}>
                  {errors.name}
                </p>
              )}
              <label>
                Телефон
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={`+${values.phone}`}
                  onChange={update}
                  maxLength={16}
                  required
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={`${titleId}-phone`}
                />
              </label>
              <p id={`${titleId}-phone`} className={errors.phone ? styles.error : styles.hint}>
                {errors.phone || 'До 12 цифр. Наприклад, +380501234567.'}
              </p>
              <label>
                Розкажіть про вашу задачу
                <textarea
                  name="comment"
                  value={values.comment}
                  onChange={update}
                  maxLength={1500}
                  rows={3}
                  placeholder="Автомобіль, рік, потрібна комплектація…"
                />
              </label>
              <label className={styles.consent}>
                <input name="consent" type="checkbox" checked={values.consent} onChange={update} />
                <span>Погоджуюся на обробку наданих даних для відповіді на мій запит.</span>
              </label>
              {errors.consent && <p className={styles.error}>{errors.consent}</p>}
              <button type="submit" className={styles.submit}>
                Переглянути запит <span aria-hidden="true">→</span>
              </button>
            </form>
          )}
        </div>
      </dialog>
    </RequestContext.Provider>
  );
}
