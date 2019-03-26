import { USER_LOGIN_TOKEN } from './constants';

function handleRedirectTo(self, url) {
  if (self.props.history.location.pathname === url) return;
  self.props.history.push(url);
}

function parseJwt(token) {
  if (!token) return 0;
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

function getCookie(cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

function deleteCookie(name, path, domain) {
  if (this.getCookie(name)) this.setCookie(name, '', -1, path, domain);
}

function checkCookie(cookie) {
  const tokenDecode = parseJwt(cookie);
  const now = new Date();
  const checkExpiryDate = now / 1000 <= tokenDecode.exp;
  if (
    isEmpty(cookie) ||
    cookie === null ||
    cookie === undefined ||
    !checkExpiryDate
  ) {
    deleteCookie(USER_LOGIN_TOKEN);
    return false;
  }
  return !!cookie;
}

function isEmpty(obj) {
  if (!obj) return !obj;
  return Object.getOwnPropertyNames(obj).length === 0;
}
function clone(object) {
  return JSON.parse(JSON.stringify(object));
}

function checkValidate() {}

function consoleLog(data) {
  if (process.env.NODE_ENV !== 'production') console.log(data);
}
export {
  handleRedirectTo,
  getCookie,
  setCookie,
  deleteCookie,
  checkCookie,
  isEmpty,
  clone,
  consoleLog,
  checkValidate,
};
