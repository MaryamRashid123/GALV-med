/* 
  Service file that serve all api calling
*/

import axios from 'axios';
import StorageService from '../StorageService'
import { APP_ENVIRONMENT } from '../../constants/AppEnvironmentConstants';

export const apiClient = () => {
  const baseUrl = APP_ENVIRONMENT.config().baseURL;

  const token = StorageService.instance.getAccessToken();

  const defaultOptions = {
    withCredentials: true,
    headers: {
      Authorization: token ? `Bearer ${token || null}` : '',
      'Content-Type': 'application/json'
    }
  };

  return {
    get: (url, options = {}) => (
      axios.get(
        `${baseUrl}${url}`, 
        { ...defaultOptions, ...options }
      )
    ),
    post: (url, data, options = {}) => (
      axios.post(
        `${baseUrl}${url}`, 
        data, 
        { ...defaultOptions, ...options }
      )
    ),
    put: (url, data, options = {}) => (
      axios.put(
        `${baseUrl}${url}`, 
        data, 
        { ...defaultOptions, ...options }
      )
    ),
    delete: (url, data, options = {}) => (
      axios.delete(
        `${baseUrl}${url}`, 
        { ...defaultOptions, ...options, data }
      )
    )
  };
};