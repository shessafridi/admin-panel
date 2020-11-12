import { AuthProvider } from 'react-admin';
import authService from '../../services/authService';

const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    return await authService.login(username, password);
  },
  logout: params => {
    authService.logout();
    return Promise.resolve();
  },
  checkAuth: params => {
    if (authService.isLoggedIn()) return Promise.resolve();
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
