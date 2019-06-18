/* eslint-disable no-alert */
// eslint-disable-next-line no-unused-vars
let input;
const numbers = [];
// eslint-disable-next-line prefer-const
let total = 0;

do {
  // eslint-disable-next-line no-shadow
  let input = prompt('write numbers:', '');
  if (input === null) break;
  input = Number(input);
  numbers.push(input);
// eslint-disable-next-line no-constant-condition
} while (true);
for (let i = 0; i < numbers.length; i += 1) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(numbers[i])) {
    // eslint-disable-next-line no-alert
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += numbers[i];
  }
}
// eslint-disable-next-line no-alert
alert(total);
