const redisClient = require('../config/redisClient');
const GenresService = require('../services/Genres');

module.exports.getGenres = async(req, res) => {
  try {
    const cacheKey = 'genres';
    
    const cachedTvShows = await redisClient.get(cacheKey);
    if (cachedTvShows) {
      console.log('Retornando do cache');
      return res.status(200).json(JSON.parse(cachedTvShows));
    }

    const genres = await GenresService.getGenres();

    await redisClient.set(cacheKey, JSON.stringify(genres), 'EX', 600);

    return res.status(200).json(genres);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error.' });
  }
}