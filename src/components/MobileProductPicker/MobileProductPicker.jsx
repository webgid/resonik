'use client';
import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import data from '@/data/products.json';
import ProductMedia from '../ProductMedia/ProductMedia';
import styles from './MobileProductPicker.module.css';

export default function MobileProductPicker() {
  const pathname = usePathname();
  const dialog = useRef(null);
  const trigger = useRef(null);
  const titleId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const selected = data.products.find((product) => pathname === `/catalog/${product.slug}`);

  function close() {
    dialog.current?.close();
  }

  useEffect(() => {
    close();
  }, [pathname]);

  useEffect(() => {
    const element = dialog.current;
    const desktop = window.matchMedia('(min-width: 768px)');
    function onClose() {
      setIsOpen(false);
      document.body.style.overflow = document.querySelector('dialog[open]') ? 'hidden' : '';
      if (!desktop.matches && !document.querySelector('dialog[open]')) trigger.current?.focus();
    }
    function onResize() {
      if (desktop.matches) close();
    }
    element.addEventListener('close', onClose);
    desktop.addEventListener('change', onResize);
    return () => {
      element.removeEventListener('close', onClose);
      desktop.removeEventListener('change', onResize);
    };
  }, []);

  function open() {
    dialog.current.showModal();
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <>
      <aside className={styles.bar} aria-label="Швидкий вибір бампера">
        <button
          ref={trigger}
          type="button"
          onClick={open}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <span className={styles.label}>
            <span className={styles.overline}>RESONIK / БАМПЕРИ</span>
            <strong>{selected ? selected.name : 'Оберіть свій бампер'}</strong>
          </span>
          <span className={styles.action}>
            {selected ? 'Змінити' : 'Обрати'}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="m6 14 6-6 6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </aside>
      <dialog
        ref={dialog}
        className={styles.sheet}
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className={styles.content}>
          <div className={styles.handle} aria-hidden="true" />
          <div className={styles.heading}>
            <div>
              <p className="eyebrow">ДВА ВИРОБИ / ВАШ ВИБІР</p>
              <h2 id={titleId}>З чого почнемо?</h2>
            </div>
            <button
              type="button"
              onClick={close}
              className={styles.close}
              aria-label="Закрити вибір бампера"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <nav aria-label="Вибір переднього або заднього бампера" className={styles.products}>
            {data.products.map((product) => {
              const active = selected?.id === product.id;
              return (
                <Link
                  key={product.id}
                  href={`/catalog/${product.slug}`}
                  onClick={close}
                  aria-current={active ? 'page' : undefined}
                >
                  <ProductMedia product={product} sizes="140px" />
                  <span className={styles.productCopy}>
                    <strong>{product.name}</strong>
                    <span>Сталь або нержавійка · 3 мм</span>
                    <span className={styles.price}>
                      ${product.price}
                      <small>{active ? 'Ви переглядаєте' : 'Обрати комплектацію'}</small>
                    </span>
                  </span>
                  <svg
                    className={styles.arrow}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d={active ? 'm5 12 4 4L19 6' : 'M4 12h15m-6-6 6 6-6 6'}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              );
            })}
          </nav>
          <p className={styles.note}>
            Модель авто, матеріал і колір оберете на сторінці виробу. Ціну та деталі погоджуємо
            перед виготовленням.
          </p>
        </div>
      </dialog>
    </>
  );
}
