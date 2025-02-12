// src/validators/tvshow.js
const { body, validationResult } = require('express-validator');

const validateTvShow = [
  body('title')
    .notEmpty().withMessage('O título é obrigatório') 
    .trim()
    .escape(),

  body('description')
    .notEmpty().withMessage('A descrição é obrigatória') 
    .trim()
    .escape(),
  body('rating')
    .isFloat({ min: 0, max: 10 }).withMessage('A avaliação deve ser um número entre 0 e 10'),

  body('language')
    .isLength({ min: 2 }).withMessage('O idioma deve ter pelo menos 2 caracteres')
    .trim()
    .escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateTvShow;
