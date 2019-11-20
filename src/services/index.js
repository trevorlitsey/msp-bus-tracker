import { fetchJSON } from "../utils/fetch";

const buildUrl = pathname => {
  return `https://svc.metrotransit.org/NexTrip${pathname}?format=json`;
};

export const fetchRoutes = () => {
  return fetchJSON(buildUrl("/Routes"));
};

export const fetchDirections = route => {
  return fetchJSON(buildUrl(`/Directions/${route}`));
};

export const fetchStops = (route, direction) => {
  return fetchJSON(buildUrl(`/Stops/${route}/${direction}`));
};

export const fetchDepartures = (route, direction, stop) => {
  return fetchJSON(buildUrl(`/${route}/${direction}/${stop}`));
};
