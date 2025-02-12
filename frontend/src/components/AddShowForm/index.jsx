import { useState, useEffect } from "react";
import TvShowsService from "../../services/tvshows";

const AddShowForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState(0);
  const [genres, setGenres] = useState([]);
  const [availableGenres, setAvailableGenres] = useState([]);

  useEffect(() => {
    try {
      const loadGenres = async() => {
        const data = await TvShowsService.getGenres();
        setAvailableGenres(data);
      }
      loadGenres();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newShow = { title, description, img_url: imgUrl, language, rating, genres };
    
    console.log(newShow);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="URL da imagem"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Idioma"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border p-2 rounded"
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
              value={genre.id}
              checked={genres.includes(genre.id)}
              onChange={(e) => {
                const selectedId = parseInt(e.target.value, 10);
                setGenres((prev) =>
                  prev.includes(selectedId) ? prev.filter((id) => id !== selectedId) : [...prev, selectedId]
                );
              }}
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
