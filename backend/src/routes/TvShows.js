const router = require('express').Router();
const { getTvShows, createTvShow, getShowByName } = require('../controllers/TvShows');
const { authMiddleware } = require('../middlewares/Auth');
const validateTvShow = require('../middlewares/validateTvShow');

router.get('/', getTvShows);
router.post('/', authMiddleware, validateTvShow, createTvShow);
router.get('/:name', authMiddleware, getShowByName);

module.exports = router;