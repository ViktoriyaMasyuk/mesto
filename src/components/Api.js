export default class Api {
  constructor(options) {
    this.url = options.baseUrl;
    this.headers = options.headers;
  }
  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this.url}users/me/`, {
      headers: this.headers,
    }).then(this._getResponse);
  }
  
  getInitialCards() {
    return fetch(`${this.url}cards/`, {
      headers: this.headers,
    }).then(this._getResponse);
  }
  updateUserInfo(body) {
    return fetch(`${this.url}users/me/`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(body),
    }).then(this._getResponse);
  }

  addNewCard(body) {
    return fetch(`${this.url}cards/`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body),
    }).then(this._getResponse);
  }
  deleteCard(cardId) {
    return fetch(`${this.url}cards/${cardId}/`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._getResponse);
  }
  setLike(cardId) {
    return fetch(`${this.url}cards/${cardId}/likes`, {
      method: "PUT",
      headers: this.headers,
    });
  }
  unsetLike(cardId) {
    return fetch(`${this.url}cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this.headers,
    });
  }
  changeAvatar(urlImage) {
    return fetch(`${this.url}users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ avatar: urlImage }),
    });
  }
}
