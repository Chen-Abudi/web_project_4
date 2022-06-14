// ────────── Section Class ─────────────────────────────────────────────────────
export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  // ────────────────────────────────────────────────────────────────────────────

  // ─────────────── Recite Each Element on Page ────────────────────────────────
  render() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
  // ────────────────────────────────────────────────────────────────────────────

  // ───── Adding DOM element to Container ──────────────────────────────────────
  addItem(element) {
    this._container.prepend(element);
  }

  setItem(element) {
    this._container.append(element);
  }
  // ────────────────────────────────────────────────────────────────────────────
}
