import Production from '@/components/Home/Production';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import PageNextSteps from '@/components/PageNextSteps/PageNextSteps';
export const metadata = {
  title: 'Виробництво — ручна робота й технологічна точність',
  description:
    'Як працює RESONIK: ручне виготовлення металевих виробів, токарна обробка, ЧПК і зварювання. Потрійна перевірка співвісності.',
  alternates: { canonical: '/production' },
};
export default function ProductionPage() {
  return (
    <>
      <Breadcrumbs current="Виробництво" dark />
      <Production standalone />
      <PageNextSteps
        eyebrow="ВІД МАЙСТЕРНОСТІ — ДО ВАШОГО ВИРОБУ"
        title="Ваш задум має продовження."
        text="Оберіть передній або задній бампер. Модель авто, матеріал, кріплення та деталі виконання погодимо до початку роботи."
        primary={{ href: '/catalog', label: 'Обрати бампер' }}
        secondary={{ href: '/how-to-order', label: 'Як замовити' }}
      />
    </>
  );
}
