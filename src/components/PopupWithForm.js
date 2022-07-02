import Popup from "./Popup.js";

// ────────── Popup With Form Class ──────────────────────────────────────────────
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = [...this._form.querySelectorAll(".form__input")];
    this._submitButton = this._form.querySelector(".form__button");
    this._submitButtonText = this._submitButton.textContent;

    this._setEventListenersSubmit();
  }
  // ─────────────────────────────────────────────────────────────────────────────

  // ────── Resets Form once the Popup is Closed ──────────────────────────────────
  close() {
    super.close();
    this._form.reset();
  }
  // ─────────────────────────────────────────────────────────────────────────────

  // ────── Collects DATA from Input Fields and Returns it as an Object ──────────
  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
  // ─────────────────────────────────────────────────────────────────────────────

  renderLoadingStatus(isItLoading, loadText = "Saving...") {
    if (isItLoading) {
      this._submitButton.textContent = loadText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  /* ───── Event Listeners with ──────────────────────────────────────────────────
     ───── Form Event Handler and Close icon Event Listener ────────────────────── */
  _setEventListenersSubmit() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
  // ─────────────────────────────────────────────────────────────────────────────
}
