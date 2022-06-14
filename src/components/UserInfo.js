// ──────── User Info Class ────────────────────────────────────────────
export default class UserInfo {
  constructor({ userName, userJob }) {
    this._userNameSelector = userName;
    this._userJobSelector = userJob;
  }
  // ───────────────────────────────────────────────────────────────────

  // ───── Returns an Object with User Info ────────────────────────────
  getUserInfo() {
    return {
      userName: this._userNameSelector.textContent,
      userJob: this._userJobSelector.textContent,
    };
  }
  // ───────────────────────────────────────────────────────────────────

  // ────── Adding New User Data to Page ───────────────────────────────
  setUserInfo(data) {
    const { username, userjob } = data;
    this._userNameSelector.textContent = username;
    this._userJobSelector.textContent = userjob;
  }
  // ───────────────────────────────────────────────────────────────────
}
