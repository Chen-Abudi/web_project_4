// ────────── Postcard Class ─────────────────────────────────────────────────────
export default class Card {
  constructor({ name, link }, templatePostcardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templatePostcardSelector = templatePostcardSelector;
    this._handleCardClick = handleCardClick;
  }
  // ─────────────────────────────────────────────────────────────────────────────

  // ─────────── Markup Template ────────────────────────────────────────────────
  _getTemplate() {
    const postcardElement = document
      .querySelector(this._templatePostcardSelector)
      .content.querySelector(".postcard")
      .cloneNode(true);

    return postcardElement;
  }
  // ────────────────────────────────────────────────────────────────────────────

  // ────────── Postcard Remove Button Function ─────────────────────────────────
  _handleRemoveButton = () => {
    this._postcardListItem.remove();
    this._removeButton.removeEventListener("click", this._handleRemoveButton);
  };
  // ────────────────────────────────────────────────────────────────────────────

  // ───────── Postcard Like Button Function ────────────────────────────────────
  _handleLikeButton = (evt) => {
    evt.target.classList.toggle("postcard__like-button_active");
  };
  // ────────────────────────────────────────────────────────────────────────────

  // ─────────── Event Listeners for the Necessary functions ────────────────────
  _setEventListeners() {
    this._likeButton.addEventListener("click", this._handleLikeButton);
    this._removeButton.addEventListener("click", this._handleRemoveButton);

    this._img.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
  // ────────────────────────────────────────────────────────────────────────────

  /* ────────────────────────────────────────────────────────────────────────────
     --------- Function For Postcards Populated with Data: ----------------------
     ──────────────────────────────────────────────────────────────────────────── */
  generateCard() {
    this._postcardListItem = this._getTemplate();
    this._title = this._postcardListItem.querySelector(".postcard__title");
    this._img = this._postcardListItem.querySelector(".postcard__image");
    this._likeButton = this._postcardListItem.querySelector(
      ".postcard__like-button"
    );
    this._removeButton = this._postcardListItem.querySelector(
      ".postcard__remove-button"
    );

    this._title.textContent = this._name;
    this._img.src = this._link;
    this._img.alt = `A colorful and magnificent view of ${this._name}`;

    this._setEventListeners();

    return this._postcardListItem;
  }
  // ────────────────────────────────────────────────────────────────────────────
}
