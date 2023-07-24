import axios from 'axios';

const api = axios.create({
  withCredentials: true,
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default api;
