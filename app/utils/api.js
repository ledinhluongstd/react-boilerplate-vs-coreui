// a library to wrap and simplify api calls
import apisauce from 'apisauce';
import { BASE_URL, REQUEST_TIMEOUT } from './constants';
// import Storage from '../utils/storage'
export default apisauce.create({
  baseURL: BASE_URL,
  headers: {
    token: '', // Storage.getItem('Authorization'),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers':
      'X-Requested-With, content-type, Authorization',
  },
  timeout: REQUEST_TIMEOUT,
});
