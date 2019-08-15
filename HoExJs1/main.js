/* eslint-disable no-alert */
// eslint-disable-next-line no-unused-vars
const ADMIN_PASSWORD = 'm4ng0h4ckz';
// eslint-disable-next-line no-unused-vars
let message;

// eslint-disable-next-line no-unused-vars
const PASS_QUESTION = prompt('Enter the password');
if (PASS_QUESTION === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (PASS_QUESTION === null) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
