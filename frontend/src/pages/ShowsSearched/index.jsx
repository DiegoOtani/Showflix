import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import TvShowsService from "../../services/tvshows";
import { ShowsContext } from "../../contexts/TvShowsContext";
import { ShowsSectionStyled } from "./styles";
import Shows from "../../components/Shows";

const ShowsSearchedPage = () => {
  const { showName } = useParams();
  const { shows, setShows } = useContext(ShowsContext);

  useEffect(() => {
    try {
      const loadSearchedShows = async() => {
        const data = await TvShowsService.getTvShowsBySearch(showName);
        setShows(data);
      }
      loadSearchedShows();
    } catch (error) {
      console.error(error);
      setShows([]);
    }
  }, [showName])

  return (
    <ShowsSectionStyled>
      <Shows shows={shows}/>
    </ShowsSectionStyled>
  )
}

export default ShowsSearchedPage