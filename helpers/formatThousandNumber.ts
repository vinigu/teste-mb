import { LOCALE } from './config';

const formatThousandNumber = (value: number) => {
  if (value === null || value === undefined) {
    return null;
  }
  return value.toLocaleString(LOCALE, {
    style: 'decimal',
    minimumFractionDigits: 0,
  });
};

export default formatThousandNumber;
