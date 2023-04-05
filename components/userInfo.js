export default class UserInfo {
    constructor(nameInfo, jobInfo) {
        this._nameInfo = nameInfo;
        this._jobInfo = jobInfo;

    }

    getUserInfo(nameInput, jobInput) {
    //который возвращает объект с данными пользователя
    nameInput.value = this._nameInfo.textContent
    jobInput.value = this._jobInfo.textContent
    return {
        name: this._nameInfo.textContent,
        profession: this._jobInfo.textContent
    };
    }

    setUserInfo(data) {
        //который принимает новые данные пользователя и добавляет их на страницу
        this._nameInfo.textContent = data.name;
        this._jobInfo.textContent = data.profession;
        }
    }