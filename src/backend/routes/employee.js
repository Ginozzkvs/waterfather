// routes/employee.js
const express = require("express");
const db = require("../db/connection");
const router = express.Router();

router.get("/", (req, res) => {
  const query = `
          SELECT 
              e.employee_id AS id,
              e.Fname AS first_name,
              e.Lname AS last_name,
              e.gender,
              p.position_name,
              v_current.village_name AS current_village,
              e.hire_date,
              eth.ethnicity_name AS ethnicity,
              g.grade_level AS grade,
              m.major_name AS major,
              gi.study_years,
              GROUP_CONCAT(o.organization_name ORDER BY eo.join_date SEPARATOR ', ') AS organizations
          FROM 
              employee e
          JOIN 
              position p ON e.position_id = p.position_id
          JOIN 
              village v_current ON e.current_village_id = v_current.village_id
          JOIN 
              ethnicity eth ON e.ethnicity_id = eth.ethnicity_id
          JOIN 
              graduate_info gi ON e.employee_id = gi.employee_id
          JOIN 
              grade g ON gi.grade_id = g.grade_id
          JOIN 
              major m ON gi.major_id = m.major_id
          JOIN 
              employee_organization eo ON e.employee_id = eo.employee_id
          JOIN 
              organization o ON eo.organization_id = o.organization_id
          GROUP BY 
              e.employee_id;
      `;

  // Use the view employee_report
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching employee data");
    } else {
      res.send(result); // Send the result of the query
    }
  });
});

