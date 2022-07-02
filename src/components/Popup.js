const popupIsOpenedClass = "popup_receptive";
// ────────── Popup Class ─────────────────────────────────────────────────────
class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(".popup__close-button");
    this._setEventListeners();
  }
  // ────────────────────────────────────────────────────────────────────────────

  // ─────────────── POPUP Windows Closing by Esc Key ────────────────────────────
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
  // ────────────────────────────────────────────────────────────────────────────

  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains("popup")) {
      this.close();
    }
  };
  /* ───────────────────────────────────────────────────────────────────────────
    ----------------- POPUP Windows Functions ----------------------------------
    ------------------ Esc Close Event Listeners: --------------------------------
    ──────────────────────────────────────────────────────────────────────────── */
  open() {
    this._popup.classList.add(popupIsOpenedClass);
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("mousedown", this._handleOverlayClose);
  }

  close() {
    this._popup.classList.remove(popupIsOpenedClass);
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("mousedown", this._handleOverlayClose);
  }
  // ────────────────────────────────────────────────────────────────────────────

  // ──────────── Closing Popup Event Listeners ─────────────────────────────────
  _setEventListeners() {
    this._closeButton.addEventListener("click", () => this.close());
  }
}
export default Popup;
