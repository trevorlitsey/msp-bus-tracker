import { fetchJSON } from '../utils/fetch';

export const fetchRoutes = () => {
  return fetchJSON.get('/metro-transit/routes');
};

export const fetchDirections = route => {
  return fetchJSON.get(`/metro-transit/directions/${route}`);
};

export const fetchStops = (route, direction) => {
  return fetchJSON.get(`/metro-transit/stops/${route}/${direction}`);
};

export const fetchDepartures = (route, direction, stop) => {
  return fetchJSON.get(
    `/metro-transit/departures/${route}/${direction}/${stop}`
  );
};

export const createUser = (email, password) => {
  return fetchJSON.post('/auth/create-user', { email, password });
};

export const authenticateUser = (email, password) => {
  return fetchJSON.post('/auth/authenticate', { email, password });
};
