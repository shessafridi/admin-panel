import { AuthProvider } from 'react-admin';
import authService from '../../services/authService';

const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    return authService.login(username, password).then(auth => {
      localStorage.setItem('auth', auth);
    });
  },
  logout: params => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  checkAuth: params => {
    if (!!localStorage.getItem('auth')) return Promise.resolve();
    return Promise.reject();
  },
  checkError: params => {
    return Promise.resolve();
  },
  getPermissions: params => {
    return Promise.resolve();
  },
};

export default authProvider;
