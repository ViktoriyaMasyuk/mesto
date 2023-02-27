const settings = {
    formSelector: '.form',
    fieldsetList: '.form__set',
    submitButtonSelector: '.form__save',
    inactiveButtonClass: 'form__save_inactive',
    inputSelector: '.form__info',
    inputErrorClass: 'form__input_type_error',
    inputActiveClass: 'form__input-error_active',
    errorClass: 'form__info_error'
};
  //валидация форм
const showInputError = (obj, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(obj.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(obj.inputActiveClass);
    const errorForm = formElement.querySelector(`.form__info_${inputElement.id}`);
    errorForm.classList.add(obj.errorClass);
  };
  
  const hideInputError = (obj, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(obj.inputErrorClass);
    errorElement.classList.remove(obj.inputActiveClass);
    errorElement.textContent = '';
    const errorForm = formElement.querySelector(`.form__info_${inputElement.id}`);
    errorForm.classList.remove(obj.errorClass);
  };
  
  const checkInputValidity = (obj, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(obj, formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(obj, formElement, inputElement);
    }
  };
  
  const setEventListeners = (obj, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);
    toggleButtonState(obj, inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(obj, formElement, inputElement);
        toggleButtonState(obj, inputList, buttonElement);
      });
    });
    formElement.addEventListener('reset', () => {
        setTimeout(() => 
        toggleButtonState(obj, inputList, buttonElement), 0 )});
};
    

  
  function enableValidation(obj) {
    const formList = Array.from(document.querySelectorAll(obj.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      const fieldsetList = Array.from(formElement.querySelectorAll(obj.fieldsetList));
  fieldsetList.forEach((fieldSet) => {
    setEventListeners(obj,fieldSet)
  });
  });
  };
  
  
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };
  const toggleButtonState = (obj, inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(obj.inactiveButtonClass);
      buttonElement.setAttribute("disabled", "disabled");
    } else {
      buttonElement.classList.remove(obj.inactiveButtonClass);
      buttonElement.removeAttribute("disabled", "disabled");
    }
  }; 

  enableValidation(settings); 