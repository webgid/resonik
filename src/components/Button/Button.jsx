'use client';
import Link from 'next/link';
import { useRequest } from '../RequestDialog/RequestProvider';
import styles from './Button.module.css';
export default function Button({
  children,
  href,
  light = false,
  outline = false,
  text = false,
  configuration,
  ...props
}) {
  const { openRequest } = useRequest();
  const className = `${styles.button} ${light ? styles.light : ''} ${outline ? styles.outline : ''} ${text ? styles.text : ''}`;
  const content = (
    <>
      <span>{children}</span>
      {!text && (
        <img
          src={light ? '/design/13cb4.svg' : '/design/75fc1.svg'}
          width="56"
          height="56"
          alt=""
        />
      )}
    </>
  );
  return href ? (
    <Link href={href} className={className} {...props}>
      {content}
    </Link>
  ) : (
    <button
      type="button"
      className={className}
      onClick={() => openRequest(configuration)}
      {...props}
    >
      {content}
    </button>
  );
}
