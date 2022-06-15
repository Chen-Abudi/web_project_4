// ──────── User Info Class ────────────────────────────────────────────
export default class UserInfo {
  constructor({ userNameSelector, userJobSelector }) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
  }
  // ───────────────────────────────────────────────────────────────────

  // ───── Returns an Object with User Info ────────────────────────────
  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userJob: this._userJobElement.textContent,
    };
  }
  // ───────────────────────────────────────────────────────────────────

  // ────── Adding New User Data to Page ───────────────────────────────
  setUserInfo(data) {
    const { username, userjob } = data;
    this._userNameElement.textContent = username;
    this._userJobElement.textContent = userjob;
  }
  // ───────────────────────────────────────────────────────────────────
}
