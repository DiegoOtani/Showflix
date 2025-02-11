import { api } from "./api";
import axios from "axios";

class TvShowsService {
  static async getTvShows() {
    try {
      const response = await api.get('/tvshows'); 
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

  static async getTvShowById(id) {
    try {
      const response = await api.get(`/tvshows/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching types:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      throw error;
    }
  }
  
  static async getTvShowsBySearch(search) {
    try {
      const response = await api.get(`/tvshows/${search}`);
      return response.data.map((item) => item.show);
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

export default TvShowsService;