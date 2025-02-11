import { useEffect } from "react";
import { useContext } from "react";
import { ShowsContext } from "../../contexts/TvShowsContext";
import TvShowsService from "../../services/tvshows";
import Card from "../../components/Card";
import { ShowsSectionStyled } from "./styles";

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
    <ShowsSectionStyled>
      {shows.map(show => (
        <Card 
          key={show.id}
          id={show.id}
          title={show.title}
          imgUrl={show.img_url}
          language={show.language}
          rating={show.rating}
          selected={false}
          onClick={() => console.log('ok')}
        />
      ))}

    </ShowsSectionStyled>
  )
};