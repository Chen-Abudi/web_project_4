import Postcard from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openModal, closeModal, imageExModal } from "./utils.js";

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

// Form and Its Components:
const cardForm = document.querySelector(".form");
const saveCardButton = cardForm.querySelector(".form__button");
const inputCardName = cardForm.querySelector(".form__input_type_profile-name");
const inputCardTitle = cardForm.querySelector(
  ".form__input_type_profile-title"
);
// ────────────────────────────────────────────────────────────────────────────

// Profile and Its Elements:
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const profileDescription = profile.querySelector(".profile__description");
// ────────────────────────────────────────────────────────────────────────────

// The Profile Buttons:
const editProfileButton = profile.querySelector(".profile__edit-button");
const addPostcardButton = profile.querySelector(".profile__add-button");
// ────────────────────────────────────────────────────────────────────────────

// Popup and Its Components:
const popupForm = document.querySelector(".popup");
const profileForm = document.querySelector(".popup__form_type_profile");
const postcardForm = document.querySelector(".popup__form_type_add-postcard");

const profileFormValidator = new FormValidator(config, profileForm);
const postcardFormValidator = new FormValidator(config, postcardForm);

profileFormValidator.enableValidation();
postcardFormValidator.enableValidation();

const postcardName = postcardForm.querySelector(
  ".form__input_type_postcard-name"
);

const postcardURL = postcardForm.querySelector(
  ".form__input_type_postcard-url"
);
// ────────────────────────────────────────────────────────────────────────────

// Modals and Their Elements:
const profileModal = document.querySelector(".popup_type_edit-profile");
const addPostcardModal = document.querySelector(".popup_type_add-postcard");
const profileCloseButton = profileModal.querySelector(
  ".popup__close-button_type_profile"
);

const imageExCloseButton = imageExModal.querySelector(
  ".popup__close-button_type_image-ex"
);

const postcardCloseButton = addPostcardModal.querySelector(
  ".popup__close-button_type_postcard"
);
// ────────────────────────────────────────────────────────────────────────────

// Postcards and Their Element:
const postcards = document.querySelector(".postcards");
const postcardsList = postcards.querySelector(".postcards__list");
// ────────────────────────────────────────────────────────────────────────────

/* ────────────────────────────────────────────────────────────────────────────
   ~~~~~~~~~~~~~~~ Adding Initial and Additional POSTCARDS: ~~~~~~~~~~~~~~~~~~~
   ──────────────────────────────────────────────────────────────────────────── */
const allPostcards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
  {
    name: "Lake Tahoe",
    link: "https://images.unsplash.com/photo-1548954042-c23fc6226ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    name: "Burney Falls",
    link: "https://images.unsplash.com/photo-1596919208653-03b878350559?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Big Sur",
    link: "https://images.unsplash.com/photo-1508107222753-0c236c337911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    name: "Alaska",
    link: "https://images.unsplash.com/photo-1605415453948-976261785483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  },
  {
    name: "Oahu",
    link: "https://images.unsplash.com/photo-1626049789315-2d5f1b656454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80",
  },
  {
    name: "Mt Tamalpais",
    link: "https://images.unsplash.com/photo-1609994665089-acac1fd94d19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    name: "Kauai",
    link: "https://images.unsplash.com/photo-1542309174-d33b34ce6ea7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    name: "Golden Gate Bridge",
    link: "https://images.unsplash.com/flagged/photo-1552960738-da563b9f7df3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=727&q=80",
  },
  {
    name: "Blue Ridge Mountains",
    link: "https://images.unsplash.com/photo-1572816703269-bccda14a887b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",
  },
  {
    name: "Great Sand Dunes",
    link: "https://images.unsplash.com/photo-1619408507529-988cc5f45d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Mount Rainier",
    link: "https://images.unsplash.com/photo-1627844718626-4c6b963baac0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    name: "Brooklyn Bridge",
    link: "https://images.unsplash.com/photo-1618516976493-a957b4225462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80",
  },
];

allPostcards.reverse();
// ────────────────────────────────────────────────────────────────────────────

const templatePostcardSelector = "#postcard-template";

function reciteCard(postcard, list) {
  const postcardListItem = new Postcard(postcard, templatePostcardSelector);
  list.prepend(postcardListItem.generateCard(postcard));
}
// Generate Initial and Additional Postcards With the Recite Function:
allPostcards.forEach((postcard) => reciteCard(postcard, postcardsList));
// ────────────────────────────────────────────────────────────────────────────

// Function For Changing the Profile Info:
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputCardName.value;
  profileDescription.textContent = inputCardTitle.value;
  closeModal(profileModal);
}
// ────────────────────────────────────────────────────────────────────────────

// Function For Adding A New Postcard:
function addPostcard(evt) {
  evt.preventDefault();
  reciteCard(
    { name: postcardName.value, link: postcardURL.value },
    postcardsList
  );
  closeModal(addPostcardModal);
  postcardForm.reset();
}
// ────────────────────────────────────────────────────────────────────────────

// ───── Filling Content For the Profile Form ─────
function fillProfileFormZone() {
  inputCardName.value = profileName.textContent;
  inputCardTitle.value = profileDescription.textContent;
}
// ────────────────────────────────────────────────────────────────────────────

/* ────────────────────────────────────────────────────────────────────────────
   ------------------- Adding the Necessary Event Listeners: ------------------
   ──────────────────────────────────────────────────────────────────────────── */
editProfileButton.addEventListener("click", () => {
  openModal(profileModal);
  fillProfileFormZone();

  profileFormValidator.resetValidation();
});

profileCloseButton.addEventListener("click", () => closeModal(profileModal));

addPostcardButton.addEventListener("click", () => {
  postcardFormValidator.resetValidation();
  openModal(addPostcardModal);

  postcardForm.reset();
});

postcardCloseButton.addEventListener("click", () =>
  closeModal(addPostcardModal)
);
imageExCloseButton.addEventListener("click", () => closeModal(imageExModal));

profileForm.addEventListener("submit", (evt) => {
  handleProfileFormSubmit(evt);
  closeModal(profileModal);
});

postcardForm.addEventListener("submit", addPostcard);
