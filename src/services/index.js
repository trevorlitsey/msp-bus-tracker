import { fetchJSON } from '../utils/fetch';

export const fetchRoutes = () => {
  return fetchJSON.get('/routes');
};

export const fetchDirections = route => {
  return fetchJSON.get(`/directions/${route}`);
};

export const fetchStops = (route, direction) => {
  return fetchJSON.get(`/stops/${route}/${direction}`);
};

export const fetchDepartures = (route, direction, stop) => {
  return fetchJSON.get(`departures/${route}/${direction}/${stop}`);
};

export const createUser = (email, password) => {
  return fetchJSON.post('/auth/create-user', { email, password });
};

export const loginUser = (email, password) => {
  return fetchJSON.post('/auth/login', { email, password });
};
