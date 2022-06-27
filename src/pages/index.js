import "./index.css"; // import of the main stylesheets file

import {
  config,
  profileForm,
  editProfileButton,
  addPostcardButton,
  inputCardName,
  inputCardTitle,
  postcardForm,
  templatePostcardSelector,
  baseUrl,
  headers,
} from "../utils/constants.js";

import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";

import Api from "../components/Api.js";

import allPostcards from "../utils/allPostcards.js";

const profileFormValidator = new FormValidator(config, profileForm);
const postcardFormValidator = new FormValidator(config, postcardForm);

profileFormValidator.enableValidation();
postcardFormValidator.enableValidation();

// ────────────────────────────────────────────────────────────────────────────
// let userId;

const api = new Api(baseUrl, headers);

const newUser = new UserInfo({
  userNameSelector: ".profile__name",
  userJobSelector: ".profile__description",
  userAvatarSelector: ".profile__image",
});

api.getUserInfo().then((res) => {
  newUser.setUserInfo(res.name, res.about);
  newUser.setUserAvatar(res.avatar);
  newUser.setUserId(res._id);
});

api.getInitialcards().then((res) => {
  const cardList = new Section(
    {
      data: res,
      renderer: (data) => {
        const postcard = createCard(data);
        cardList.setItem(postcard);
      },
    },
    ".postcards__list"
  );
  cardList.render();
});
// ────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────
// const cardList = new Section(
//   {
//     // data: allPostcards,
//     renderer: (data) => {
//       const postcard = createCard(data);
//       cardList.setItem(postcard);
//     },
//   },
//   ".postcards__list"
// );
// cardList.render();
// ────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────
// Generate Card
function createCard(data) {
  const card = new Card(
    data,
    templatePostcardSelector,
    {
      handleCardClick: () => {
        imagePopup.open(data.link, data.name);
      },
      handleRemoveCard: () => {},
      handleLikeCard: () => {},
    },
    newUser.getUserId()
  );
  const cardElement = card.generateCard();

  return cardElement;
}
// ────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────
const addPostcard = new PopupWithForm({
  popupSelector: ".popup_type_add-postcard",
  handleFormSubmit: (data) => {
    const newPostcard = createCard(data);
    cardList.addItem(newPostcard);
    addPostcard.close();
  },
});
addPostcard.setEventListeners();
// ────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────
const editProfileModal = new PopupWithForm({
  popupSelector: ".popup_type_edit-profile",
  handleFormSubmit: (data) => {
    newUser.setUserInfo(data.username, data.userjob);
    editProfileModal.close();
  },
});
editProfileModal.setEventListeners();
// ────────────────────────────────────────────────────────────────────────────

const imagePopup = new PopupWithImage(".popup_type_image-ex");
imagePopup.setEventListeners();

/* ────────────────────────────────────────────────────────────────────────────
   ------------------- Adding the Necessary Event Listeners: ------------------
   ──────────────────────────────────────────────────────────────────────────── */
editProfileButton.addEventListener("click", () => {
  const { userName, userJob } = newUser.getUserInfo();
  inputCardName.value = userName;
  inputCardTitle.value = userJob;

  profileFormValidator.resetValidation();
  editProfileModal.open();
});

addPostcardButton.addEventListener("click", () => {
  addPostcard.open();
  postcardFormValidator.resetValidation();

  // postcardForm.reset();
});
// ────────────────────────────────────────────────────────────────────────────
