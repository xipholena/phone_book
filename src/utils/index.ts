const TOKEN_KEY = 'current user';

export const loginToStorage = (): void => {
  localStorage.setItem(TOKEN_KEY, 'some email');
};

export const logoutOfStorage = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isInStorage = (): boolean => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
};
