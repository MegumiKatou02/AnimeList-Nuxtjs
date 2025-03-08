export const getLocalStorage = (key: string) => {
    if (import.meta.client) {
      return localStorage.getItem(key);
    }
    return null;
  };

export const setLocalStorage = (key: string, value: string) => {
    if (import.meta.client) {
      localStorage.setItem(key, value);
    }
};

export const removeLocalStorage = (key: string) => {
    if (import.meta.client) {
      localStorage.removeItem(key);
    }
  };
  
  