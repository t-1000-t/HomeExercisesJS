/* eslint-disable no-alert */
// eslint-disable-next-line no-unused-vars
const credits = 23580;
// eslint-disable-next-line no-unused-vars
const pricePerDroid = 3000;
// eslint-disable-next-line prefer-const
let howMany = prompt('Please write, how many droids do you want?');
// eslint-disable-next-line no-unused-vars
const totalPrice = howMany * pricePerDroid;
const balance = credits - totalPrice;
const result = `Вы купили ${howMany} дроидов, на счету осталось ${balance} кредитов.`;
const message = 'Отменено пользователем!';
if (howMany === null) {
  alert(message);
} else if (totalPrice > credits) {
  alert('Недостаточно средств на счету!');
} else if (totalPrice < credits) {
  alert(result);
}
