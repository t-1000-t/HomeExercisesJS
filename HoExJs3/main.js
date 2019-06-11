const mailDelivery = prompt('Укажите страну: ');
const country = mailDelivery.toLocaleLowerCase();
let result = 0;
const messegeFinish = 'В вашей стране доставка не доступна';
const ch = 100;
const sa = 250;
const as = 170;
const ia = 80;
const ji = 120;
switch (country) {
  case 'china':
    result = `Доставка в ${mailDelivery} будет стоить ${ch} кредитов`;
    alert(result);
    break;
  case 'southamerica':
    result = `Доставка в ${mailDelivery} будет стоить ${sa} кредитов`;
    alert(result);
    break;
  case 'australia':
    result = `Доставка в ${mailDelivery} будет стоить ${as} кредитов`;
    alert(result);
    break;
  case 'india':
    result = `Доставка в ${mailDelivery} будет стоить ${ia} кредитов`;
    alert(result);
    break;
  case 'jamaica':
    result = `Доставка в ${mailDelivery} будет стоить ${ji} кредитов`;
    alert(result);
    break;
  default:
    result = null;
    alert(messegeFinish);
}
