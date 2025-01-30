const router = require('express').Router();
const { getUsers, createUser, userLogin } = require('../controllers/Users');
const { authMiddleware } = require('../middlewares/Auth');

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', userLogin);

module.exports = router;