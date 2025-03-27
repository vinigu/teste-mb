import { CURRENCY, LOCALE } from './config';

const getCurrencySymbol = () =>
  (0)
    .toLocaleString(LOCALE, {
      style: 'currency',
      currency: CURRENCY,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, '')
    .trim();

const getThousandsSeparator = () =>
  (1000)
    .toLocaleString(LOCALE, {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, '')
    .trim();

const getDecimalSeparator = () =>
  (0)
    .toLocaleString(LOCALE, {
      style: 'decimal',
      minimumFractionDigits: 1,
    })
    .replace(/\d/g, '')
    .trim();

const currencyToNumber = (value: number) => {
  const number = String(value)
    .replace(getCurrencySymbol(), '')
    .replace(getThousandsSeparator(), '')
    .replace(getDecimalSeparator(), '.');

  if (number === '' || number === null) {
    return null;
  }

  return parseFloat(number);
};

export default currencyToNumber;