router.post("/", async (req, res) => {
    const {
        fname,
        lname,
        gender,
        dateofbirth,
        provinceofbirth,
        district,
        villageofbirth,
        ethnicity,
        hire_date,
        position,
        department,
        trainingcenter,
        branch,
        project,
        factory,
        province2,  
        district2,
        current_village
    } = req.body;

    // Basic validation
    if (
      !fname ||
      !lname ||
      !gender ||
      !dateofbirth ||
      !villageofbirth ||
      !districtofbirth ||
      !provinceofbirth ||
      !hire_date ||
      !current_village ||
      !current_district ||
      !current_province
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      // Lookup or insert place of birth (similar to previous example)

      // Lookup the ID for the province by name (birth)
      const provinceOfBirthQuery = "SELECT id FROM province WHERE name = ?";
      const [provinceOfBirthResult] = await db.query(provinceOfBirthQuery, [
        provinceofbirth,
      ]);
      const province_of_birth_id =
        provinceOfBirthResult.length > 0 ? provinceOfBirthResult[0].id : null;

      // Lookup the ID for the district by name (birth)
      const districtOfBirthQuery =
        "SELECT id FROM district WHERE name = ? AND province_id = ?";
      const [districtOfBirthResult] = await db.query(districtOfBirthQuery, [
        districtofbirth,
        province_of_birth_id,
      ]);
      const district_of_birth_id =
        districtOfBirthResult.length > 0 ? districtOfBirthResult[0].id : null;

      // Lookup the ID for the village by name (birth)
      const villageOfBirthQuery =
        "SELECT id FROM village WHERE name = ? AND district_id = ?";
      const [villageOfBirthResult] = await db.query(villageOfBirthQuery, [
        villageofbirth,
        district_of_birth_id,
      ]);
      let village_of_birth_id;

      if (villageOfBirthResult.length === 0) {
        // Insert new village if it doesn't exist (birth)
        const insertVillageOfBirthQuery =
          "INSERT INTO village (name, district_id) VALUES (?, ?)";
        const insertVillageOfBirthResponse = await db.query(
          insertVillageOfBirthQuery,
          [villageofbirth, district_of_birth_id]
        );
        village_of_birth_id = insertVillageOfBirthResponse.insertId;
      } else {
        village_of_birth_id = villageOfBirthResult[0].id;
      }

      // Lookup or insert current place (similar to previous example)
      const currentProvinceQuery = "SELECT id FROM province WHERE name = ?";
      const [currentProvinceResult] = await db.query(currentProvinceQuery, [
        current_province,
      ]);
      const current_province_id =
        currentProvinceResult.length > 0 ? currentProvinceResult[0].id : null;

      const currentDistrictQuery =
        "SELECT id FROM district WHERE name = ? AND province_id = ?";
      const [currentDistrictResult] = await db.query(currentDistrictQuery, [
        current_district,
        current_province_id,
      ]);
      const current_district_id =
        currentDistrictResult.length > 0 ? currentDistrictResult[0].id : null;

      const currentVillageQuery =
        "SELECT id FROM village WHERE name = ? AND district_id = ?";
      const [currentVillageResult] = await db.query(currentVillageQuery, [
        current_village,
        current_district_id,
      ]);
      let current_village_id;

      if (currentVillageResult.length === 0) {
        const insertCurrentVillageQuery =
          "INSERT INTO village (name, district_id) VALUES (?, ?)";
        const insertCurrentVillageResponse = await db.query(
          insertCurrentVillageQuery,
          [current_village, current_district_id]
        );
        current_village_id = insertCurrentVillageResponse.insertId;
      } else {
        current_village_id = currentVillageResult[0].id;
      }
      // Lookup ethnicity_id by name
      const ethnicityQuery = "SELECT id FROM ethnicity WHERE name = ?";
      const [ethnicityResult] = await db.query(ethnicityQuery, [ethnicity]);
      const ethnicity_id =
        ethnicityResult.length > 0 ? ethnicityResult[0].id : null;

      // Lookup department_id by name
      const departmentQuery = "SELECT id FROM department WHERE name = ?";
      const [departmentResult] = await db.query(departmentQuery, [department]);
      const department_id =
        departmentResult.length > 0 ? departmentResult[0].id : null;

      // Lookup project_id by name
      const projectQuery = "SELECT id FROM project WHERE name = ?";
      const [projectResult] = await db.query(projectQuery, [project]);
      const project_id = projectResult.length > 0 ? projectResult[0].id : null;

      // Lookup center_id by name
      const centerQuery = "SELECT id FROM trainingcenter WHERE name = ?";
      const [centerResult] = await db.query(centerQuery, [center]);
      const center_id = centerResult.length > 0 ? centerResult[0].id : null;

      // Lookup branch_id by name
      const branchQuery = "SELECT id FROM branch WHERE name = ?";
      const [branchResult] = await db.query(branchQuery, [branch]);
      const branch_id = branchResult.length > 0 ? branchResult[0].id : null;

      // Lookup factory_id by name
      const factoryQuery = "SELECT id FROM factory WHERE name = ?";
      const [factoryResult] = await db.query(factoryQuery, [factory]);
      const factory_id = factoryResult.length > 0 ? factoryResult[0].id : null;

      // Lookup position_id by name
      const positionQuery = "SELECT id FROM position WHERE name = ?";
      const [positionResult] = await db.query(positionQuery, [position]);
      const position_id =
        positionResult.length > 0 ? positionResult[0].id : null;

      // Insert the employee record
      const insertEmployeeQuery = `
            INSERT INTO employee (
                Fname, Lname, gender, date_of_birth, village_of_birth_id, 
                current_village_id, hire_date, ethnicity_id, department_id, 
                project_id, center_id, branch_id, factory_id, position_id
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      const insertEmployeeResponse = await db.query(insertEmployeeQuery, [
        fname,
        lname,
        gender,
        dateofbirth,
        village_of_birth_id,
        current_village_id,
        hire_date,
        ethnicity_id,
        department_id,
        project_id,
        center_id,
        branch_id,
        factory_id,
        position_id,
      ]);

      if (insertEmployeeResponse.affectedRows > 0) {
        return res
          .status(201)
          .json({ message: "Employee added successfully!" });
      } else {
        return res.status(500).json({ error: "Error inserting employee." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      return res
        .status(500)
        .json({ error: "There was an error submitting the form." });
    }
  });
module.exports = router;
