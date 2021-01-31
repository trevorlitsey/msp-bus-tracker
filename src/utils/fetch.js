import { API } from '../constants';
import { getAuthToken } from './auth';
import { FetchError } from './errors';
import { logger } from './logger';

export const fetchJSON = (requestURL, method = 'GET', body) => {
  const options = {
    method,
    headers: {},
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

fetchJSON.get = body => fetchJSON('GET', body);
fetchJSON.post = body => fetchJSON('POST', body);
fetchJSON.put = body => fetchJSON('PUT', body);
fetchJSON.patch = body => fetchJSON('PATCH', body);
fetchJSON.delete = body => fetchJSON('DELETE', body);
