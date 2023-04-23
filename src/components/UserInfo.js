export default class UserInfo {
  constructor(nameInfo, jobInfo, avatarImage) {
    this._nameInfo = nameInfo;
    this._jobInfo = jobInfo;
    this._avatar = avatarImage;
  }

  getUserInfo() {
    /**возвращает объект с данными пользователя*/
    return {
      name: this._nameInfo.textContent,
      profession: this._jobInfo.textContent,
      avatar: this._avatar.src,
    };
  }

  setUserInfo(data) {
    /**принимает новые данные пользователя и добавляет их на страницу*/
    this._nameInfo.textContent = data.name;
    this._jobInfo.textContent = data.profession;
    this._avatar.src = data.avatar;
  }
  setAvatarLink(url) {
    this._avatar.src = url;
  }
  setUser(user) {
    this._user = user;
  }
  getUser() {
    return this._user;
  }
}
