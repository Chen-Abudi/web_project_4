// ──────── User Info Class ────────────────────────────────────────────
export default class UserInfo {
  constructor({ userNameSelector, userJobSelector, userAvatarSelector }) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);
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

  getUserId() {
    return this._userId;
  }

  setUserId(userId) {
    this._userId = userId;
  }

  // ───────────────────────────────────────────────────────────────────

  setUserAvatar(avatar) {
    this._userAvatarElement.src = avatar;
  }
  // ───────────────────────────────────────────────────────────────────

  // ────── Adding New User Data to Page ───────────────────────────────
  setUserInfo(username, userjob) {
    // const { username, userjob } = data;
    this._userNameElement.textContent = username;
    this._userJobElement.textContent = userjob;
  }
}
