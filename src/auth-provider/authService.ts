import { fetchUtils } from 'ra-core';
import { authUrl } from '../config';
import { AuthBody } from './../models/AuthBody';

class AuthService {
  currentUser = null;
  login = async (username: string, password: string) => {
    const response = await fetchUtils.fetchJson(authUrl, {
      method: 'POST',
      body: JSON.stringify(new AuthBody(username, password)),
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

    this.currentUser = user;

    return user.access_token;
  };
}
export default new AuthService();
