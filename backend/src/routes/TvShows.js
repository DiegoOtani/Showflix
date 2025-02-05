const router = require('express').Router();
const { getTvShows, createTvShow } = require('../controllers/TvShows');

router.get('/', getTvShows);
router.post('/', createTvShow);

module.exports = router;