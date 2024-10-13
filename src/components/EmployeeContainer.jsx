import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeList from './EmployeeList'; // Import the EmployeeList component

const EmployeeContainer = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch employee data from the API when the component is mounted
  useEffect(() => {
    axios.get('http://localhost:8081/employee') // Fetch from the /employee endpoint
      .then(response => {
        setEmployees(response.data); // Store the data in the employees state
      })
      .catch(error => {
        console.error('There was an error fetching the employee data!', error);
      });
  }, []);

  const handleEdit = (employee) => {
    // Handle edit functionality here
    console.log('Editing employee', employee);
  };

  const handleDelete = (employeeId) => {
    // Handle delete functionality here
    console.log('Deleting employee', employeeId);
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Employee List</h1>
      <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default EmployeeContainer;
