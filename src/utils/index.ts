const TOKEN_KEY = 'jwt';

export const loginToStorage = (email: string): void => {
  localStorage.setItem(email, email);
};

export const logoutOfStorage = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = (): boolean => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }

  return false;
};
