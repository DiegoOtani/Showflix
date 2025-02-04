const GenresService = require('../services/Genres');

module.exports.getGenres = async(req, res) => {
  try {
    const genres = await GenresService.getGenres();

    return res.status(200).json(genres);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error.' });
  }
}