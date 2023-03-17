import { openImagePopup } from './utils.js'; 
//массив карточек
export const initialCards = [
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

class Card {
    constructor(templateSelector) {
        this._templateSelector = templateSelector;
      }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.card')
          .cloneNode(true);
    
        return cardElement;
    }
    //открытие попапа изображений
    _openImagePopup() {
    this._element.querySelector('.card__image').addEventListener('click', () => {
        openImagePopup(this._element);
      });
    }
    
    //удаление карточек
    _deleteCard() {
        this._element.remove();
    };
    _setDeleteCard() {
        this._element.querySelector('.card__delete').addEventListener('click', () => {
          this._deleteCard();
        })};

    _setToggleLike() {
        this._likeButton = this._element.querySelector('.card__like');
        this._likeButton.addEventListener('click', () => {
            this._likeButton.classList.toggle('card__like_active');
        })
      }; 
}

export class basicCard extends Card {
    constructor(data, templateSelector) {
      super(templateSelector);
      this._title = data.name;
      this._link = data.link;
    }
  
   generateCard() {
      this._element = super._getTemplate();
      
      super._setDeleteCard();
      super._setToggleLike();
      super._openImagePopup();
      this._cardImage = this._element.querySelector('.card__image');
      this._cardImage.src = this._link;
      this._element.querySelector('.card__title').textContent = this._title;
      this._cardImage.setAttribute('alt', this._title);
      return this._element;
    }
  }


  
  