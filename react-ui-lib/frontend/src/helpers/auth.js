export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(token) {
  localStorage.setItem("token", token);
}

export function clearToken() {
  localStorage.removeItem("token");
}

export function parseJWT(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  } catch {
    return null;
  }
}

export function getUserData() {
  const token = getToken();
  return token ? parseJWT(token) : null;
}

export function isTokenExpired() {
  const user = getUserData();
  return !user?.exp || user.exp * 1000 < Date.now();
}
