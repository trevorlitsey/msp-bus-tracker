export const getAuthToken = () => window.localStorage.getItem('authToken');

export const setAuthToken = authToken =>
  window.localStorage.setItem('authToken', authToken);

export const removeAuthToken = authToken =>
  window.localStorage.removeItem('authToken');

export const getIsLoggedIn = () => !!getAuthToken();
