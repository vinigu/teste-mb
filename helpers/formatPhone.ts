const formatBrazilianPhoneNumber = (phoneNumber: string) => {
  const number = phoneNumber.replace(/\D/g, '');
  switch (number.length) {
    case 8:
      return number.replace(/(\d{4})(\d{4})/, '$1-$2');
    case 9:
      return number.replace(/(\d{5})(\d{4})/, '$1-$2');
    case 10:
      return number.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    case 11:
      return number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    case 12:
      return number.replace(/(\d{2})(\d{2})(\d{4})(\d{4})/, '+$1 ($2) $3-$4');
    case 13:
      return number.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
    default:
      return number;
  }
};

export default formatBrazilianPhoneNumber;
