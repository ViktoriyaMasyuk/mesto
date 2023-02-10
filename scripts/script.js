//функции для popup-profile
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.form__personal-info_user_name');
let jobInput = document.querySelector('.form__personal-info_user_job');
let form = document.querySelector('.form');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let buttonEditProfile = document.querySelector('.profile__edit-button');
let buttonCloseForm = document.querySelector('.form__close');

//Функция открывает форму и заполняет данные из полей секции 'profile'
function showPopupForm () {
    popup.classList.add('popup_opened');
    nameInput.textContent = profileName.value;
    jobInput.textContent = profileJob.value;
} 

//Функция закрывает форму
function hidePopupForm () {
    popup.classList.remove('popup_opened'); 
}

//Функция переопределяет стандартное поведение формы, вносит изменения в поля секции 'profile' и закрывает форму
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    hidePopupForm();    
}

buttonEditProfile.addEventListener('click', showPopupForm);
buttonCloseForm.addEventListener('click', hidePopupForm); 
form.addEventListener('submit', handleFormSubmit);

//массив карточек
const initialCards = [
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

//настраиваем добавление карточек, ищем temnlate и сецию карточек
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;

//создаем функцию добавления карточек, копируем template, наполняем содержимым и отображаем на странице
initialCards.forEach(item => {
    const userCard = cardTemplate.querySelector('.card').cloneNode(true);

    userCard.querySelector('.card__image').src = item.link;
    userCard.querySelector('.card__title').textContent = item.name;

    elements.append(userCard); 
 }); 

//функции для popup-place
 let popupPlace = document.querySelector('.popup__place');
 let namePlaceInput = document.querySelector('.form__info_place_name');
 let linkPlaceInput = document.querySelector('.form__info_place_link');
 let buttonEditPlace = document.querySelector('.profile__add-button');
 let buttonClosePlace = document.querySelector('.place__close');
 let formPlace = document.querySelector('.form__place');

//Функциb открывают и закрывают форму места
function showPopupPlace () {
    popupPlace.classList.add('popup_opened');
} 
 function hidePopupPlace () {
    popupPlace.classList.remove('popup_opened'); 
}

//Функция переопределяет стандартное поведение формы, добавляет новую карточку и закрывает форму
function handlePlaceSubmit (evt) {
    evt.preventDefault();
    const userCard = cardTemplate.querySelector('.card').cloneNode(true);
    
    userCard.querySelector('.card__image').src = linkPlaceInput.value;
    userCard.querySelector('.card__title').textContent = namePlaceInput.value;
    
    elements.prepend(userCard); 
    hidePopupPlace();    
}; 

 buttonEditPlace.addEventListener('click', showPopupPlace);
 buttonClosePlace.addEventListener('click', hidePopupPlace); 
 formPlace.addEventListener('submit', handlePlaceSubmit);

 //активизируем лайки
const cardLikes = document.querySelectorAll('.card__like');

cardLikes.forEach((cardLike) => cardLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');  
})); 


  
