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
































const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content
initialCards.forEach(function (item) {
    const card = cardTemplate.cloneNode(true);
    card.querySelector('.card__title').textContent = item.name;
    card.querySelector('.card__image').src = item.link;
    elements.append(card)
 }); 

console.log(elements)
