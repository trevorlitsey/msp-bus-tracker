export const getAuthToken = () => window.localStorage.getItem('authToken');

export const setAuthToken = authToken =>
  window.localStorage.setItem('authToken', authToken);
