export default class UserInfo {
  constructor(userNameSelector, userInfoSelector) {
    (this._userName = document.querySelector(userNameSelector)),
      (this._userInfo = document.querySelector(userInfoSelector));
  }
  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      info: this._userInfo.textContent,
    };
    return userInfo;
  }

  setUserInfo(data) {
    this._userName.innerText = data.name;
    this._userInfo.innerText = data.about;
  }
}
