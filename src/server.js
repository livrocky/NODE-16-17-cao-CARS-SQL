const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const mysql = require('mysql2/promise');
const { PORT } = require('./config');
const carsRoutes = require('./routes/carsRotues');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => res.json('wassup'));

app.use('/api', carsRoutes);

app.listen(PORT, () => console.log('express is ONLINE', PORT));
