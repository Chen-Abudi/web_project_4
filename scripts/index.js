import { config, toggleButton, errorHiddenOnClose } from "./validate.js";

// Form and Its Components:
const cardForm = document.querySelector(".form");
const saveButton = cardForm.querySelector(".form__button");
const inputName = cardForm.querySelector(".form__input_type_profile-name");
const inputTitle = cardForm.querySelector(".form__input_type_profile-title");
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
const imageExModal = document.querySelector(".popup_type_image-ex");
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

// ────────────────────────────────────────────────────────────────────────────
// ~~~~~~~~~~~~~~~ Adding Initial and Additional POSTCARDS: ~~~~~~~~~~~~~~~~~~~
// ────────────────────────────────────────────────────────────────────────────
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

// ────────────────────────────────────────────────────────────────────────────
// --------- Adding Function For Postcards and Its Components: ------------
// ────────────────────────────────────────────────────────────────────────────
const postcardTemplate = document.querySelector("#postcard-template").content;

function generateCard(data) {
  const postcardElement = postcardTemplate
    .querySelector(".postcard")
    .cloneNode(true);
  const postcardTitleElement =
    postcardElement.querySelector(".postcard__title");
  postcardTitleElement.textContent = data.name;
  const postcardImage = postcardElement.querySelector(".postcard__image");
  postcardImage.src = data.link;
  postcardImage.alt = `A colorful and magnificent view of ${data.name}`;

  // EventListeners For Postcards and Their Components:
  postcardImage.addEventListener("click", () => exhibitImage(data));

  // Funcionality with EventListener For the Remove Button:
  const postcardRemoveButton = postcardElement.querySelector(
    ".postcard__remove-button"
  );
  postcardRemoveButton.addEventListener("click", () => {
    postcardElement.remove();
  });

  // Functionality with EventListener For the Like Button:
  postcardElement
    .querySelector(".postcard__like-button")
    .addEventListener("click", (evt) => {
      evt.target.classList.toggle("postcard__like-button_active");
    });

  return postcardElement;
}
// ────────────────────────────────────────────────────────────────────────────

function reciteCard(postcard, list) {
  list.prepend(generateCard(postcard));
}
// Generate Initial and Additional Postcards With the Recite Function:
allPostcards.forEach((postcard) => reciteCard(postcard, postcardsList));
// ────────────────────────────────────────────────────────────────────────────

function notExhibitModal(popup) {
  return !popup.classList.contains("popup_type_image-ex") ? true : false;
}

function examineAddAndEditModals(popup) {
  if (notExhibitModal(popup)) {
    const { inputSelector, submitButtonSelector } = config;
    const inputList = [...popup.querySelectorAll(inputSelector)];
    const button = popup.querySelector(submitButtonSelector);

    toggleButton(inputList, button, config);
  }
}

// ────────────────────────────────────────────────────────────────────────────

// ───────── Functionality For the Popup Image Exhibit: ─────────
function exhibitImage(postcard) {
  const popupImage = imageExModal.querySelector(".popup__image");
  const popupCaption = imageExModal.querySelector(".popup__caption");
  popupImage.src = postcard.link;
  popupImage.alt = `A colorful and magnificent view of ${postcard.name}`;
  popupCaption.textContent = postcard.name;
  openModal(imageExModal);
}
// ────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────
// --- FUNCTIONS for the POPUP Windows and EVENT LISTENERS --------------------
// ------------ For Closing With the ESCAPE Key: ------------------------------
// ────────────────────────────────────────────────────────────────────────────
function openModal(popup) {
  popup.classList.add("popup_receptive");
  popup.addEventListener("mousedown", closeFromOverlay);
  window.addEventListener("keydown", escapeClosePopup);

  // Inputs will be checked after they'll be populated
  examineAddAndEditModals(popup);
}

function closeModal(popup) {
  popup.classList.remove("popup_receptive");
  popup.removeEventListener("mousedown", closeFromOverlay);
  window.removeEventListener("keydown", escapeClosePopup);

  notExhibitModal(popup) && errorHiddenOnClose(popup);
}
// ────────────────────────────────────────────────────────────────────────────

// ────── CLOSING the POPUP Windows From the OVERLAY ────────────────
const closeFromOverlay = (evt) => {
  const openedModal = document.querySelector(".popup_receptive");
  evt.target === evt.currentTarget ? closeModal(openedModal) : false;
};

// ────────────────────────────────────────────────────────────────────────────

// ─────────────── The ESCAPE Key Closing the POPUP Windows ──────────────────
const escapeClosePopup = (evt) => {
  const openedModal = document.querySelector(".popup_receptive");
  evt.key === "Escape" ? closeModal(openedModal) : false;
};

// ────────────────────────────────────────────────────────────────────────────

// Function For Changing the Profile Info:
function replaceProfileInfo(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputTitle.value;
  closeModal(profileModal);
}

// ────────────────────────────────────────────────────────────────────────────

// Function For Adding A New Postcard:
function addPostcard(event) {
  event.preventDefault();
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
  inputName.value = profileName.textContent;
  inputTitle.value = profileDescription.textContent;
}

// ────────────────────────────────────────────────────────────────────────────
// ------------------- Adding the Necessary Event Listeners: ------------------
// ────────────────────────────────────────────────────────────────────────────

editProfileButton.addEventListener("click", () => {
  fillProfileFormZone();
  openModal(profileModal);
});

profileCloseButton.addEventListener("click", () => closeModal(profileModal));

addPostcardButton.addEventListener("click", () => openModal(addPostcardModal));
postcardCloseButton.addEventListener("click", () =>
  closeModal(addPostcardModal)
);
imageExCloseButton.addEventListener("click", () => closeModal(imageExModal));

profileForm.addEventListener("submit", replaceProfileInfo);
postcardForm.addEventListener("submit", addPostcard);
