const profilePopup = document.querySelector('.profile-popup');
const nameInput = document.querySelector('.form__info_user_name');
const jobInput = document.querySelector('.form__info_user_job');
const profileForm = document.querySelector('.form-profile');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;
const placePopup = document.querySelector('.place-popup');
const namePlaceInput = document.querySelector('.form__info_place_name');
const linkPlaceInput = document.querySelector('.form__info_place_link');
const buttonEditPlace = document.querySelector('.profile__add-button');
const formPlace = document.querySelector('.form-place');
const imagePopup = document.querySelector('.image-popup');
const titleImagePopup = document.querySelector('.image-card__title');
const photoImagePopup = document.querySelector('.image-card__photo');
const popup = document.querySelector('.popup');
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
//Функция открытия и закрытия popup
function openPopup (popup) {
    popup.classList.add('popup_opened');
} 
function closePopup (popup) {
    popup.classList.remove('popup_opened'); 
}
// закрываем все popup
const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
//функция закрытия попапа кнопкой ecs
function keyEsc(evt) {
  if (evt.key === 'Escape') {
    const escPopups = document.querySelectorAll('.popup');
    escPopups.forEach((escPopup) => {
    closePopup(escPopup);
  });
};
};

//Функция закрытия попап кликом по докупменту за границами попапа
function keyOverlay(event) {
  if (event.target.classList.contains('popup_opened')) {
    closePopup(event.target);
  };
};

//Функция поведения формы профиля
function openProfilePopup () {
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
    openPopup(placePopup);
} 
//открытие popup фотографии
function openImagePopup(event) {
    openPopup (imagePopup);
    const titleImage = ((event.target).closest('.card')).querySelector('.card__title');
    titleImagePopup.textContent = titleImage.textContent;
    photoImagePopup.src = event.target.src;
    event.target.setAttribute('alt', titleImagePopup);
};
//функция для лайков
function toggleLike (evt) {
    evt.target.classList.toggle('card__like_active');  
}
//функция для удаления карточек
function deleteCard (evt) {
const cardUsed = evt.target.closest('.card');
cardUsed.remove();
};
//создаем функцию добавления карточек, копируем template, наполняем содержимым и отображаем на странице
function createCard(item) {
    const userCard = cardTemplate.querySelector('.card').cloneNode(true);
  	const cardImage = userCard.querySelector('.card__image');
    const deleteCardButton = userCard.querySelector('.card__delete');
    const likeCardButton = userCard.querySelector('.card__like');
    cardImage.src = item.link;
    userCard.querySelector('.card__title').textContent = item.name;
    cardImage.setAttribute('alt', item.name)
    deleteCardButton.addEventListener('click', deleteCard);
    likeCardButton.addEventListener('click', toggleLike);
  	cardImage.addEventListener('click', openImagePopup);
    return userCard;
}
initialCards.forEach(item => {
    elements.append(createCard (item));
 }); 

//Функция добавляет новую карточку и закрывает форму
function handlePlaceSubmit (evt) {
    evt.preventDefault();
    const card = {name: namePlaceInput.value, link: linkPlaceInput.value, alt: namePlaceInput.value};
    const newCard = createCard(card);
    elements.prepend(newCard); 
    closePopup(placePopup);
    evt.target.reset()
}; 

buttonEditProfile.addEventListener('click', openProfilePopup);
profileForm.addEventListener('submit', handleProfileSubmit);
buttonEditPlace.addEventListener('click', openPlacePopup);
formPlace.addEventListener('submit', handlePlaceSubmit);
document.addEventListener ('keyup', keyEsc);
document.addEventListener ('click', keyOverlay);