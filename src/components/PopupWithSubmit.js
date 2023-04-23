import Popup from "./Popup";
import { buttonDeleteCard } from "../utils/constants";

export default class PopupWithSubmit extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._form = popupElement.querySelector(".form__save");
    this._buttonDeleteCard = buttonDeleteCard;
  }

  setCallback(handleSubmit) {
    this._handleSubmit = handleSubmit;
  }

  setEventListeners() {
    //добавлять обработчик сабмита формы.
    super.setEventListeners();

    this._buttonDeleteCard.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }
  setSubmitButtonText(buttonText) {
    this._buttonSubmit = this._popupElement.querySelector(".form__submit");
    this._buttonSubmit.textContent = buttonText;
  }
}
