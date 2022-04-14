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

const cardTemplate = document.querySelector("#postcard-template");

/// Adding function for the postcards and their components ///
function generateCards(postcards) {
  postcards.forEach((postcard) => {
    generateCard(postcard);
  });
}

function generateCard(postcard) {
  const cardElement = cardTemplate.content
    .querySelector(".postcard")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".postcard__image");
  cardImage.src = postcard.link;
  cardImage.alt = `A colorful and magnificent view of ${postcard.name}`;
  cardElement.querySelector(".postcard__title").textContent = postcard.name;
  postcardsList.append(cardElement);

  /// Adding funcionality for the remove button ///
  cardElement
    .querySelector(".postcard__remove-button")
    .addEventListener("click", () => {
      const removeButton = cardElement.closest(".postcard");
      removeButton.remove();
    });

  /// Adding functionality for the like button ///
  cardElement
    .querySelector(".postcard__like-button")
    .addEventListener("click", (evt) => {
      evt.target.classList.toggle("postcard__like-button_active");
    });

  return cardElement;
}

generateCards(totalPostcards);

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

/// Adding the Event Listeners ///
editProfileButton.addEventListener("click", openForm);
// saveButton.addEventListener("click", closeForm);
closeButton.addEventListener("click", closeForm);
form.addEventListener("submit", replaceProfileInfo);
