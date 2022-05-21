/* ────────────────────────────────────────────────────────────────────────────
   --- FUNCTIONS for the POPUP Windows and EVENT LISTENERS --------------------
   ----- For Closing With the ESCAPE Key or From Overlay: ---------------------
   ──────────────────────────────────────────────────────────────────────────── */
export function openModal(popup) {
  popup.classList.add("popup_receptive");
  popup.addEventListener("mousedown", closeFromOverlay);
  window.addEventListener("keydown", handleCloseByEscape);
}

export function closeModal(popup) {
  popup.classList.remove("popup_receptive");
  popup.removeEventListener("mousedown", closeFromOverlay);
  window.removeEventListener("keydown", handleCloseByEscape);
}
// ────────────────────────────────────────────────────────────────────────────

// ────── CLOSING the POPUP Windows From OVERLAY ──────────────────────────────
const closeFromOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    const openedModal = document.querySelector(".popup_receptive");
    closeModal(openedModal);
  }
};
// ────────────────────────────────────────────────────────────────────────────

// ─────────────── The ESCAPE Key Closing the POPUP Windows ───────────────────
const handleCloseByEscape = (evt) => {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".popup_receptive");
    closeModal(openedModal);
  }
};
// ────────────────────────────────────────────────────────────────────────────
