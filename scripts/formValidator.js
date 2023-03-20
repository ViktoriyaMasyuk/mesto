export const settings = {
    submitButtonSelector: '.form__save',
    inactiveButtonClass: 'form__save_inactive',
    inputSelector: '.form__info',
    inputErrorClass: 'form__input_type_error',
    inputActiveClass: 'form__input-error_active',
    errorClass: 'form__info_error'
};

export class FormValidator {
    constructor(settings, form_selector) {
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inputActiveClass = settings.inputActiveClass;
        this._errorClass = settings.errorClass;
        this._formToValidate = document.querySelector(form_selector);
        this._inputFields = Array.from(this._formToValidate.querySelectorAll(settings.inputSelector));
        this._buttonSubmit = this._formToValidate.querySelector(settings.submitButtonSelector)
    };
    
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formToValidate.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._inputActiveClass);
        const errorForm = this._formToValidate.querySelector(`.form__info_${inputElement.id}`);
        errorForm.classList.add(this._errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this._formToValidate.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._inputActiveClass);
        errorElement.textContent = '';
        const errorForm = this._formToValidate.querySelector(`.form__info_${inputElement.id}`);
        errorForm.classList.remove(this._errorClass);
      };
      
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement, inputElement.validationMessage);
        } else {
          this._hideInputError(inputElement);
        }
      };
      
    _setEventListeners() {
        this._toggleButtonState(this._inputFields, this._buttonSubmit);
        this._inputFields.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState(this._inputFields, this._buttonSubmit);
          });
        });
        this._formToValidate.addEventListener('reset', () => {
            setTimeout(() => 
            this._toggleButtonState(this._inputFields, this._buttonSubmit), 0 )});  
    };
    resetValidation() {
        this._toggleButtonState(this._inputFields, this._buttonSubmit);
        this._inputFields.forEach((inputElement) => {
          this._hideInputError(inputElement)
        });
    };

    enableValidation() {
        this._formToValidate.addEventListener('submit', (evt) => {
            evt.preventDefault();
          });
        this._setEventListeners()
    };
      
      
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        })
    };

    _toggleButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
          buttonElement.classList.add(this._inactiveButtonClass);
          buttonElement.setAttribute("disabled", "disabled");
        } else {
          buttonElement.classList.remove(this._inactiveButtonClass);
          buttonElement.removeAttribute("disabled", "disabled");
        }
    }; 
}

