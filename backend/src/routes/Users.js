const router = require('express').Router();
const { createUser, userLogin } = require('../controllers/Users');
const validateLogin = require('../middlewares/validateLogin');
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5,
  message: 'Muitas tentativas de login. Tente novamente mais tarde.'
});

router.post('/', createUser);
router.post('/login', loginLimiter, validateLogin , userLogin);

module.exports = router;