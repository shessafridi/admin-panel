import { fetchUtils } from 'ra-core';
import { authUrl } from '../config';
import { AuthRequest } from '../models/AuthRequest';
import jwt_decode from 'jwt-decode';

class AuthService {
  login = async (username: string, password: string) => {
    const response = await fetchUtils.fetchJson(authUrl, {
      method: 'POST',
      body: JSON.stringify(new AuthRequest(username, password)),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    if (
      response.status < 200 ||
      response.status >= 300 ||
      !response.json.Successful
    ) {
      throw new Error(`${response.status}`);
    }
    const user = response.json.Response;
    localStorage.setItem('auth', user.access_token);
  };

  logout = () => localStorage.removeItem('auth');

  isLoggedIn = () => {
    try {
      const decoded: any = jwt_decode(this.getToken()!);
      return !!decoded.exp;
    } catch {
      return false;
    }
  };

  getToken = () => localStorage.getItem('auth');
}
export default new AuthService();
