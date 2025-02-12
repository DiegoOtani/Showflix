import { useState, useEffect } from "react";
import TvShowsService from "../../services/tvshows";
import InputField from "../InputField";

const AddShowForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState(0);
  const [genres, setGenres] = useState([]);
  const [availableGenres, setAvailableGenres] = useState([]);

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
    const newShow = { title, description, img_url: imgUrl, language, rating, genres };
    console.log(newShow)
    try {
      const data = await TvShowsService.createTvShow(newShow);
      console.log(data)
    } catch (error) {
      console.error("Error creating Show:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg">
      <InputField 
        placeholder={"Title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
        
      />
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
      <input
        type="number"
        placeholder="Nota"
        value={rating}
        onChange={(e) => setRating(parseFloat(e.target.value))}
        step="0.1"
        min="0"
        max="10"
        className="border p-2 rounded"
      />
      <fieldset className="border p-2 rounded">
        <legend>Gêneros</legend>
        {availableGenres.map((genre) => (
          <label key={genre.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={genre.name}
              checked={genres.includes(genre.name)}
              onChange={handleGenreChange}
            />
            {genre.name}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Adicionar Show
      </button>
    </form>
  );
};

export default AddShowForm;
