/// Calling form and its components ///
const form = document.querySelector(".form");
const saveButton = form.querySelector(".form__button");
const inputName = form.querySelector(".form__input_type_profile-name");
const inputTitle = form.querySelector(".form__input_type_profile-title");

/// Calling profile and its elements ///
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const profileDescription = profile.querySelector(".profile__description");

/// Calling the profile buttons ///
const editProfileButton = profile.querySelector(".profile__edit-button");
const addPostcardButton = profile.querySelector(".profile__add-button");

/// Calling popup and its components ///
const popup = document.querySelector(".popup");
const profileForm = document.querySelector(".popup__form_type_profile");
const postcardForm = document.querySelector(".popup__form_type_add-postcard");
const postcardName = postcardForm.querySelector(
  ".form__input_type_postcard-name"
);

const postcardURL = postcardForm.querySelector(
  ".form__input_type_postcard-url"
);

/// Adding modals and their elements ///
const profileModal = document.querySelector(".popup_type_edit-profile");
const addPostcardModal = document.querySelector(".popup_type_add-postcard");
const imageExModal = document.querySelector(".popup_type_image-ex");
const profileCloseButton = profileModal.querySelector(
  ".popup__close-button_type_profile"
);

const imageExCloseButton = imageExModal.querySelector(
  ".popup__close-button_type_image_ex"
);

const postcardCloseButton = addPostcardModal.querySelector(
  ".popup__close-button_type_postcard"
);

/// Calling the postcards and their modifier ///
const postcards = document.querySelector(".postcards");
const postcardsList = postcards.querySelector(".postcards__list");

/// Adding initial and additional postcards ///
const totalPostcards = [
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

/// Adding function for the postcards and their components ///
function generateCard(data) {
  const postcardTemplate = document.querySelector("#postcard-template").content;
  const postcardElement = postcardTemplate
    .querySelector(".postcard")
    .cloneNode(true);
  const postcardTitleElement =
    postcardElement.querySelector(".postcard__title");
  postcardTitleElement.textContent = data.name;
  const postcardImage = postcardElement.querySelector(".postcard__image");
  postcardImage.src = data.link;
  postcardImage.alt = `A colorful and magnificent view of ${data.name}`;

  ///// Adding eventListeners for the postcards and their components /////
  postcardImage.addEventListener("click", () => exhibitImage(data));

  /// Adding funcionality with eventListener for the remove button ///
  postcardElement
    .querySelector(".postcard__remove-button")
    .addEventListener("click", () => {
      postcardElement.remove();
    });

  /// Adding functionality with eventListener for the like button ///
  postcardElement
    .querySelector(".postcard__like-button")
    .addEventListener("click", (evt) => {
      evt.target.classList.toggle("postcard__like-button_active");
    });

  return postcardElement;
}

function reciteCard(postcard, list) {
  list.append(generateCard(postcard));
}
/// Generate initial and additional postcards with the recite function  ///
totalPostcards.forEach((postcard) => reciteCard(postcard, postcardsList));

/// Adding functionality for the popup image exhibit ///
function exhibitImage(postcard) {
  const popupImage = imageExModal.querySelector(".popup__image");
  const popupCaption = imageExModal.querySelector(".popup__caption");
  popupImage.src = postcard.link;
  popupImage.alt = `A colorful and magnificent view of ${postcard.name}`;
  popupCaption.textContent = postcard.name;
  openModal(imageExModal);
}

/// Functions for the popup windows ///
function openModal(popup) {
  popup.classList.add("popup_receptive");
}

function closeModal(popup) {
  popup.classList.remove("popup_receptive");
}

/// Function to change the profile info ///
function replaceProfileInfo(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputTitle.value;
  closeModal(profileModal);
}
/// Adding a function if someone wants to add a new postcard ///
function addPostcard(event) {
  event.preventDefault();
  reciteCard(
    { name: postcardName.value, link: postcardURL.value },
    postcardsList
  );
  closeModal(addPostcardModal);
  postcardForm.reset();
}

function fillProfileFormZone() {
  inputName.value = profileName.textContent;
  inputTitle.value = profileDescription.textContent;
}

/// Adding the Event Listeners ///
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
