import Popup from "./Popup.js";

// ────────── Popup Image Class ─────────────────────────────────────────
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(".popup__image");
    this._popupCaption = this._popup.querySelector(".popup__caption");
  }
  // ────────────────────────────────────────────────────────────────────

  // ────────── Popup Image Data ────────────────────────────────────────
  open(link, name) {
    this._popupImage.src = link;
    this._popupImage.alt = `A colorful and magnificent view of ${name}`;
    this._popupCaption.textContent = name;
    super.open();
  }
  // ────────────────────────────────────────────────────────────────────
}
