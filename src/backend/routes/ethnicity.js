// routes/ethnicity.js
const express = require('express');
const db = require('../db/connection');
const router = express.Router();

router.get('/', (req, res) => {
  const query = 'SELECT ethnicity_id AS id, ethnicity_name AS name FROM ethnicity';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching ethnicity:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

module.exports = router;
