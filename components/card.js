export default class Card {
  constructor(data, templateSelector, openHandler) {
      this._templateSelector = templateSelector;
      this._title = data.name;
      this._link = data.link;
      //
      this._openHandler = openHandler;
    }

  _getTemplate() {
      const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);
        return cardElement;
  }

  //удаление карточек
  _deleteCard() {
    this._element.remove();
  };
  //лайки
  _toggleLike() {
    this._likeButton.classList.toggle('card__like_active');
  };

  _addEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._toggleLike()});
    this._deleteButton.addEventListener('click', () => {
      this._deleteCard()});
   this._imagePopup.addEventListener('click', () => {
     this._openHandler(this)});
  }
  generateCard() {
    this._element = this._getTemplate();
    
    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._element.querySelector('.card__title').textContent = this._title;
    this._cardImage.setAttribute('alt', this._title);
    this._likeButton = this._element.querySelector('.card__like');
    this._deleteButton = this._element.querySelector('.card__delete');
    this._imagePopup = this._element.querySelector('.card__image');
    this._addEventListeners();
    return this._element;
  }
}


  
  