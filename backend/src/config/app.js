const express = require('express');
const cors = require('cors');
require("dotenv").config();

const userRoutes = require('../routes/Users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors({
  origin: '*',
}));

app.use('/users', userRoutes);

module.exports = app;