// server.js
const express = require('express');
const cors = require('cors');
const db = require('./db/connection'); // Import MySQL connection
const ethnicityRoute = require('./routes/ethnicity'); // Import routes
const gradeRoute = require('./routes/grade');
const departmentRoute = require('./routes/department');
const majorcategoryRoute = require('./routes/majorcategory');
const degreeRoute = require('./routes/degree');
const trainingcenterRoute = require('./routes/trainingcenter');
const projectRoute = require('./routes/project');
const factoryRoute = require('./routes/factory');
const branchRoute = require('./routes/branch');
const positionRoute = require('./routes/position');
const provinceRoute = require('./routes/province');
const districtRoute = require('./routes/district');
const employeeRoute = require('./routes/employee');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/ethnicity', ethnicityRoute);
app.use('/grade', gradeRoute);
app.use('/department', departmentRoute);
app.use('/majorcategory', majorcategoryRoute);
app.use('/degree', degreeRoute);
app.use('/trainingcenter', trainingcenterRoute);
app.use('/project', projectRoute);
app.use('/factory', factoryRoute);
app.use('/branch', branchRoute);
app.use('/position', positionRoute);
app.use('/province', provinceRoute);
app.use('/district', districtRoute);
app.use('/employee', employeeRoute);

// Start server

// app.get('/ethnicity', (req, res) => {
//   const query = 'SELECT ethnicity_id AS id, ethnicity_name AS name FROM ethnicity'; // Adjust the query based on your database structure

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching provinces:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }
//     res.json(results);
//   });
// });


// // Api end point to get major_category
// app.get('/majorcategory', (req, res) => {
//   const query = 'SELECT category_id AS id, category_name AS name FROM major_category'; // Adjust the query based on your database structure

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching provinces:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }
//     res.json(results);
//   });
// });

// // Api end point to get grade
// app.get('/degree', (req, res) => {
//   const query = 'SELECT degree_id AS id, degree_level AS level FROM degree'; // Adjust the query based on your database structure

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching provinces:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }
//     res.json(results);
//   });
// });

// // Api end point to get grade
// app.get('/grade', (req, res) => {
//   const query = 'SELECT grade_id AS id, grade_level AS level FROM grade'; // Adjust the query based on your database structure

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching provinces:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }
//     res.json(results);
//   });
// });

// // API endpoint to get trainingcenter
// app.get('/trainingcenter', (req, res) => {
//   const query = 'SELECT center_id AS id, center_name AS name FROM trainingcenter'; // Adjust the query based on your database structure

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching provinces:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }
//     res.json(results);
//   });
// });

// // API endpoint to get project
// app.get('/project', (req, res) => {
//   const query = 'SELECT project_id AS id, project_name AS name FROM project'; // Adjust the query based on your database structure
  
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching provinces:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }
//     res.json(results);
//   });
// });

// // API endpoint to get factory
// app.get('/factory', (req, res) => {
//   const query = 'SELECT factory_id AS id, factory_name AS name FROM factory'; // Adjust the query based on your database structure
  
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching provinces:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }
//     res.json(results);
//   });
// })

// // API endpoint to get branch
// app.get('/branch', (req, res) => {
//   const query = 'SELECT branch_id AS id, branch_name AS name FROM branch'; // Adjust the query based on your database structure
  
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching provinces:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }
//     res.json(results);
//   });
// });

// // API endpoint to get position
// app.get('/position', (req, res) => {
//   const query = 'SELECT position_id AS id, position_name AS name FROM position'; // Adjust the query based on your database structure
  
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching provinces:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }
//     res.json(results);
//   });
// });


// // API endpoint to get department
// app.get('/department', (req, res) => {
//   const query = 'SELECT department_id AS id, department_name AS name FROM department'; // Adjust the query based on your database structure
  
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching provinces:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }
//     res.json(results);
//   });
// });

// // API endpoint to get provinces
// app.get('/province', (req, res) => {
//   const query = 'SELECT province_id AS id, province_name AS name FROM province'; // Adjust the query based on your database structure
  
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching provinces:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }
//     res.json(results);
//   });
// });

// // API endpoint to get districts based on province
// app.get('/district', (req, res) => {
//   const provinceId = req.query.province; // Get the province ID from the query parameters
//   const query = 'SELECT district_id AS id, district_name AS name FROM district WHERE province_id = ?'; // Use parameterized query to prevent SQL injection

//   db.query(query, [provinceId], (err, results) => {
//     if (err) {
//       console.error('Error fetching districts:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }
//     res.json(results);
//   });
// });

// // API endpoint to get employee report
// app.get('/employee', (req, res) => {
//       const query = `
//           SELECT 
//               e.employee_id AS id,
//               e.Fname AS first_name,
//               e.Lname AS last_name,
//               e.gender,
//               p.position_name,
//               v_current.village_name AS current_village,
//               e.hire_date,
//               eth.ethnicity_name AS ethnicity,
//               g.grade_level AS grade,
//               m.major_name AS major,
//               gi.study_years,
//               GROUP_CONCAT(o.organization_name ORDER BY eo.join_date SEPARATOR ', ') AS organizations
//           FROM 
//               employee e
//           JOIN 
//               position p ON e.position_id = p.position_id
//           JOIN 
//               village v_current ON e.current_village_id = v_current.village_id
//           JOIN 
//               ethnicity eth ON e.ethnicity_id = eth.ethnicity_id
//           JOIN 
//               graduate_info gi ON e.employee_id = gi.employee_id
//           JOIN 
//               grade g ON gi.grade_id = g.grade_id
//           JOIN 
//               major m ON gi.major_id = m.major_id
//           JOIN 
//               employee_organization eo ON e.employee_id = eo.employee_id
//           JOIN 
//               organization o ON eo.organization_id = o.organization_id
//           GROUP BY 
//               e.employee_id;
//       `;

//     // Use the view employee_report
//   db.query(query, (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error fetching employee data');
//     } else {
//       res.send(result);  // Send the result of the query
//     }
//   });
// });

// Start the server
app.listen(8081, () => {
  console.log('Server running on port 8081');
});
