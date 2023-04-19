export default class UserInfo {
    constructor(nameInfo, jobInfo) {
        this._nameInfo = nameInfo;
        this._jobInfo = jobInfo;
        this._avatar = document.querySelector('.profile__avatar')

    }

    getUserInfo() {
    //который возвращает объект с данными пользователя
    return {
        name: this._nameInfo.textContent,
        profession: this._jobInfo.textContent
    };
    }

    setUserInfo(data) {
        //который принимает новые данные пользователя и добавляет их на страницу
        this._nameInfo.textContent = data.name;
        this._jobInfo.textContent = data.profession;
        this._avatar.src = data.avatar
        }
}