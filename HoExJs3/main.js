// eslint-disable-next-line no-alert
const mailDelivery = prompt('Укажите страну: ', '');
// eslint-disable-next-line prefer-const
const country = mailDelivery.toLocaleLowerCase();
const countryIndexUpper = country[0].toUpperCase() + country.slice(1);
let result = 0;
const messegeFinish = 'В вашей стране доставка не доступна';
const ch = 100;
const sa = 250;
const as = 170;
const ia = 80;
const ji = 120;
switch (country) {
  case 'china':
    result = `Доставка в ${countryIndexUpper} будет стоить ${ch} кредитов`;
    alert(result);
    break;
  case 'south america':
    result = `Доставка в ${countryIndexUpper} будет стоить ${sa} кредитов`;
    alert(result);
    break;
  case 'australia':
    result = `Доставка в ${countryIndexUpper} будет стоить ${as} кредитов`;
    alert(result);
    break;
  case 'india':
    result = `Доставка в ${countryIndexUpper} будет стоить ${ia} кредитов`;
    alert(result);
    break;
  case 'jamaica':
    result = `Доставка в ${countryIndexUpper} будет стоить ${ji} кредитов`;
    alert(result);
    break;
  default:
    result = null;
    alert(messegeFinish);
}
