/* eslint-disable no-unused-vars */
let input;
const numbers = [];
let total = 0;

do {
  // eslint-disable-next-line no-shadow
  let input = prompt('write numbers:', '');

  if (input === null) break;

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    // eslint-disable-next-line no-continue
    continue;
  }
  input = Number(input);
  numbers.push(input);
} while (true);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
alert(total);
