import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="container" style={{ paddingTop: 80, paddingBottom: 100 }}>
      <p className="eyebrow">RESONIK / 404</p>
      <h1>Сторінку не знайдено</h1>
      <Link href="/catalog">Перейти до каталогу бамперів →</Link>
    </section>
  );
}
