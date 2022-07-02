import Popup from "./Popup.js";

// ────── Popup For Remove Postcard Classs ────────────────────────────
export default class PopupRemoveImage extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._setEventListenersSubmit();
  }

  close() {
    super.close();
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  _setEventListenersSubmit() {
    // super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }
}
