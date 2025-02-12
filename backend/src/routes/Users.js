const router = require('express').Router();
const { createUser, userLogin } = require('../controllers/Users');
const validateLogin = require('../middlewares/validateLogin');

router.post('/', createUser);
router.post('/login', validateLogin , userLogin);

module.exports = router;