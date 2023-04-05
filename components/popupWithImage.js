import Popup from "../components/popup.js";
import { titleImagePopup, photoImagePopup } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._photoImagePopup = photoImagePopup;
        this._titleImagePopup = titleImagePopup;
    } 

    open(card) {
        this._photoImagePopup.src = card._link
        this._photoImagePopup.setAttribute('alt', card._title);
        this._titleImagePopup.textContent = card._title;
        
        super.open();
    };
}