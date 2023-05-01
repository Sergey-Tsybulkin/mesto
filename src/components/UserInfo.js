export default class UserInfo {
  constructor(userNameSelector, userInfoSelector, userAvatarSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userInfo = document.querySelector(userInfoSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }
  getProfile() {
    const userInfo = {
      name: this._userName.textContent,
      about: this._userInfo.textContent,
    };
    return userInfo;
  }

  editProfile(userInfo) {
    this._userName.textContent = userInfo.name;
    this._userInfo.textContent = userInfo.about;
    this._userAvatar.src = userInfo.avatar;
  }
}
