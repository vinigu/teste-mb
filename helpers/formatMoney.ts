const formatMoney = (price: number | string, withSign = false, withCommas = false): string => {
  if (!price) return '';

  let newValue;

  if (typeof price === 'string') {
    newValue = price.replace('R$', '');

    if (price.indexOf('.') !== -1 && price.indexOf(',') !== -1) {
      newValue = newValue.replace('.', '').replace(',', '.');
    } else {
      newValue = newValue.replace(',', '.');
    }
  } else {
    newValue = price.toString();
  }

  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: withCommas ? 2 : 0,
    style: withSign ? 'currency' : undefined,
    currency: 'BRL',
  }).format(parseFloat(newValue));
};

export default formatMoney;
