// routes/degree.js
const express = require('express');
const db = require('../db/connection');
const router = express.Router();

router.get('/', (req, res) => {
      const query = 'SELECT degree_id AS id, degree_level AS level FROM degree'; // Adjust the query based on your database structure
    
      db.query(query, (err, results) => {
        if (err) {
          console.error('Error fetching provinces:', err);
          return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
      });
    });
module.exports = router;
