export default class Api {
  constructor(options) {
    // receive url server and headers
    this._headers = options.headers;
    this._baseUrl = options.baseUrl;
  }

  // check answer from server
  _getHandleData(res) {
    if (res.ok) {
      return res.json(); // if yes => return data
    }
    return Promise.reject(`Error: ${res.status}`); // or return error
  }

  // request to server and get data profile
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getHandleData);
  }

  editProfile(data) {
    // change profile info on server
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name, //name = value name object (editProfile(data))
        about: data.about, //about = value about object (editProfile(data))
      }),
    }).then(this._getHandleData);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getHandleData);
  }


  setUserAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._getHandleData);
  }


  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._getHandleData);
  }


  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._getHandleData);
  }


  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._getHandleData);
  }


  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._getHandleData);
  }
}
