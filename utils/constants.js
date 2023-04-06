export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

export const settings = {
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_inactive',
  inputSelector: '.form__info',
  inputErrorClass: 'form__input_type_error',
  inputActiveClass: 'form__input-error_active',
  errorClass: 'form__info_error'
};

export const elements = document.querySelector('.elements');
export const imagePopup = document.querySelector('.image-popup');
export const form = document.querySelector('.form-place');
export const placePopup = document.querySelector('.place-popup');
export const profilePopup = document.querySelector('.profile-popup');
export const buttonEditPlace = document.querySelector('.profile__add-button');
export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const placeForm = document.querySelector('.form-place');
export const profileForm = document.querySelector('.form-profile');
export const nameInput = document.querySelector('#name-input');
export const jobInput = document.querySelector('#job-input');
export const profileName = document.querySelector('.profile__title');
export const profileJob = document.querySelector('.profile__subtitle');