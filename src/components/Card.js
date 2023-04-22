export default class Card {
  constructor(
    data,
    templateSelector,
    handleImageClick,
    user,
    handleCardDelete,
    handleToggleLike
  ) {
    this._templateSelector = templateSelector;
    this._title = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._user = user;
    this._handleImageClick = handleImageClick;
    this._isMeAuthor = user._id === data.owner._id;
    this._handleCardDelete = handleCardDelete;
    this._handleToggleLike = handleToggleLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  //удаление карточек
  deleteCard() {
    //пыталась сделать "this._element = null;", но элемент не удаляется без дополнительного обновления страницы,
    //попробовала добавить в Section новый метод удаления и передавать тут же.
    //Но в таком случае код становится более громозким.
    this._element.remove();
  }
  //лайки
  toggleLike() {
    this._buttonLike.classList.toggle("card__like_active");
  }
  _addEventListeners() {
    this._buttonLike.addEventListener("click", () => {
      this._handleToggleLike(this);
    });
    this._buttonDelete.addEventListener("click", () => {
      this._handleCardDelete(this);
    });
    this._imagePopup.addEventListener("click", () => {
      this._handleImageClick(this._title, this._link);
    });
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector(".card__image");
    this._cardImage.src = this._link;
    this._element.querySelector(".card__title").textContent = this._title;
    this._cardImage.alt = this._title;
    this._buttonLike = this._element.querySelector(".card__like");
    this._buttonDelete = this._element.querySelector(".card__delete");
    if (!this._isMeAuthor) {
      this._buttonDelete.remove();
    }
    this._countLike = this._element.querySelector(".card__count-likes");
    this._countLike.textContent = this._likes.length;
    this._imagePopup = this._element.querySelector(".card__image");
    this._addEventListeners();
    if (this.isUserLiked()) {
      this.toggleLike();
    }
    return this._element;
  }
  isUserLiked() {
    return this._likes.some((el) => el._id == this._user._id);
  }

  updateLikes() {
    if (this.isUserLiked()) {
      this._likes = this._likes.filter((e) => e !== this._user);
    } else {
      this._likes.push(this._user);
    }
    this.toggleLike();
    this._countLike.textContent = this._likes.length;
  }
  getId() {
    return this._id;
  }
}
