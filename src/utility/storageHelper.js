const storageHelper = {
  /**
   * Local Storage Methods
   */
  setLocalStorage: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getLocalStorage: (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  removeLocalStorage: (key) => {
    localStorage.removeItem(key);
  },

  /**
   * Session Storage Methods
   */
  setSessionStorage: (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  getSessionStorage: (key) => {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  removeSessionStorage: (key) => {
    sessionStorage.removeItem(key);
  },

  /**
   * Cookie Methods
   */
  setCookie: (name, value, days = 7) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; Secure; SameSite=Strict`;
  },
  getCookie: (name) => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : null;
  },
  removeCookie: (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  },
};

export default storageHelper;
