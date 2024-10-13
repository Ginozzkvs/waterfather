// routes/district.js
const express = require('express');
const db = require('../db/connection');
const router = express.Router();

router.get('/', (req, res) => {
      const provinceId = req.query.province; // Get the province ID from the query parameters
      const query = 'SELECT district_id AS id, district_name AS name FROM district WHERE province_id = ?'; // Use parameterized query to prevent SQL injection
    
      db.query(query, [provinceId], (err, results) => {
        if (err) {
          console.error('Error fetching districts:', err);
          return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
      });
    });
module.exports = router;
