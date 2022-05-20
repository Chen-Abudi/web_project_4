/* ────────────────────────────────────────────────────────────────────────────
   ------------------------ FORM VALIDATION Class: ----------------------------
   ──────────────────────────────────────────────────────────────────────────── */
class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;

    this._button = this._form.querySelector(this._config.submitButtonSelector);
  }

  // ──── DISPLAYING the ERROR MESSAGE For the Necessary INPUTS: ────────────────
  _showInputError(input) {
    const { inputErrorClass, errorClass } = this._config;
    const errorMsg = input.validationMessage;
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.add(inputErrorClass);
    errorElement.textContent = errorMsg;
    errorElement.classList.add(errorClass);
  }
  // ────────────────────────────────────────────────────────────────────────────

  // ───── CONCEALING the ERROR MESSAGE For the Necessary INPUTS:────────────────
  _hideInputError(input) {
    const { inputErrorClass, errorClass } = this._config;
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(errorClass);
  }
  // ────────────────────────────────────────────────────────────────────────────

  // ────────── CHECKING If the Form Is VALID: ───────────────────────────────────
  _checkInputValidity(input) {
    !input.validity.valid
      ? this._showInputError(input)
      : this._hideInputError(input);
  }
  // ────────────────────────────────────────────────────────────────────────────

  // ────── CHECKING If At Least ONE Input Is VALID: ────────────────────────────
  _hasValidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }
  // ────────────────────────────────────────────────────────────────────────────

  // ────────────────── DOMINATING the Button ACTIVITY: ─────────────────────────
  _enableSubmitButton() {
    const { inactiveButtonClass } = this._config;
    this._button.disabled = false;
    this._button.classList.remove(inactiveButtonClass);
  }

  _disableSubmitButton() {
    const { inactiveButtonClass } = this._config;
    this._button.disabled = true;
    this._button.classList.add(inactiveButtonClass);
  }
  // ────────────────────────────────────────────────────────────────────────────

  // ─────────────── MODIFY the Button Activity: ────────────────────────────────
  _toggleButton = () => {
    const { inactiveButtonClass, submitButtonSelector } = this._config;
    this._submitButton = this._form.querySelector(submitButtonSelector);

    if (this._hasValidInput()) {
      this._disableSubmitButton(this._submitbutton, inactiveButtonClass);
    } else {
      this._enableSubmitButton(this._submitbutton, inactiveButtonClass);
    }
  };
  // ────────────────────────────────────────────────────────────────────────────

  /* ────────────────────────────────────────────────────────────────────────────
     ---------- Setting EVENT LISTENERS For the Necessary INPUTS: ---------------
     ──────────────────────────────────────────────────────────────────────────── */
  _setEventListeners = () => {
    const { inputSelector } = this._config;
    this._inputList = [...this._form.querySelectorAll(inputSelector)];

    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input, this._config);
        this._toggleButton();
      });
    });
  };
  // ────────────────────────────────────────────────────────────────────────────

  // ──────────── After Submitting, the FORM VALIDATION RESETS: ─────────────────
  resetValidation() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
    this._toggleButton();
  }
  // ────────────────────────────────────────────────────────────────────────────

  // ──────────────────── Enables Form Validation: ──────────────────────────────
  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._toggleButton();
    });

    this._setEventListeners();
  }
  // ────────────────────────────────────────────────────────────────────────────
}

export default FormValidator;
