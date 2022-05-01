const express = require('express');
const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

const carsRotues = express.Router();
module.exports = carsRotues;
