export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._document = document;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    this._document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    this._document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  _handleOverlayClose(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      this.close();
    }
  }
  setEventListeners() {
    this._popupElement
      .querySelector(".popup__close")
      .addEventListener("click", () => this.close());
    this._popupElement.addEventListener("click", this._handleOverlayClose);
  }
  setSubmitButtonText(buttonText) {
    this._buttonText = this._popupElement.querySelector(".form__submit");
    this._buttonText.textContent = buttonText;
  }
}
