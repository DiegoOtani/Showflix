import axios from "axios";

const baseURL = 'http://localhost:5000';

const createApi = () => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  }) ;
};

export const api = createApi();