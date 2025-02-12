import { useEffect } from "react";
import { useContext } from "react";
import { ShowsContext } from "../../contexts/TvShowsContext";
import TvShowsService from "../../services/tvshows";
import Shows from "../../components/Shows";

export const TvShows = () => {
  const { shows, setShows } = useContext(ShowsContext);

  useEffect(() => {
    try {
      const loadShows = async() => {
        const data = await TvShowsService.getTvShows();
        setShows(data)
      }
      loadShows();
    } catch (error) {
      console.error(error);
    }
  }, [])

  useEffect(() => {
    console.log(shows)
  }, [shows])

  return (
    <Shows shows={shows}/>
  )
};