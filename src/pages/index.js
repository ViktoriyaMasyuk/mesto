import "./index.css";

import {
  validationSettings,
  cardsContainer,
  buttonEditProfile,
  imagePopup,
  buttonEditPlace,
  placePopup,
  profilePopup,
  basketPopup,
  placeForm,
  nameInput,
  jobInput,
  profileName,
  profileJob,
  avatarPopup,
  avatarImage,
} from "../utils/constants";
import FormValidator from "../components/FormValidator";
import Card from "../components/Card";
import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import UserInfo from "../components/UserInfo";
import Api from "../components/Api";

/**Функция создания карточки*/
function createCard(cardData) {
  const card = new Card(
    cardData,
    "#card",
    openImagePopup,
    user.getUser(),
    handleCardDelete,
    toggleLike
  );
  return card.generateCard();
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-64/",
  headers: {
    authorization: "ade0a831-d345-4d2c-8394-f99ed3b27f1b",
    "Content-Type": "application/json",
  },
});

/**создание секции карточек*/
const cardsSection = new Section((cardData) => {
  const cardElement = createCard(cardData);
  cardsSection.addItem(cardElement);
}, cardsContainer);
/**открытие попапа профиля*/
const user = new UserInfo(profileName, profileJob, avatarImage);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userInfo, cards]) => {
    user.setUser(userInfo);
    user.setUserInfo({
      name: userInfo.name,
      profession: userInfo.about,
      avatar: userInfo.avatar,
    });
    cardsSection.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

/**открытие попапа изображений*/
function openImagePopup(name, link) {
  popupImage.open(name, link);
}
const popupImage = new PopupWithImage(imagePopup);
popupImage.setEventListeners();

/**закрытие попапа и добавление карточки*/
const popupPlaceForm = new PopupWithForm(
  placePopup,
  (cardData) => {
    api
      .addNewCard(cardData)
      .then((result) => {
        const cardElement = createCard(result);
        cardsSection.prependItem(cardElement);
        popupPlaceForm.close();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  placeForm
);
popupPlaceForm.setEventListeners();

const popupProfileForm = new PopupWithForm(profilePopup, (data) => {
  popupProfileForm.setSubmitButtonText("Сохранение...");
  api
    .updateUserInfo({ name: data.name, about: data.profession })
    .then((result) => {
      user.setUserInfo({
        name: result.name,
        profession: result.about,
        avatar: result.avatar,
      });
      popupProfileForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfileForm.setSubmitButtonText("Сохранить");;
    });
});

popupProfileForm.setEventListeners();

/** Изменение аватара*/
const avatarChangePopup = new PopupWithForm(avatarPopup, (url) => {
  avatarChangePopup.setSubmitButtonText("Сохранение...");;
  api
    .changeAvatar(url["avatar-link"])
    .then((result) => {
      console.log(result);
      user.setAvatarLink(url["avatar-link"]);
      avatarChangePopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarChangePopup.setSubmitButtonText("Сохранить");;
    });
});
avatarChangePopup.setEventListeners();

/**попап удаления карточек*/
const popupDeleteForm = new PopupWithSubmit(basketPopup);
popupDeleteForm.setEventListeners();

/**функция удаление карточки*/

function handleCardDelete(card) {
  popupDeleteForm.setCallback(() => {
    api
      .deleteCard(card.getId())
      .then(() => {
        card.deleteCard();
        popupDeleteForm.close();
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  });
  popupDeleteForm.open();
}

/**функция постановки лайков*/

function toggleLike(card) {
  if (card.isUserLiked()) {
    api
      .unsetLike(card.getId())
      .then(() => {
        card.updateLikes();
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  } else {
    api
      .setLike(card.getId())
      .then(() => {
        card.updateLikes();
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }
}

/**открытие попапа формы добавления карточек*/
buttonEditPlace.addEventListener("click", () => {
  placeValidator.resetValidation();
  popupPlaceForm.open();
});

buttonEditProfile.addEventListener("click", () => {
  profileValidator.resetValidation();
  const profileInfo = user.getUserInfo();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.profession;
  popupProfileForm.open();
});

avatarImage.addEventListener("click", () => {
  avatarChangePopup.open();
});

export const placeValidator = new FormValidator(
  validationSettings,
  ".form-place"
);
export const profileValidator = new FormValidator(
  validationSettings,
  ".form-profile"
);
export const avatarValidator = new FormValidator(
  validationSettings,
  ".form_avatar"
);
placeValidator.enableValidation();
profileValidator.enableValidation();
avatarValidator.enableValidation();
