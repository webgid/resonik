import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizePhone, validateRequest } from '../src/lib/request.js';
import { readFileSync } from 'node:fs';
const data = JSON.parse(readFileSync(new URL('../src/data/products.json', import.meta.url)));
test('phone accepts punctuation but never more than 12 digits', () => {
  assert.equal(normalizePhone('+380 (50) 123-45-67 999'), '380501234567');
  assert.equal(normalizePhone('abc'), '');
});
test('request requires a valid Ukrainian phone, name and consent', () => {
  assert.deepEqual(validateRequest({ name: 'Богдан', phone: '380501234567', consent: true }), {});
  assert.equal(Object.keys(validateRequest({ name: '', phone: '123', consent: false })).length, 3);
});
test('only two launch products have unique URLs and existing layered images', () => {
  assert.equal(data.products.length, 2);
  assert.equal(new Set(data.products.map((product) => product.slug)).size, 2);
  for (const product of data.products) {
    assert.ok(readFileSync(new URL(`../public${product.image}`, import.meta.url)).length);
    assert.equal(product.specifications.weightKg, null);
    assert.ok(
      product.materialIds.every((id) => data.materials.some((material) => material.id === id)),
    );
  }
});
