/* ────────────────────────────────────────────────────────────────────────────
   ------------------------ FORM VALIDATION: ----------------------------------
   ──────────────────────────────────────────────────────────────────────────── */

// ──── DISPLAYING the ERROR MESSAGE For the Necessary INPUTS: ────────────────
const showInputError = (form, input, errorMsg, config) => {
  const { inputErrorClass, errorClass } = config;
  // Finding the error message element
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.add(inputErrorClass);
  errorElement.textContent = errorMsg;
  errorElement.classList.add(errorClass);
};
// ────────────────────────────────────────────────────────────────────────────

// ───── CONCEALING the ERROR MESSAGE For the Necessary INPUTS:────────────────
export const hideInputError = (form, input, config) => {
  const { inputErrorClass, errorClass } = config;
  // Finding the error message element
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.remove(inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(errorClass);
};
// ────────────────────────────────────────────────────────────────────────────

// ────────── CHECKING If the Form Is VALID: ───────────────────────────────────
const checkInputValidity = (form, input, config) => {
  !input.validity.valid
    ? showInputError(form, input, input.validationMessage, config)
    : hideInputError(form, input, config);
};
// ────────────────────────────────────────────────────────────────────────────

// ────── CHECKING If At Least ONE Input Is VALID: ────────────────────────────
const hasValidInput = function (inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};
// ────────────────────────────────────────────────────────────────────────────

// ────────────────── DOMINATING the Button ACTIVITY: ─────────────────────────
const enableSubmitButton = (button, config) => {
  button.disabled = false;
  button.classList.remove(config.inactiveButtonClass);
};

export const disableSubmitButton = (button, config) => {
  button.disabled = true;
  button.classList.add(config.inactiveButtonClass);
};
// ────────────────────────────────────────────────────────────────────────────

// ─────────────── MODIFY the Button Activity: ────────────────────────────────
export const toggleButton = (inputList, button, config) => {
  if (hasValidInput(inputList)) {
    disableSubmitButton(button, config);
  } else {
    enableSubmitButton(button, config);
  }
};
// ────────────────────────────────────────────────────────────────────────────

/* ────────────────────────────────────────────────────────────────────────────
   ---------- Setting EVENT LISTENERS For the Necessary INPUTS: ---------------
   ──────────────────────────────────────────────────────────────────────────── */
const setEventListeners = (form, config) => {
  // Finding all the fields inside the form and making an array from them
  const inputList = [...form.querySelectorAll(config.inputSelector)];
  const button = form.querySelector(config.submitButtonSelector);

  toggleButton(inputList, button, config);

  // Iterating over the resulting array
  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(form, input, config);
      toggleButton(inputList, button, config);
    });
  });
};
// ────────────────────────────────────────────────────────────────────────────

// ────── Looping Inside the FORMS to Run the Necessary FUNCTIONS: ────────────
const enableValidation = (config) => {
  const { formSelector } = config;
  const formList = [...document.querySelectorAll(formSelector)];

  formList.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, config);
  });
};
//─────────────────────────────────────────────────────────────────────────────

// ──────────── After Submitting, the FORM VALIDATION RESETS: ──────────────────
export const resetValidation = (popup) => {
  const { formSelector, inputSelector } = config;
  const form = popup.querySelector(formSelector);
  const inputList = [...form.querySelectorAll(inputSelector)];
  inputList.forEach((input) => {
    hideInputError(form, input, config);
  });
};
//─────────────────────────────────────────────────────────────────────────────

/* ────────────────────────────────────────────────────────────────────────────
   ------- This Object Contains the Necessary Elements: -----------------------
   ──────────────────────────────────────────────────────────────────────────── */

export const config = {
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
};

enableValidation(config);
