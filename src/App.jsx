import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import EmployeeManage from './components/employee';
import EmployeeForm from './components/EmployeeForm';
import EmployeeContainer from './components/EmployeeContainer';
import './index.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ id: '', name: '', position: '' });

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const insertEmployee = () => {
    if (form.id && form.name && form.position) {
      setEmployees((prevEmployees) => [...prevEmployees, form]);
      resetForm();
    }
  };

  const updateEmployee = () => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) => (emp.id === form.id ? form : emp))
    );
    resetForm();
  };

  const editEmployee = (employee) => {
    setForm(employee);
  };

  const deleteEmployee = (id) => {
    setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.id !== id));
  };

  const resetForm = () => {
    setForm({ id: '', name: '', position: '' });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-grow">
          <Sidebar isOpen={isSidebarOpen} />
          <div className={`flex-1 p-4 mt-16 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <Routes>
              <Route path="/" element={<EmployeeContainer employees={employees} onEdit={editEmployee} onDelete={deleteEmployee} />} />
              <Route path="/employees" element={<EmployeeManage form={form} handleChange={handleChange} insertEmployee={insertEmployee} updateEmployee={updateEmployee} />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
