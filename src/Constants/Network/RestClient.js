
import { create } from 'apisauce';
import { BASE_URL, API_VERSION } from './index';


export const RestClient = create({
  baseURL: `${BASE_URL}/${API_VERSION}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: '',
  },
  timeout: 30000,
});
