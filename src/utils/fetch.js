import { FetchError } from "./errors";
import { logger } from "./logger";

export const fetchJSON = (requestURL, method = "GET", body) => {
  const options = {
    method,
    headers: {
      // "Content-Type": "application/json",
      // Accept: "application/json"
    }
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(requestURL, options).then(async res => {
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
