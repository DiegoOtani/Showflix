import { useState, useEffect } from "react";
import TvShowsService from "../../services/tvshows";
import InputField from "../InputField";
import { Title, FormStyled, TextArea, InputDiv, InputSection, RatingInput, SubmitButtonStyled, FieldsetStyled, GenreCheckbox, GenreLabel, LegendStyled, GenresDiv, ErrorMessage } from "./styles";
import validateTvShowForm from "../../helpers/validation";

const AddShowForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState(0);
  const [genres, setGenres] = useState([]);
  const [availableGenres, setAvailableGenres] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await TvShowsService.getGenres();
        setAvailableGenres(data);
      } catch (error) {
        console.error("Error loading genres:", error);
      }
    };
    loadGenres();
  }, []);

  const handleGenreChange = (e) => {
    const genreName = e.target.value;
    setGenres((prevGenres) =>
      prevGenres.includes(genreName)
        ? prevGenres.filter((name) => name !== genreName)
        : [...prevGenres, genreName]
    );
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrorMessage("");

    const error =(validateTvShowForm(title, description, imgUrl, language, rating, genres)).error;
    if(error) return setErrorMessage(error);

    const newShow = { title, description, img_url: imgUrl, language, rating, genres };
    setTitle("");
    setDescription("");
    setImgUrl("")
    setLanguage("")
    setRating(0)
    setGenres([])
    try {
      const data = await TvShowsService.createTvShow(newShow);
      if(data.error) setErrorMessage(data.error);
    } catch (error) {
      console.error("Error creating Show:", error);
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Title>Add a new TvShow</Title>
      <InputSection>
        <InputDiv>
          <InputField 
            placeholder={"Title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
          <TextArea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputDiv>

        <InputDiv>
          <InputField 
            placeholder="Image URL"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <InputField 
            placeholder="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <span style={{ color: "white" }}>Rating</span>
          <RatingInput
            type="number"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(parseFloat(e.target.value))}
            step="0.1"
            min="0"
            max="10"
          />
        </InputDiv>
      </InputSection>

      <GenresDiv>
        <FieldsetStyled>
          <LegendStyled>Gêneros</LegendStyled>
          {availableGenres.map((genre) => (
            <GenreLabel key={genre.id}>
              <GenreCheckbox
                type="checkbox"
                value={genre.name}
                checked={genres.includes(genre.name)}
                onChange={handleGenreChange}
              />
              {genre.name}
            </GenreLabel>
          ))}
        </FieldsetStyled>
      </GenresDiv>
        
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <SubmitButtonStyled type="submit">
        Adicionar Show
      </SubmitButtonStyled>
    </FormStyled>
  );
};

export default AddShowForm;
