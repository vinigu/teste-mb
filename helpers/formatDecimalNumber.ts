import { LOCALE } from './config';

const formatDecimalNumber = (value: number) => {
  if (value === null || value === undefined) {
    return null;
  }
  return value.toLocaleString(LOCALE, {
    style: 'decimal',
    minimumFractionDigits: 2,
  });
};

export default formatDecimalNumber;
