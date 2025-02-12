import { api } from "./api";
import axios from "axios";

class LoginService {
  static async login(email, password) {
    try {
      const response = await api.post('/users/login', {
        email, 
        password
      }); 
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching types:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      throw error;
    }
  };
};

export default LoginService;