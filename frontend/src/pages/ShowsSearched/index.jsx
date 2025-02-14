import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import TvShowsService from "../../services/tvshows";
import { ShowsContext } from "../../contexts/TvShowsContext";
import { ShowsSectionStyled } from "./styles";
import Shows from "../../components/Shows";
import AuthWrapper from "../../components/AuthWrapper";

const ShowsSearchedPage = () => {
  const { showName } = useParams();
  const { shows, setShows } = useContext(ShowsContext);

  useEffect(() => {
    try {
      const loadSearchedShows = async() => {
        setShows([])
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
    <AuthWrapper>
      <ShowsSectionStyled>
        <Shows shows={shows}/>
      </ShowsSectionStyled>
    </AuthWrapper>
  )
}

export default ShowsSearchedPage