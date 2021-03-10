export const MAIN_URL = 'https://api.masich-films.students.nomoredomains.rocks';
export const MOVIES_URL = 'https://api.nomoreparties.co';

export function checkResponse(res) {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(res);
}

export function errors(err) {
  if (err.status === 400) {
    setInfoMessage(`Ошибка: ${err.status}. Не передано одно из полей.`);
  } else if (err.status === 401) {
    setInfoMessage(`Ошибка: ${err.status}. Вы ввели неправильный логин или пароль.`);
  } else if (err.status === 403) {
    setInfoMessage(`Ошибка: ${err.status}. Токен не передан или передан не в том формате.`);
  } else if (err.status === 404) {
    setInfoMessage(`Ошибка: ${err.status}. Данные не найдены.`);
  } else if (err.status === 409) {
    setInfoMessage(`Ошибка: ${err.status}. Пользователь с таким email уже существует.`);
  } else if (err.status === 429) {
    setInfoMessage(`Ошибка: ${err.status}. Слишком много запросов. Попробуйте позже.`);
  } else if (err.status === 500) {
    setInfoMessage(`Ошибка: ${err.status}. На сервере произошла ошибка.`);
  } else {
    setInfoMessage(`Ошибка: ${err.status}. Ошибка сервера.`);
  }
}
