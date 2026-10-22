'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Brand from '../Brand/Brand';
import Button from '../Button/Button';
import { useRequest } from '../RequestDialog/RequestProvider';
import ProductMedia from '../ProductMedia/ProductMedia';
import { navigation } from '@/data/site';
import data from '@/data/products.json';
import styles from './Header.module.css';
export default function Header() {
  const menu = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { openRequest } = useRequest();
  const trigger = useRef(null);
  const pathname = usePathname();
  function close() {
    menu.current?.close();
  }
  useEffect(() => {
    close();
  }, [pathname]);
  useEffect(() => {
    const dialog = menu.current;
    function unlock() {
      setIsOpen(false);
      document.body.style.overflow = document.querySelector('dialog[open]') ? 'hidden' : '';
      if (!document.querySelector('dialog[open]')) trigger.current?.focus();
    }
    dialog.addEventListener('close', unlock);
    return () => {
      dialog.removeEventListener('close', unlock);
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Brand />
          <nav aria-label="Основна навігація" className={styles.desktop}>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.desktop}>
            <Button>Обговорити ідею</Button>
          </div>
          <button
            ref={trigger}
            className={styles.burger}
            aria-label="Відкрити меню"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            onClick={() => {
              setIsOpen(true);
              menu.current.showModal();
              document.body.style.overflow = 'hidden';
            }}
          >
            <img src="/design/e717c.svg" width="44" height="44" alt="" />
          </button>
        </div>
      </header>
      <dialog ref={menu} className={styles.menu} aria-label="Меню">
        <div className={styles.menuHeader}>
          <Brand />
          <button className={styles.burger} onClick={close} aria-label="Закрити меню">
            <img src="/design/1484a.svg" width="44" height="44" alt="" />
          </button>
        </div>
        <div className={styles.menuBody}>
          <nav aria-label="Мобільна навігація">
            <Link
              href="/catalog"
              aria-current={pathname === '/catalog' ? 'page' : undefined}
              onClick={close}
              className={styles.catalog}
            >
              Каталог
            </Link>
            <div className={styles.tiles}>
              {data.products.map((product) => (
                <Link href={`/catalog/${product.slug}`} key={product.id} onClick={close}>
                  <ProductMedia product={product} />
                  <span>{product.name}</span>
                </Link>
              ))}
            </div>
            {navigation.slice(1).map((item) => (
              <Link
                className={styles.menuLink}
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.menuBottom}>
            <Button
              onClick={() => {
                close();
                openRequest();
              }}
            >
              Обговорити ідею
            </Button>
            <p>Ваш задум. Наша робота з металом.</p>
            <span className="eyebrow">RESONIK / ІЗ ЗАДУМУ — В МЕТАЛ</span>
          </div>
        </div>
      </dialog>
    </>
  );
}
