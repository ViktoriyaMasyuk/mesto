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