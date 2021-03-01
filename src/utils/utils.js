export const MAIN_URL = 'https://api.masich-films.students.nomoredomains.rocks';
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export function checkResponse(res) {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(res);
}
