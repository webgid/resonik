import HowToOrder from '@/components/Home/HowToOrder';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import PageNextSteps from '@/components/PageNextSteps/PageNextSteps';
export const metadata = {
  title: 'Як замовити бампер RESONIK',
  description:
    'Вибір бампера, дані автомобіля, погодження конструкції та виготовлення. Дізнайтеся, що підготувати для замовлення RESONIK.',
  alternates: { canonical: '/how-to-order' },
};
export default function HowToOrderPage() {
  return (
    <>
      <Breadcrumbs current="Як замовити" />
      <HowToOrder standalone />
      <PageNextSteps
        eyebrow="ПЕРШИЙ КРОК"
        title="Почнімо з вашого автомобіля."
        text="Передній чи задній бампер, сталь або нержавійка, чорний, хакі чи койот. Збережіть свій вибір у запиті — деталі погодимо разом."
        primary={{ href: '/catalog', label: 'Перейти до каталогу' }}
        secondary={{ href: '/production', label: 'Наше виробництво' }}
      />
    </>
  );
}
