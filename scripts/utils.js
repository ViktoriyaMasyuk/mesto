import { placeValidator, profileValidator } from './index.js';

const profilePopup = document.querySelector('.profile-popup');
const nameInput = document.querySelector('.form__info_user_name');
const jobInput = document.querySelector('.form__info_user_job');
const profileForm = document.querySelector('.form-profile');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const placePopup = document.querySelector('.place-popup');
const buttonEditPlace = document.querySelector('.profile__add-button');
const imagePopup = document.querySelector('.image-popup');
const titleImagePopup = document.querySelector('.image-card__title');
const photoImagePopup = document.querySelector('.image-card__photo');

//Функция открытия и закрытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}
// закрываем все popup
const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
//функция закрытия попапа кнопкой ecs
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
  };
};
//Функция закрытия попап кликом по докупменту за границами попапа
function closeByOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
      closePopup(evt.target);
  };
};
//Функция поведения формы профиля
function openProfilePopup () {
  profileValidator.resetValidation();
  openPopup (profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  
}
function handleProfileSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);    
}
//Функции открытия формы места
function openPlacePopup () {
  placeValidator.resetValidation();
  openPopup(placePopup);
} 
//открытие popup фотографии
export function openImagePopup(card) {
  openPopup (imagePopup);
  const titleImage = card.querySelector('.card__title');
  titleImagePopup.textContent = titleImage.textContent; 
  photoImagePopup.src = card.querySelector('.card__image').src;
  photoImagePopup.setAttribute('alt', titleImagePopup);
};

buttonEditProfile.addEventListener('click', openProfilePopup);
profileForm.addEventListener('submit', handleProfileSubmit);
buttonEditPlace.addEventListener('click', openPlacePopup);
document.addEventListener ('click', closeByOverlay);

