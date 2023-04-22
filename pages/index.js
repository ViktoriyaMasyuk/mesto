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
  buttonDeleteCard,
  avatarPopup,
  avatarImage,
} from "../../utils/constants.js";
import FormValidator from "../../components/formValidator.js";
import Card from "../../components/card.js";
import Section from "../components/section.js";
import PopupWithImage from "../../components/popupWithImage.js";
import PopupWithForm from "../../components/popupWithForm.js";
import PopupWithSubmit from "../../components/popupWithSubmit.js";
import UserInfo from "../../components/userInfo.js";
import Api from "../components/Api";

/**Функция создания карточки*/
function createCard(cardData) {
  const card = new Card(
    cardData,
    "#card",
    handleCardClick,
    api.getUser,
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
let cardsSection;

api
  .getInitialCards()
  .then((result) => {
    cardsSection = new Section(
      {
        data: result,
        renderer: (cardData) => {
          const cardElement = createCard(cardData);
          cardsSection.addItem(cardElement);
        },
      },
      cardsContainer
    );
    cardsSection.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

/**открытие попапа изображений*/
function handleCardClick(name, link) {
  popupImage.open(name, link);
}
const popupImage = new PopupWithImage(imagePopup);
popupImage.setEventListeners();

/**открытие попапа формы добавления карточек*/
buttonEditPlace.addEventListener("click", () => {
  placeValidator.resetValidation();
  popupPlaceForm.open();
});

/**закрытие попапа и добавление карточки*/
const popupPlaceForm = new PopupWithForm(
  placePopup,
  (cardCreatedPopup) => {
    api
      .addNewCard(cardCreatedPopup)
      .then((result) => {
        const cardElement = createCard(result);
        cardsSection.prependItem(cardElement);
      })
      .catch((err) => {
        console.log(err);
      });
    popupPlaceForm.close();
  },
  placeForm
);
popupPlaceForm.setEventListeners();

/**открытие попапа профиля*/
const user = new UserInfo(profileName, profileJob, avatarImage);

api
  .getUserInfo()
  .then((result) => {
    user.setUserInfo({
      name: result.name,
      profession: result.about,
      avatar: result.avatar,
    });
  })
  .catch((err) => {
    console.log(err);
  });

buttonEditProfile.addEventListener("click", () => {
  profileValidator.resetValidation();
  const profileInfo = user.getUserInfo();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.profession;
  popupProfileForm.open();
});

const popupProfileForm = new PopupWithForm(profilePopup, (data) => {
  renderLoading(true, profilePopup);
  api
    .updateUserInfo({ name: data.name, about: data.profession })
    .then((result) => {
      api.getUserInfo();
      user.setUserInfo(data);
      popupProfileForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, profilePopup);
    });
});

popupProfileForm.setEventListeners();

/** Изменение аватара*/
const avatarChangePopup = new PopupWithForm(avatarPopup, (url) => {
  renderLoading(true, avatarPopup);
  api
    .changeAvatar(url["avatar-link"])
    .then((result) => {
      user.getUserInfo();
      avatarChangePopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, avatarPopup);
    });
});
avatarChangePopup.setEventListeners();

avatarImage.addEventListener("click", () => {
  avatarChangePopup.open();
});

/**попап удаления карточек*/
const popupDeleteForm = new PopupWithSubmit(basketPopup);
popupDeleteForm.setEventListeners();

/**функция удаление карточки*/
function handleCardDelete(card) {
  popupDeleteForm.open();
  buttonDeleteCard.addEventListener("click", () => {
    api
      .deleteCard(card._id)
      .then(() => {
        card.deleteCard();
        popupDeleteForm.close();
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  });
}

/**функция постановки лайков*/
// function toggleLike(card) {
//   if (card.isUserLiked()) {
//     api
//       .unsetLike(card.getId())
//       .then(() => {
//         card.changeCountLikes(-1);
//         card.removeLike();
//       })
//       .catch((err) => {
//         console.log(`${err}`);
//       });
//   } else {
//     api
//       .setLike(card.getId())
//       .then(() => {
//         card.changeCountLikes(1);
//         card.addLike();
//       })
//       .catch((err) => {
//         console.log(`${err}`);
//       });
//   }
// }

function toggleLike(card) {
  console.log(card.isUserLiked());
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

/**функция сохранения изменений*/
function renderLoading(isLoading, popupForm) {
  const button = popupForm.querySelector(".form__submit");
  if (isLoading) {
    button.textContent = "Сохранение...";
    //console.log(button.textContent);
  } else {
    button.textContent = "Сохранить";
  }
}

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
