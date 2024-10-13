// routes/branch.js
const express = require('express');
const db = require('../db/connection');
const router = express.Router();

router.get('/', (req, res) => {
      const query = 'SELECT branch_id AS id, branch_name AS name FROM branch'; // Adjust the query based on your database structure
      
      db.query(query, (err, results) => {
        if (err) {
          console.error('Error fetching provinces:', err);
          return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
      });
    });
module.exports = router;
