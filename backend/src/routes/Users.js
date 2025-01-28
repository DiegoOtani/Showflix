const router = require('express').Router();
const { getUsers } = require('../controllers/Users');

router.get('/', getUsers);

module.exports = router;