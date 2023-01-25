function showPopupForm () {
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup_opened'); 
} 

let editProfileButton = document.querySelector('.profile__edit-button');
editProfileButton.addEventListener('click', showPopupForm)

function hidePopupForm () {
    let popup = document.querySelector('.popup');
    popup.classList.add('popup_opened'); 
}

let closeFormButton = document.querySelector('.popup__close');
closeFormButton.addEventListener('click', hidePopupForm); 


let form = document.querySelector('.form');
let nameInput = document.querySelector('.form__name');
let jobInput = document.querySelector('.form__profession');

console.log(form);
console.log(nameInput);
console.log(jobInput);

function handleFormSubmit (evt) {
    evt.preventDefault();
    let newName = document.querySelector('.profile__title');
    let newJob = document.querySelector('.profile__subtitle');
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    hidePopupForm();    
}

form.addEventListener('submit', handleFormSubmit);