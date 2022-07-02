import Popup from "./Popup.js";

// ────── Popup For Remove Postcard Classs ────────────────────────────
export default class PopupRemoveImage extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = document.querySelector(
      ".form__button_type_remove-postcard"
    );
    this._submitButtonText = this._submitButton.textContent;
    this._setEventListenersSubmit();
  }

  close() {
    super.close();
    this._renderLoadingStatus(false);
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  _renderLoadingStatus(isItLoading) {
    if (isItLoading) {
      this._submitButton.textContent = "Removing...";
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  _setEventListenersSubmit() {
    // super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._renderLoadingStatus(true);

      this._handleFormSubmit();
    });
  }
}
