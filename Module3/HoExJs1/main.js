const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// eslint-disable-next-line no-unused-vars
const isLoginValid = (login, allLogins) => (login.length > 3 && login.length < 17);

const isLoginUnique = (allLogins, login) => allLogins.includes(login);


const addLogin = function (allLogins, login) {
  let result;
  if (!isLoginValid(login)) {
    result = 'Ошибка! Логин должен быть от 4 до 16 символов';
  } else if (isLoginUnique(allLogins, login)) {
    result = 'Такой логин уже используется!';
  } else {
    logins.push(login);
    result = 'Логин успешно добавлен!';
  }
  return result;
};

// Вызовы функции для проверки
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);
