import axios from "axios";

const baseURL = 'http://localhost:5000';

const createAuthApi = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '',
    },
  });
};

export const authApi = createAuthApi();
