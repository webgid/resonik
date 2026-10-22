import data from '@/data/products.json';
export default function sitemap() {
  return [
    '/',
    '/catalog',
    '/production',
    '/how-to-order',
    ...data.products.map((product) => `/catalog/${product.slug}`),
  ].map((path) => ({ url: `https://resonik.com${path}` }));
}
