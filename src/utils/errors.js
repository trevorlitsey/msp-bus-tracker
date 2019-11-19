export class FetchError extends Error {
  constructor(response, json) {
    super();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchError);
    }
    this.response = response;
    this.responseJSON = json;
  }
}
