const router = require('express').Router();
const { getUsers, createUser, userLogin } = require('../controllers/Users');

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', userLogin);

module.exports = router;