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
        if (error.response) {
          return { message: error.response.data.message || "Erro desconhecido" };
        } else {
          return { message: "Erro de rede ou servidor" };
        }
      } else {
        console.error('Erro inesperado:', error);
        return { message: "Erro inesperado no servidor" };
      }
    }
  };
};

export default LoginService;