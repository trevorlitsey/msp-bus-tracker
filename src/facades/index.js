const isBrowser = typeof window !== 'undefined';

export const localStorage = isBrowser
  ? window.localStorage
  : {
      getItem: () => {},
      removeItem: () => {},
      setItem: () => {},
    };

export const location = isBrowser ? window.location : {};
