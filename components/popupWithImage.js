import Popup from "../components/popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._photoImagePopup = this._popupElement.querySelector('.image-card__photo');
        this._titleImagePopup = this._popupElement.querySelector('.image-card__title');
    } 

    open(card) {
        this._photoImagePopup.src = card._link
        this._photoImagePopup.setAttribute('alt', card._title);
        this._titleImagePopup.textContent = card._title;
        
        super.open();
    };
}