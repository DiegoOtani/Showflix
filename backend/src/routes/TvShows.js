const router = require('express').Router();
const { getTvShows, createTvShow, getShowByName } = require('../controllers/TvShows');
const { authMiddleware } = require('../middlewares/Auth');

router.get('/', getTvShows);
router.post('/', authMiddleware, createTvShow);
router.get('/:name', authMiddleware, getShowByName);

module.exports = router;