import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._photoImagePopup =
      this._popupElement.querySelector(".image-card__photo");
    this._titleImagePopup =
      this._popupElement.querySelector(".image-card__title");
  }

  
  open(name, link) {
    this._photoImagePopup.src = link; 
    this._photoImagePopup.setAttribute('alt', name); 
    this._titleImagePopup.textContent = name; 
  super.open();
  }
}
