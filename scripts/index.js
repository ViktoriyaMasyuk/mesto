import { initialCards, Card } from './card.js'; 
import { closePopup } from './utils.js';
import { FormValidator, settings } from './formValidator.js'

const formPlace = document.querySelector('.form-place');
const namePlaceInput = document.querySelector('.form__info_place_name');
const linkPlaceInput = document.querySelector('.form__info_place_link');
const elements = document.querySelector('.elements');
const placePopup = document.querySelector('.place-popup');

//Функция создания карточки
function createCard(item) {
    const card = new Card(item, '#card');
    const cardElement = card.generateCard();
    return cardElement
}
//Функция добавляет новую карточку и закрывает форму
function handlePlaceSubmit (evt) {
    evt.preventDefault();
    elements.prepend(createCard({name: namePlaceInput.value, link: linkPlaceInput.value, alt: namePlaceInput.value}));
    closePopup(placePopup);
    evt.target.reset()
  }; 

formPlace.addEventListener('submit', handlePlaceSubmit);

initialCards.forEach((item) => {
    elements.append(createCard(item));
});

export const placeValidator = new FormValidator(settings, '.form-place');
export const profileValidator = new FormValidator(settings, '.form-profile');
placeValidator.enableValidation();
profileValidator.enableValidation();