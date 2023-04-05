import './index.css';

import { initialCards, 
  settings, 
  elements, 
  buttonEditProfile, 
  imagePopup,
  buttonEditPlace, 
  placePopup,
  profilePopup,
  placeForm,
  profileForm,
  nameInput,
  jobInput,
  profileName,
  profileJob } from '../utils/constants.js'; 
import FormValidator from '../components/formValidator.js'
import Card from '../components/card.js';
import Section from '../components/section.js';
import PopupWithImage from '../components/popupWithImage.js';
import PopupWithForm from '../components/popupWithForm.js';
import UserInfo from '../components/userInfo.js';

//создание секции карточек
const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        const card = new Card(item, '#card', handleCardClick);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
      }
  }, elements);

//открытие попапа изображений 
function handleCardClick(card) {
    popupImage.open(card);
}
const popupImage = new PopupWithImage(imagePopup);
popupImage.setEventListeners();

//открытие попапа формы добавления карточек
buttonEditPlace.addEventListener('click', () => {
  placeValidator.resetValidation();
  popupPlaceForm.open();
});

const popupPlaceForm = new PopupWithForm(placePopup,
  (evt) => {
    const formValues = popupPlaceForm.getValues();
    const item = { name: formValues.name, link: formValues.link }
    const card = new Card(item, '#card', handleCardClick);
    const cardElement = card.generateCard();
    cardList.addNewItem(cardElement);
    popupPlaceForm.close();
  }, placeForm)
popupPlaceForm.setEventListeners();

//открытие попапа профиля
const user = new UserInfo(profileName, profileJob);

buttonEditProfile.addEventListener('click', () => {
  profileValidator.resetValidation();
  user.getUserInfo(nameInput, jobInput);
  popupProfileForm.open();
});

const popupProfileForm = new PopupWithForm(profilePopup,
  (data) => {
    user.setUserInfo(data);
    popupProfileForm.close();
  }, profileForm)
popupProfileForm.setEventListeners();

export const placeValidator = new FormValidator(settings, '.form-place');
export const profileValidator = new FormValidator(settings, '.form-profile');
placeValidator.enableValidation();
profileValidator.enableValidation();
cardList.renderItems();

