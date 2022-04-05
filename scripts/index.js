/// Calling the elements that are needed ///
const profile = document.querySelector(".profile");
const form = document.querySelector(".form");
const saveButton = form.querySelector(".form__button");

const editProfileButton = profile.querySelector(".profile__edit-button");
const profileName = profile.querySelector(".profile__name");
const profileDescription = profile.querySelector(".profile__description");

const inputName = form.querySelector(".form__input[name='name']");
const inputTitle = form.querySelector(".form__input[name='title']");

const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__close-button");

/// Calling these to make the like buttons on postcards functional ///
const postcards = document.querySelector(".postcards");
const likeButtons = postcards.querySelectorAll(".postcard__like-button");

/// Functions ///
function openForm() {
  inputName.value = profileName.textContent;
  inputTitle.value = profileDescription.textContent;
  popup.classList.add("popup_receptive");
}

function closeForm() {
  popup.classList.remove("popup_receptive");
}

function replaceProfileInfo(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputTitle.value;
  popup.classList.remove("popup_receptive");
}

/// Making the like buttons functional by adding loop ///
// for (let i = 0; i < likeButtons.length; i++) {
//   let likeButton = likeButtons[i];

//   function toggleLike() {
//     likeButton.classList.toggle("postcard__like-button_active");
//   }
//   likeButton.addEventListener("click", toggleLike);
// }

/// Adding the Event Listeners ///
editProfileButton.addEventListener("click", openForm);
// saveButton.addEventListener("click", closeForm);
closeButton.addEventListener("click", closeForm);
form.addEventListener("submit", replaceProfileInfo);
