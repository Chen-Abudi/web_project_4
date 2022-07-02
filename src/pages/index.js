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
  avatar,
  updateAvatarForm,
  baseUrl,
  headers,
} from "../utils/constants.js";

import Card from "../components/Card.js";
import PopupRemoveImage from "../components/PopupRemoveImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";

import Api from "../components/Api.js";

const profileFormValidator = new FormValidator(config, profileForm);
const postcardFormValidator = new FormValidator(config, postcardForm);
const avatarFormValidator = new FormValidator(config, updateAvatarForm);

profileFormValidator.enableValidation();
postcardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

// ────────────────────────────────────────────────────────────────────────────
const api = new Api(baseUrl, headers);

// An Instant of User Info
const newUser = new UserInfo({
  userNameSelector: ".profile__name",
  userJobSelector: ".profile__description",
  userAvatarSelector: ".profile__image",
});
// ────────────────────────────────────────────────────────────────────────────
const cardList = new Section(
  {
    renderer: reciteCard,
  },
  ".postcards__list"
);
// ────────────────────────────────────────────────────────────────────────────

/* ────────────────────────────────────────────────────────────────────────────
   ------ It takes an iterable of Promises as an input, and returns a ---------
   - single Promise which resolves to an array of the input Promises result ---
   ──────────────────────────────────────────────────────────────────────────── */
Promise.all([api.getUserInfo(), api.getInitialcards()])
  .then(([userData, cardsData]) => {
    newUser.setUserInfo(userData.name, userData.about);
    newUser.setUserAvatar(userData.avatar);
    newUser.setUserId(userData._id);
    cardList.render(cardsData);
  })
  .then(() => newUser.setAvatarSight())
  .catch((err) => console.log(err));
// ────────────────────────────────────────────────────────────────────────────

// ───── Generate Card ────────────────────────────────────────────────────────
function createCard(data) {
  const card = new Card(
    data,
    templatePostcardSelector,
    {
      handleCardClick: () => {
        imagePopup.open(data.link, data.name);
      },
      handleRemoveCard: ({ id }) => {
        removeImagePopup.open();

        removeImagePopup.setSubmitAction(() => {
          api
            .removeCard(id)
            .then((res) => {
              console.log("postcard is removed", res);
              card.setRemoveCard();
            })
            .then(() => {
              console.log("postcard was removed by the server");
              removeImagePopup.close();
            })
            .catch((err) => console.log(err));
        });
      },
      handleLikeCard: (cardId, isItLiked) => api.cardLike(cardId, isItLiked),
    },
    newUser.getUserId()
  );
  return card.generateCard();
}
// ────────────────────────────────────────────────────────────────────────────

// Reciting the Postcard on the Page
function reciteCard(data) {
  const postcard = createCard(data);
  cardList.setItem(postcard);
}
// ────────────────────────────────────────────────────────────────────────────

// ────── Add Postcard Modal ──────────────────────────────────────────────────
const addPostcard = new PopupWithForm({
  popupSelector: ".popup_type_add-postcard",
  handleFormSubmit: (data) => {
    addPostcard.renderLoadingStatus(true, "Creating...");
    api
      .addCard(data)
      .then((data) => {
        const newPostcard = createCard(data);
        cardList.addItem(newPostcard);
        addPostcard.close();
      })
      .catch((err) => console.log(err))
      .finally(() => addPostcard.renderLoadingStatus(false));
  },
});
// ────────────────────────────────────────────────────────────────────────────

// ───── Edit Profile Modal ───────────────────────────────────────────────────
const editProfileModal = new PopupWithForm({
  popupSelector: ".popup_type_edit-profile",
  handleFormSubmit: (data) => {
    editProfileModal.renderLoadingStatus(true, "Saving...");
    api
      .setUserInfo({ name: data.username, about: data.userjob })
      .then((data) => {
        newUser.setUserInfo(data.name, data.about);
        editProfileModal.close();
      })
      .catch((err) => console.log(err))
      .finally(() => editProfileModal.renderLoadingStatus(false));
  },
});
// ────────────────────────────────────────────────────────────────────────────

const imagePopup = new PopupWithImage(".popup_type_image-ex");

const removeImagePopup = new PopupRemoveImage({
  popupSelector: ".popup_type_remove-postcard",
});
// ────────────────────────────────────────────────────────────────────────────
// Avatar update popup
const updateAvatarPopup = new PopupWithForm({
  popupSelector: ".popup_type_avatar-update",
  handleFormSubmit: (data) => {
    updateAvatarPopup.renderLoadingStatus(true, "Updating...");
    api
      .setUserAvatar(data.link)
      .then((res) => {
        updateAvatarPopup.close();
        newUser.setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err))
      .finally(() => updateAvatarPopup.renderLoadingStatus(false));
  },
});
// ────────────────────────────────────────────────────────────────────────────

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
});

avatar.addEventListener("click", () => {
  updateAvatarPopup.open();
  avatarFormValidator.resetValidation();
});
// ────────────────────────────────────────────────────────────────────────────
