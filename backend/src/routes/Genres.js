const router = require('express').Router();
const { getGenres } = require('../controllers/Genres');

router.get('/', getGenres);

module.exports = router;