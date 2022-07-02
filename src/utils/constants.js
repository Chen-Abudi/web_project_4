/* ────────────────────────────────────────────────────────────────────────────
   ------- This Object Contains the Necessary Elements: -----------------------
   ──────────────────────────────────────────────────────────────────────────── */
const config = {
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
};
// ────────────────────────────────────────────────────────────────────────────

// Profile and Its Elements:
const profileForm = document.querySelector(".popup__form_type_profile");
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const profileDescription = profile.querySelector(".profile__description");
// ────────────────────────────────────────────────────────────────────────────

// The Profile Buttons:
const editProfileButton = profile.querySelector(".profile__edit-button");
const addPostcardButton = profile.querySelector(".profile__add-button");
// ────────────────────────────────────────────────────────────────────────────

// Form and Its Components:
const cardForm = document.querySelector(".form");
const inputCardName = cardForm.querySelector(".form__input_type_profile-name");
const inputCardTitle = cardForm.querySelector(
  ".form__input_type_profile-title"
);
// ────────────────────────────────────────────────────────────────────────────

const postcardForm = document.querySelector(".popup__form_type_add-postcard");

const addPostcardModal = document.querySelector(".popup_type_add-postcard");
const imageExModal = document.querySelector(".popup_type_image-ex");
// ────────────────────────────────────────────────────────────────────────────

// Postcards and Their Element:
const postcards = document.querySelector(".postcards");
const postcardsList = postcards.querySelector(".postcards__list");
const templatePostcardSelector = "#postcard-template";
// ────────────────────────────────────────────────────────────────────────────
// Avatar
const avatar = document.querySelector(".profile__image-overlay");
const updateAvatarForm = document.querySelector(
  ".popup__form_type_avatar-update"
);

// ────────────────────────────────────────────────────────────────────────────
// Connecting to Practicum's Api
const baseUrl = "https://around.nomoreparties.co/v1/cohort-3-en";
const headers = {
  authorization: "7206ed33-5b05-44a8-9280-ab5ebd7021d1",
  "Content-Type": "application/json",
};

// ────────────────────────────────────────────────────────────────────────────

export {
  config,
  profileForm,
  profile,
  profileName,
  profileDescription,
  editProfileButton,
  addPostcardButton,
  inputCardName,
  inputCardTitle,
  postcardForm,
  addPostcardModal,
  imageExModal,
  postcardsList,
  templatePostcardSelector,
  avatar,
  updateAvatarForm,
  baseUrl,
  headers,
};
