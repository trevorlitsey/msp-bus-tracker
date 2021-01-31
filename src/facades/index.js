export const localStorage =
  typeof window === 'undefined'
    ? {
        getItem: () => {},
        setItem: () => {},
      }
    : localStorage;
