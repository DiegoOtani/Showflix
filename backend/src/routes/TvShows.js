const router = require('express').Router();
const { getTvShows, createTvShow, getShowByName } = require('../controllers/TvShows');

router.get('/', getTvShows);
router.post('/', createTvShow);
router.get('/:name', getShowByName);

module.exports = router;