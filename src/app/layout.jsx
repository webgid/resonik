import localFont from 'next/font/local';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MobileProductPicker from '@/components/MobileProductPicker/MobileProductPicker';
import RequestProvider from '@/components/RequestDialog/RequestProvider';
import './globals.css';

const manrope = localFont({
  src: '../../public/fonts/Manrope.ttf',
  variable: '--font-manrope',
  display: 'swap',
});
const mono = localFont({
  src: '../../public/fonts/IBMPlexMono-Regular.ttf',
  variable: '--font-mono',
  weight: '400',
  display: 'swap',
});
export const metadata = {
  metadataBase: new URL('https://resonik.com'),
  title: { default: 'RESONIK — із задуму в метал', template: '%s | RESONIK' },
  description:
    'Передні та задні металеві бампери на замовлення. Сталь або нержавійка 3 мм. Конструкція під ваш автомобіль.',
};
export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={`${manrope.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Перейти до вмісту
        </a>
        <RequestProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <MobileProductPicker />
        </RequestProvider>
      </body>
    </html>
  );
}
