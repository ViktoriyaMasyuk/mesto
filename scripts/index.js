import { initialCards, basicCard } from './card.js'; 
import { closePopup } from './utils.js';
import { FormValidator, settings } from './formValidator.js'

const formPlace = document.querySelector('.form-place');
const namePlaceInput = document.querySelector('.form__info_place_name');
const linkPlaceInput = document.querySelector('.form__info_place_link');
const elements = document.querySelector('.elements');
const placePopup = document.querySelector('.place-popup');

//Функция добавляет новую карточку и закрывает форму
function handlePlaceSubmit (evt) {
    evt.preventDefault();
    const card = new basicCard({name: namePlaceInput.value, link: linkPlaceInput.value, alt: namePlaceInput.value}, '#card');
    const cardElement = card.generateCard();
    elements.prepend(cardElement); 
    closePopup(placePopup);
    evt.target.reset()
  }; 

formPlace.addEventListener('submit', handlePlaceSubmit);

initialCards.forEach((item) => {
    const card = new basicCard(item, '#card');
    const cardElement = card.generateCard();
    elements.append(cardElement);
});

new FormValidator(settings, '.form-place').enableValidation()
new FormValidator(settings, '.form-profile').enableValidation()
