const router = require('express').Router();
const { createUser, userLogin } = require('../controllers/Users');
const { authMiddleware } = require('../middlewares/Auth');

router.post('/', createUser);
router.post('/login', userLogin);

module.exports = router;