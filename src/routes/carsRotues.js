const express = require('express');
const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

const carsRotues = express.Router();
module.exports = carsRotues;

// GET ALL //

carsRotues.get('/cars', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    console.log('connected');
    const sql = 'SELECT * FROM cars';
    const [rows] = await connection.execute(sql);
    res.json(rows);
  } catch (error) {
    console.log('home route error ===', error);
    res.status(500).json('something went wrong');
  } finally {
    // atsijungti
    if (connection) connection.end();
  }
});

// GET by ID//

carsRotues.get('/cars/search/:id', async (req, res) => {
  let connection;
  try {
    const { id } = req.params;
    connection = await mysql.createConnection(dbConfig);
    console.log('connected');
    const sql = 'SELECT * FROM cars WHERE id = ?';
    const [rows] = await connection.execute(sql, [id]);
    res.json(rows);
  } catch (error) {
    console.log('home route error ===', error);
    res.status(500).json('something went wrong');
  } finally {
    await connection?.end();
  }
});

// POST //

carsRotues.post('/cars/post', async (req, res) => {
  let connection;
  try {
    const { id, title, image, price, numberplates } = req.body;
    // eslint-disable-next-line no-shadow
    const connection = await mysql.createConnection(dbConfig);
    const sql = 'INSERT INTO cars (id, title, image, price, numberplates) VALUES (?, ?, ?, ?, ?)';
    const [rows] = await connection.execute(sql, [id, title, image, price, numberplates]);
    console.log('connected');
    res.json(rows);
  } catch (error) {
    // // err gaudom klaidas
    res.status(500).json('error in post cars');
  } finally {
    await connection?.end();
  }
});

// DELETE //

carsRotues.delete('/cars/:carId', async (req, res) => {
  let connection;
  try {
    const { carId } = req.params;
    connection = await mysql.createConnection(dbConfig);
    const sql = 'DELETE FROM cars WHERE `id` = ?';
    const [deleteResult] = await connection.execute(sql, [carId]);
    if (deleteResult.affectedRows !== 1) {
      res.status(400).json({ success: false, error: `item with id ${carId}, was not found` });
      return;
    }
    if (deleteResult.affectedRows === 1) {
      res.json('DELETED');
      return;
    }
    throw new Error('something wrong in deleteResult.affectedRows');
  } catch (error) {
    console.log('error DELETE posts', error);
    res.sendStatus(500);
  } finally {
    await connection?.end();
  }
});
