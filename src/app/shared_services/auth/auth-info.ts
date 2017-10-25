import { environment } from '../../../environments/environment';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
  scopes: string;
}



export const AUTH_CONFIG: AuthConfig = {
  clientID: 'sQExcBK00aOc0J7PsjqyUIuejMRyNjI0',
  domain: 'zerovirus23.auth0.com',
  callbackURL: environment.callbackUrl,
  apiUrl: 'http://localhost:8080',
  scopes: "ADMIN VIEWER CONSULTANT OTHER"
};
