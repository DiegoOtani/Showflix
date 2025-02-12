const router = require('express').Router();
const { createUser, userLogin } = require('../controllers/Users');

router.post('/', createUser);
router.post('/login', userLogin);

module.exports = router;