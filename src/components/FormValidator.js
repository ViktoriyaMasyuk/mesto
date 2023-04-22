export default class FormValidator {
  constructor(settings, formSelector) {
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inputActiveClass = settings.inputActiveClass;
    this._errorClass = settings.errorClass;
    this._formToValidate = document.querySelector(formSelector);
    this._inputFields = Array.from(
      this._formToValidate.querySelectorAll(settings.inputSelector)
    );
    this._buttonSubmit = this._formToValidate.querySelector(
      settings.submitButtonSelector
    );
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formToValidate.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._inputActiveClass);
    const errorForm = this._formToValidate.querySelector(
      `.form__info_${inputElement.id}`
    );
    errorForm.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formToValidate.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._inputActiveClass);
    errorElement.textContent = "";
    const errorForm = this._formToValidate.querySelector(
      `.form__info_${inputElement.id}`
    );
    errorForm.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._toggleButtonState(this._buttonSubmit);
    this._inputFields.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._buttonSubmit);
      });
    });
    this._formToValidate.addEventListener("reset", () => {
      setTimeout(() => this._toggleButtonState(this._buttonSubmit), 0);
    });
  }
  resetValidation() {
    this._toggleButtonState(this._buttonSubmit);
    this._inputFields.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  _hasInvalidInput() {
    return this._inputFields.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState = (buttonElement) => {
    if (this._hasInvalidInput()) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
    }
  };
}
