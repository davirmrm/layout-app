import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_LAYOUT_API?process.env.REACT_LAYOUT_API:'http://localhost:3002/api/'}`
});
api.interceptors.request.use(async (config) => {
  const token = localStorage.tokenLeading360;
  
  if (token)
    config.headers.authorization = `Token ${token}`;

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  
  (err) => Promise.reject(err)
);

export default api;