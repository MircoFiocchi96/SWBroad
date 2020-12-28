import axios from 'axios';
import API_HOST from '../config/api';

const axiosInstance = axios.create({
  baseURL: API_HOST,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
