/* eslint-disable no-alert */
// eslint-disable-next-line no-unused-vars
const ADMIN_PASSWORD = 'm4ng0h4ckz';
// eslint-disable-next-line no-unused-vars
let messege;

// eslint-disable-next-line no-unused-vars
const PASS_QUESTION = prompt('Enter the password');
if (PASS_QUESTION === ADMIN_PASSWORD) {
  messege = 'Добро пожаловать!';
  alert(messege);
} else if (PASS_QUESTION === null) {
  messege = 'Отменено пользователем!';
  alert(messege);
} else {
  messege = 'Доступ запрещен, неверный пароль!';
  alert(messege);
}
