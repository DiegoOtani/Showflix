const express = require('express');
const cors = require('cors');
require("dotenv").config();

const userRoutes = require('../routes/Users');
const genreRoutes = require('../routes/Genres');
const tvShowRoutes = require('../routes/TvShows');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors({
  origin: '*',
}));

app.use('/users', userRoutes);
app.use('/genres', genreRoutes);
app.use('/tvshows', tvShowRoutes);

module.exports = app;