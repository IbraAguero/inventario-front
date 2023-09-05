import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://inventario-ministerio-api.onrender.com/api',
  withCredentials: true,
});

export default instance;
