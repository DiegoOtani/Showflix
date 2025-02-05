const TvShowService = require('../services/TvShows');
const GenreService = require('../services/Genres');

module.exports.getTvShows = async(req, res) => {
  try {
    const tvShows = await TvShowService.getTvShows();
    return res.status(200).json(tvShows);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error.' });
  }
};

module.exports.createTvShow = async(req, res) => {
  try {
    const { title, description, img_url, language, rating, genres } = req.body;

    const genreIds = await Promise.all(
      genres.map(async genreName => {
        const genre = await GenreService.getGenreByName(genreName);
        return genre.id;
      })
    )

    if(genreIds.length !== genres.length) return res.status(400).json({ message: 'Invalid genre name.' });

    const tvShow = await TvShowService.createTvShow({
      title,
      description,
      img_url,
      language,
      rating: parseFloat(rating),
      genres: {
        connect: genreIds.map(id => ({ id })),
      },
    })

    return res.status(201).json(tvShow);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error.', error: error.message });
  }
};