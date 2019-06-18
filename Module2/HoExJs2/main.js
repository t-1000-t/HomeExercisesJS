// eslint-disable-next-line no-unused-vars
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// eslint-disable-next-line prefer-const
let attemptsLeft = 3;
// eslint-disable-next-line prefer-const
let n = 3;

do {
  // eslint-disable-next-line no-shadow
  const input = prompt('Write your pass', '');
  if (input === null) {
    alert('Your click EXIT! Byu.');
    break;
  }
  if (passwords.includes(input)) {
    alert('Добро пожаловать!');
    break;
  }
  // for (let i = 0; i < passwords.length; i += 0) {
  if (passwords.indexOf(input) === -1) {
    n -= 1;
    alert(`Неверный пароль, у вас осталось ${n} попыток`);
    if (n === 0) {
      alert('У вас закончились попытки, аккаунт заблокирован!');
      break;
    }
  }
} while (true);
