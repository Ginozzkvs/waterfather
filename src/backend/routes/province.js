// routes/province.js
const express = require('express');
const db = require('../db/connection');
const router = express.Router();

router.get('/', (req, res) => {
      const query = 'SELECT province_id AS id, province_name AS name FROM province'; // Adjust the query based on your database structure
      
      db.query(query, (err, results) => {
        if (err) {
          console.error('Error fetching provinces:', err);
          return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
      });
    });
module.exports = router;
