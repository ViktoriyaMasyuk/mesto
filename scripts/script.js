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
//функции для popup-place
const popupPlace = document.querySelector('.popup-place');
const namePlaceInput = document.querySelector('.form__info_place_name');
const linkPlaceInput = document.querySelector('.form__info_place_link');
const buttonEditPlace = document.querySelector('.profile__add-button');
const buttonClosePlace = document.querySelector('.form-place__close');
const formPlace = document.querySelector('.form-place');

//создаем функцию добавления карточек, копируем template, наполняем содержимым и отображаем на странице
initialCards.forEach(item => {
    const userCard = cardTemplate.querySelector('.card').cloneNode(true);

    userCard.querySelector('.card__image').src = item.link;
    userCard.querySelector('.card__title').textContent = item.name;

    elements.append(userCard); 
 }); 

//Функциb открывают и закрывают форму места
function showPopupPlace () {
    popupPlace.classList.add('popup_opened');
} 
 function hidePopupPlace () {
    popupPlace.classList.remove('popup_opened'); 
}

//активизируем лайки
const cardLikes = elements.querySelectorAll('.card__like');

function addLikes (evt) {
    evt.target.classList.toggle('card__like_active');  
}

cardLikes.forEach((cardLike) => cardLike.addEventListener('click', addLikes)); 

//удаляем карточку
const basketButtons = document.querySelectorAll('.card__delete')

basketButtons.forEach((basketButton) => basketButton.addEventListener('click', function() {
    const cardUsed = basketButton.closest('.card');
    cardUsed.remove();
}));
 
//функции для открытия фото места
let popupImage = document.querySelector('.popup-image');
let buttonOpenImages = document.querySelectorAll('.card__image');
const cardImage = document.querySelector('.image-card');
const buttonCloseImage = document.querySelector('.image-card__close');

//Нажатие на клик открывает фото места
function openImagePlace(event) {
    
    popupImage.classList.add('popup_opened');
    const titleImage = (event.target.nextElementSibling).firstElementChild;
    document.querySelector('.image-card__title').textContent = titleImage.textContent;
    document.querySelector('.image-card__photo').src = event.target.src;
};

buttonOpenImages.forEach((buttonOpenImage) => buttonOpenImage.addEventListener('click', openImagePlace));
buttonCloseImage.addEventListener('click', hidePopupImage); 

//Функция закрывает фото места
function hidePopupImage () {
    popupImage.classList.remove('popup_opened'); 
}  

buttonEditPlace.addEventListener('click', showPopupPlace);
buttonClosePlace.addEventListener('click', hidePopupPlace); 
formPlace.addEventListener('submit', handlePlaceSubmit);

//Функция переопределяет стандартное поведение формы, добавляет новую карточку и закрывает форму
function handlePlaceSubmit (evt) {
    evt.preventDefault();
    const userCard = cardTemplate.querySelector('.card').cloneNode(true);
    const photoCard = userCard.querySelector('.card__image');
    photoCard.src = linkPlaceInput.value;
    userCard.querySelector('.card__title').textContent = namePlaceInput.value;
    userCard.querySelector('.card__like').addEventListener('click', addLikes); 
    photoCard.addEventListener('click', openImagePlace);
    userCard.querySelector('.card__delete').addEventListener('click', function() {
        userCard.remove();
    });
    elements.prepend(userCard); 
    hidePopupPlace();
}; 