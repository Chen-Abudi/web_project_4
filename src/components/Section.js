// ────────── Section Class ─────────────────────────────────────────────────────
export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  // ────────────────────────────────────────────────────────────────────────────

  // ─────────────── Recite Each Element on Page ────────────────────────────────
  render(data) {
    data.forEach((item) => {
      this._renderer(item);
    });
  }
  // ────────────────────────────────────────────────────────────────────────────

  // ───── Adding DOM element to Container ──────────────────────────────────────
  addItem(element) {
    this._container.prepend(element);
  }

  appendItem(element) {
    this._container.append(element);
  }
  // ────────────────────────────────────────────────────────────────────────────
}
