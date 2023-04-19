export default class Card {
  constructor(data, templateSelector, openHandler, userId, handleCardDelete, toggleLikeHandler) {
      this._templateSelector = templateSelector;
      this._title = data.name;
      this._link = data.link;
      this._id = data._id;
      this._likes = data.likes.map(el => el._id);
      this._userId = userId;
      this._openHandler = openHandler;
      this._isMeAuthor = userId == data.owner._id
      this._handleCardDelete = handleCardDelete;
      this._toggleLikeHandler = toggleLikeHandler;
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
  toggleLike() {
    this._likeButton.classList.toggle('card__like_active');
  };
  _addEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._toggleLikeHandler(this)});
    this._deleteButton.addEventListener('click', () => {
      this._handleCardDelete(this)});
    this._imagePopup.addEventListener('click', () => {
      this._openHandler(this)});
  }
  removeLike(){
    this._likes = this._likes.filter(e => e !== this._userId)
    this.toggleLike()
  }
  addLike(){
    this._likes.push(this._userId)
    this.toggleLike()
  }
  generateCard() {
    this._element = this._getTemplate();
    
    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._element.querySelector('.card__title').textContent = this._title;
    this._cardImage.setAttribute('alt', this._title);
    this._likeButton = this._element.querySelector('.card__like');
    this._deleteButton = this._element.querySelector('.card__delete');
    if (!this._isMeAuthor){
      this._deleteButton.remove()
    }
    this._likeCount = this._element.querySelector('.card__count-likes')
    this._likeCount.textContent = this._likes.length
    this._imagePopup = this._element.querySelector('.card__image');
    this._addEventListeners();
    if (this.isUserLiked()){
      this.addLike()
    }
    return this._element;
  }
  isUserLiked(){
    return this._likes.indexOf(this._userId) > -1
  }
  changeCountLikes(value){
    this._likeCount.textContent = Number(this._likeCount.textContent) + value
  }
  getId(){
    return this._id
  }
}


  
  