// ────────── Popup Class ─────────────────────────────────────────────────────
class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(".popup__close-button");
    this._isReceptive = "popup_receptive";
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
    this._popup.classList.add(this._isReceptive);
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("click", this._handleOverlayClose);
  }

  close() {
    this._popup.classList.remove(this._isReceptive);
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("click", this._handleOverlayClose);
  }
  // ────────────────────────────────────────────────────────────────────────────

  // ──────────── Closing Popup Event Listeners ─────────────────────────────────
  setEventListeners() {
    this._closeButton.addEventListener("click", () => this.close());
  }
}
export default Popup;
