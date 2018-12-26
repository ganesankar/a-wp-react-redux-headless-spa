import axios from 'axios';

import apiConfig from '../config/wpressAPIConfig';

const instance = axios.create({
  // Gets the baseURL corresponding to dev, test and prod from respective environment config files.
  baseURL: process.env.REACT_APP_WPRESS_API_BASE_URL,
  timeout: process.env.REACT_APP_WPRESS_API_TIMEOUT,
  headers: apiConfig().DEFAULT_HEADERS
});

export default instance;

