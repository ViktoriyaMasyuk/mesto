const enableValidation = {
    formSelector: '.form',
    fieldsetList: '.form__set',
    submitButtonSelector: '.form__save',
    inactiveButtonClass: '.form__save_inactive',
    inputSelector: '.form__info',
    inputErrorClass: 'form__input_type_error',
    inputActiveClass: 'form__input-error_active',
    errorClass: 'form__info_error'
  };
  //валидация форм
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(enableValidation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(enableValidation.inputActiveClass);
    const errorForm = formElement.querySelector(`.form__info_${inputElement.id}`);
    errorForm.classList.add(enableValidation.errorClass);
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(enableValidation.inputErrorClass);
    errorElement.classList.remove(enableValidation.inputActiveClass);
    errorElement.textContent = '';
    const errorForm = formElement.querySelector(`.form__info_${inputElement.id}`);
    errorForm.classList.remove(enableValidation.errorClass);
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(enableValidation.inputSelector));
    const buttonElement = formElement.querySelector(enableValidation.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  function isValid () {
    const formList = Array.from(document.querySelectorAll(enableValidation.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      const fieldsetList = Array.from(formElement.querySelectorAll(enableValidation.fieldsetList));
  fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet)
  });
  });
  };
  
  
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };
  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(enableValidation.inactiveButtonClass);
    } else {
      buttonElement.classList.remove(enableValidation.inactiveButtonClass);
    }
  }; 
  isValid();