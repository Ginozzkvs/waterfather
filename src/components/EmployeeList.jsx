import React from 'react';

const formatDate = (dateString) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-GB', options).replace(/\//g, '-');
};

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Actions</th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Current Village</th>
            <th>Hire Date</th>
            <th>Ethnicity</th>
            <th>Grade</th>
            <th>Major</th>
            <th>Organizations</th>
            
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <button
                  className="btn btn-warning btn-xs mr-2"
                  onClick={() => onEdit(employee)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => onDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
              <td>{employee.id}</td>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.position_name}</td>
              <td>{employee.current_village}</td>
              <td>{formatDate(employee.hire_date)}</td> {/* Formatted Hire Date */}
              <td>{employee.ethnicity}</td>
              <td>{employee.grade}</td>
              <td>{employee.major}</td>
              <td>{employee.organizations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
