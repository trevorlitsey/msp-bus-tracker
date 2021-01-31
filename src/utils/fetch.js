import { API } from '../constants';
import { getAuthToken } from './auth';
import { FetchError } from './errors';
import { logger } from './logger';

export const fetchJSON = (requestURL, method = 'GET', body) => {
  const options = {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const authToken = getAuthToken();

  if (authToken) {
    options.headers.Authorization = `Bearer ${authToken}`;
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(API + requestURL, options).then(async res => {
    let json;
    debugger;
    try {
      json = await res.json();
    } catch (e) {
      logger.error(e);
    }

    if (res.ok) {
      return json;
    }

    logger.error(
      `fetchJSON request to ${requestURL} failed with status code ${res.status}`
    );

    throw new FetchError(res, json);
  });
};

fetchJSON.get = (url, body) => fetchJSON(url, 'GET', body);
fetchJSON.post = (url, body) => fetchJSON(url, 'POST', body);
fetchJSON.put = (url, body) => fetchJSON(url, 'PUT', body);
fetchJSON.patch = (url, body) => fetchJSON(url, 'PATCH', body);
fetchJSON.delete = (url, body) => fetchJSON(url, 'DELETE', body);
