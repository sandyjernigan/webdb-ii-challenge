const express = require('express');
const knex = require('knex');

const db = require('../data/dbConfig.js');

const router = express.Router();

// Write a set of endpoints to support CREATE and READ operations on the cars resource.
// The critical information for each car is the VIN, make, model, and mileage.
// They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

router.get('/', (req, res) => {
  db('cars')
  .then(cars => {
    res.json(cars); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve cars' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars').where({ id }).first()
  .then(results => {
    res.json(results);
  }) 
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve the car by id' });
  });
});

router.post('/', (req, res) => {
  const results = req.body;
  db('cars').insert(results)
  .then(ids => {
    db('cars').where({ id: ids[0] })
    .then(newEntry => {
      res.status(201).json(newEntry);
    });
  })
  .catch (err => {
    console.log('POST error', err);
    res.status(500).json({ message: "Failed to store data" });
  });
});

// Add UPDATE and DELETE operations to your API

module.exports = router;