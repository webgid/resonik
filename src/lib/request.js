export function normalizePhone(value) {
  const digits = String(value).replace(/\D/g, '').slice(0, 12);
  return digits;
}
export function validateRequest(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Вкажіть ім’я (щонайменше 2 символи).';
  if (!/^380\d{9}$/.test(values.phone)) errors.phone = 'Вкажіть номер у форматі +380 та ще 9 цифр.';
  if (!values.consent) errors.consent = 'Підтвердьте згоду на обробку даних для відповіді.';
  return errors;
}
