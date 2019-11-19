import { fetchJSON } from '../utils/fetch';

const buildUrl = pathname => {
  return `http://svc.metrotransit.org${pathname}?format=json`;
};

export const fetchRoutes = () => {
  return fetchJSON(buildUrl('/NexTrip/Routes'));
};
