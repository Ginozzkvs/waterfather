import React, { useState, useEffect } from "react";

const EmployeeManage = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    gender: "",
    dateofbirth: "",
    provinceofbirth: "",
    districtofbirth: "",
    villageofbirth: "",
    ethnicitys: "",
    hire_date: "",
    positions: "",
    departments: "",
    trainingcenters: "",
    branchs: "",
    projects: "",
    factorys: "",
    current_province: "",
    current_district: "",
    current_village: "",
  });

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedProvince2, setSelectedProvince2] = useState("");
  const [selectedDistrict2, setSelectedDistrict2] = useState("");
  const [selectedEthnicity, setSelectedEthnicity] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedCenter, setSelectedCenter] = useState("");
  const [selectedProjects, setSelectedProjects] = useState("");
  const [selectedFactory, setSelectedFactory] = useState("");

  const [factories, setFactories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [centers, setCenters] = useState([]);
  const [provinces, setProvinces] = useState([]); // Populate with actual data
  const [districts, setDistricts] = useState([]); // Populate with actual data
  const [provinces2, setProvinces2] = useState([]); // For current province
  const [districts2, setDistricts2] = useState([]); // For current district
  const [ethnicitys, setEthnicitys] = useState([]); // For ethnicity options
  const [departments, setDepartments] = useState([]); // For department options
  const [positions, setPositions] = useState([]); // For position options
  const [branches, setBranches] = useState([]); // For branch options

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/project");
        if (!response.ok) {
          throw new Error(`Error fetching projects: ${response.statusText}`);
        }
        const projectsData = await response.json();
        console.log("projects Data:", projectsData);
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching centers:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/factory");
        if (!response.ok) {
          throw new Error(`Error fetching factory: ${response.statusText}`);
        }
        const factoriesData = await response.json();
        console.log("factories Data:", factoriesData);
        setFactories(factoriesData);
      } catch (error) {
        console.error("Error fetching factories:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/trainingcenter");
        if (!response.ok) {
          throw new Error(
            `Error fetching trainingcenters: ${response.statusText}`
          );
        }
        const centersData = await response.json();
        console.log("branches Data:", centersData);
        setCenters(centersData);
      } catch (error) {
        console.error("Error fetching centers:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/branch");
        if (!response.ok) {
          throw new Error(`Error fetching positions: ${response.statusText}`);
        }
        const branchesData = await response.json();
        console.log("branches Data:", branchesData);
        setBranches(branchesData);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/position");
        if (!response.ok) {
          throw new Error(`Error fetching positions: ${response.statusText}`);
        }
        const positionsData = await response.json();
        console.log("departments Data:", positionsData);
        setPositions(positionsData);
      } catch (error) {
        console.error("Error fetching positions:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/department");
        if (!response.ok) {
          throw new Error(`Error fetching departments: ${response.statusText}`);
        }
        const departmentsData = await response.json();
        console.log("departments Data:", departmentsData);
        setDepartments(departmentsData);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/province");
        if (!response.ok) {
          throw new Error(`Error fetching provinces: ${response.statusText}`);
        }
        const provincesData = await response.json();
        console.log("Provinces Data:", provincesData);
        setProvinces(provincesData);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/province");
        if (!response.ok) {
          throw new Error(`Error fetching provinces: ${response.statusText}`);
        }
        const provincesData = await response.json();
        console.log("Provinces Data:", provincesData);
        setProvinces2(provincesData);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchData();
  }, []);

  // Fetch ethnicity when the component mounts
  useEffect(() => {
    const fetchEthnicity = async () => {
      try {
        const response = await fetch("http://localhost:8081/ethnicity"); // Adjust the API endpoint
        const data = await response.json();
        setEthnicitys(data);
      } catch (error) {
        console.error("Error fetching ethnicities:", error);
      }
    };

    fetchEthnicity();
  }, []);

  // Fetch districts when the selected province changes
  useEffect(() => {
    const fetchDistricts = async () => {
      if (selectedProvince) {
        try {
          const response = await fetch(
            `http://localhost:8081/district?province=${selectedProvince}` // Adjust the API endpoint
          );
          const data = await response.json();
          setDistricts(data);
        } catch (error) {
          console.error("Error fetching districts:", error);
        }
      } else {
        setDistricts([]); // Clear districts if no province is selected
      }
    };

    fetchDistricts();
  }, [selectedProvince]);

  useEffect(() => {
    const fetchDistricts2 = async () => {
      if (selectedProvince2) {
        try {
          const response = await fetch(
            `http://localhost:8081/district?province=${selectedProvince2}` // Adjust the API endpoint
          );
          const data = await response.json();
          setDistricts2(data);
        } catch (error) {
          console.error("Error fetching districts:", error);
        }
      } else {
        setDistricts2([]); // Clear districts if no province is selected
      }
    };

    fetchDistricts2();
  }, [selectedProvince2]);

  // Fetch centers, projects, factories, branches, positions, departments, and provinces when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          centersResponse,
          projectsResponse,
          factoriesResponse,
          branchesResponse,
          positionsResponse,
          departmentsResponse,
          provincesResponse,
          provincesResponse2,
        ] = await Promise.all([
          fetch("http://localhost:8081/trainingcenter"),
          fetch("http://localhost:8081/project"),
          fetch("http://localhost:8081/factory"),
          fetch("http://localhost:8081/branch"),
          fetch("http://localhost:8081/position"),
          fetch("http://localhost:8081/department"),
          fetch("http://localhost:8081/province"),
        ]);

        const [
          centersData,
          projectsData,
          factoriesData,
          branchesData,
          positionsData,
          departmentsData,
          provincesData,
          provincesData2,
        ] = await Promise.all([
          centersResponse.json(),
          projectsResponse.json(),
          factoriesResponse.json(),
          branchesResponse.json(),
          positionsResponse.json(),
          departmentsResponse.json(),
          provincesResponse.json(),
          provincesResponse2.json(),
        ]);

        setCenters(centersData);
        setProjects(projectsData);
        setFactories(factoriesData);
        setBranches(branchesData);
        setPositions(positionsData);
        setDepartments(departmentsData);
        setProvinces(provincesData);
        setProvinces2(provincesData); // Assuming you want to set the second province state with the same data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    setSelectedProvince(provinceId);
    setFormData({ ...formData, provinceofbirth: provinceId });
    // Fetch districts based on selected province
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleProvinceChange2 = (e) => {
    const provinceId = e.target.value;
    setSelectedProvince2(provinceId);
    setFormData({ ...formData, current_province: provinceId });
    // Fetch districts based on selected province
  };

  const handleProjectChange = (e) => {
    setSelectedProjects(e.target.value);
  };
  const handleFactoryChange = (e) => {
    setSelectedFactory(e.target.value);
  };

  const handleCenterChange = (e) => {
    setSelectedCenter(e.target.value);
  };

  const handleDistrictChange2 = (e) => {
    setSelectedDistrict2(e.target.value);
  };

  const handleEthnicityChange = (e) => {
    setSelectedEthnicity(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8081/employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            fname: formData.fname,
            lname: formData.lname,
            gender: formData.gender,
            dateofbirth: formData.dateofbirth,
            provinceofbirth: formData.provinceofbirth,
            district: formData.district,
            villageofbirth: formData.villageofbirth,
            ethnicity: formData.ethnicitys,
            hire_date: formData.hire_date,
            position: formData.positions,
            department: formData.departments,
            trainingcenter: formData.trainingcenters,
            branch: formData.branchs,
            project: formData.projects,
            factory: formData.factorys,
            province2: formData.province2,
            district2: formData.district2,
            current_village: formData.current_village,
          }
        ),
      });

      if (!response.ok) {
        throw new Error(`Error submitting form: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Employee submitted successfully:", result);
      // Optionally reset form or provide feedback to user
      setFormData({
        fname: "",
        lname: "",
        gender: "",
        dateofbirth: "",
        provinceofbirth: "",
        district: "",
        villageofbirth: "",
        ethnicity: "",
        hire_date: "",
        position: "",
        department: "",
        trainingcenter: "",
        branch: "",
        project: "",
        factory: "",
        province2: "",
        district2: "",
        current_village: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      console.log();
    }
  };

  return (
    <div className="px-60 gap-x-4 mb-2 mt-2">
      {/* First Row (First Name and Last Name) */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* First Name */}
        <div className="flex items-center">
          <label htmlFor="fname" className="text-gray-700 font-medium w-1/4">
            ຊື່
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Last Name */}
        <div className="flex items-center">
          <label htmlFor="lname" className="text-gray-700 font-medium w-1/4">
            ນາມສະກຸນ
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Gender */}
        <div className="flex items-center">
          <label htmlFor="gender" className="text-gray-700 font-medium w-1/4">
            ເພດ
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
            required
          >
            <option value="">-- ເລືອກເພດ --</option>
            <option value="male">ຊາຍ</option>
            <option value="female">ຍິງ</option>
            <option value="other">ອື່ນໆ</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div className="flex items-center">
          <label
            htmlFor="dateofbirth"
            className="text-gray-700 font-medium w-1/4"
          >
            ວັນ/ເດືອນ/ປີເກີດ
          </label>
          <input
            type="date"
            id="dateofbirth"
            name="dateofbirth"
            value={formData.dateofbirth}
            onChange={handleChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Province of Birth */}
        <div className="flex items-center">
          <label
            htmlFor="provinceofbirth"
            className="text-gray-700 font-medium w-1/4"
          >
            ແຂວງເກີດ
          </label>
          <select
            id="provinceofbirth"
            name="provinceofbirth"
            value={formData.provinceofbirth}
            onChange={handleProvinceChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
            required
          >
            <option value="">-- ເລືອກແຂວງ --</option>
            {provinces.map((province) => (
              <option key={province.id} value={province.id}>
                {province.name}
              </option>
            ))}
          </select>
        </div>

        {/* District of Birth */}
        <div className="flex items-center">
          <label
            htmlFor="districtofbirth"
            className="text-gray-700 font-medium w-1/4"
          >
            ເມືອງເກີດ
          </label>
          <select
            id="districtofbirth"
            name="districtofbirth"
            value={formData.district}
            onChange={handleDistrictChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
            required
            disabled={!selectedProvince}
          >
            <option value="">-- ເລືອກເມືອງ --</option>
            {districts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </select>
        </div>

        {/* Village of Birth */}
        <div className="flex items-center">
          <label
            htmlFor="villageofbirth"
            className="text-gray-700 font-medium w-1/4"
          >
            ບ້ານເກີດ
          </label>
          <input
            type="text"
            id="villageofbirth"
            name="villageofbirth"
            value={formData.villageofbirth}
            onChange={handleChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Ethnicity */}
        <div className="flex items-center">
          <label
            htmlFor="ethnicity"
            className="text-gray-700 font-medium w-1/4"
          >
            ຊົນເຜົ່າ
          </label>
          <select
            id="ethnicity"
            name="ethnicitys"
            value={formData.ethnicity}
            onChange={handleEthnicityChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
            required
          >
            <option value="">-- ເລືອກຊົນເຜົ່າ --</option>
            {ethnicitys.map((ethnicity) => (
              <option key={ethnicity.id} value={ethnicity.id}>
                {ethnicity.name}
              </option>
            ))}
          </select>
        </div>

        {/* Hire Date */}
        <div className="flex items-center">
          <label
            htmlFor="hire_date"
            className="text-gray-700 font-medium w-1/4"
          >
            ວັນທີ່ເຂົ້າຮັບວຽກ
          </label>
          <input
            type="date"
            id="hire_date"
            name="hire_date"
            value={formData.hire_date}
            onChange={handleChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        {/* Position */}
        <div className="flex items-center">
          <label htmlFor="position" className="text-gray-700 font-medium w-1/4">
            ຕຳແໜ່ງ
          </label>
          <select
            id="position"
            name="positions"
            value={formData.position}
            onChange={handlePositionChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
            required
          >
            <option value="">-- ເລືອກຕຳແໜ່ງ --</option>
            {positions.map((position) => (
              <option key={position.id} value={position.id}>
                {position.name}
              </option>
            ))}
          </select>
        </div>
        {/* Department */}
        <div className="flex items-center">
          <label
            htmlFor="department"
            className="text-gray-700 font-medium w-1/4"
          >
            ພະແນກ
          </label>
          <select
            id="department"
            name="departments"
            value={formData.department}
            onChange={handleDepartmentChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
            required
          >
            <option value="">-- ເລືອກພະແນກ --</option>
            {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center">
          <label
            htmlFor="trainingcenter"
            className="text-gray-700 font-medium w-1/4"
          >
            ສູນເຝິກອົບຮົມ
          </label>
          <select
            id="trainingcenter"
            name="trainingcenters"
            value={formData.trainingcenter}
            onChange={handleCenterChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
            required
          >
            <option value="">-- ເລືອກສູນເຝິກ --</option>
            {centers.map((center) => (
              <option key={center.id} value={center.id}>
                {center.name}
              </option>
            ))}
          </select>
        </div>

        {/* Branch */}
        <div className="flex items-center">
          <label htmlFor="branch" className="text-gray-700 font-medium w-1/4">
            ສາຂາ
          </label>
          <select
            id="branch"
            name="branchs"
            value={formData.branch}
            onChange={handleBranchChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
            required
          >
            <option value="">-- ເລືອກສາຂາ --</option>
            {branches.map((branch) => (
              <option key={branch.id} value={branch.id}>
                {branch.name}
              </option>
            ))}
          </select>
        </div>

        {/* Branch */}
        <div className="flex items-center">
          <label htmlFor="project" className="text-gray-700 font-medium w-1/4">
            ໂຄງການ
          </label>
          <select
            id="project"
            name="projects"
            value={formData.project}
            onChange={handleProjectChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
            required
          >
            <option value="">-- ເລືອກໂຄງການ --</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        {/* Branch */}
        <div className="flex items-center">
          <label htmlFor="factory" className="text-gray-700 font-medium w-1/4">
            ໂຮງງານ
          </label>
          <select
            id="factory"
            name="factorys"
            value={formData.factory}
            onChange={handleFactoryChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
            required
          >
            <option value="">-- ເລືອກໂຮງງານ --</option>
            {factories.map((factory) => (
              <option key={factory.id} value={factory.id}>
                {factory.name}
              </option>
            ))}
          </select>
        </div>

        {/* Province 2 */}
        <div className="flex items-center">
          <label
            htmlFor="province2"
            className="text-gray-700 font-medium w-1/4"
          >
            ແຂວງປັດຈຸບັນ
          </label>
          <select
            id="province2"
            name="current_province"
            value={formData.province2}
            onChange={handleProvinceChange2}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
            required
          >
            <option value="">-- ເລືອກແຂວງ --</option>
            {provinces2.map((province) => (
              <option key={province.id} value={province.id}>
                {province.name}
              </option>
            ))}
          </select>
        </div>

        {/* District 2 */}
        <div className="flex items-center">
          <label
            htmlFor="district2"
            className="text-gray-700 font-medium w-1/4"
          >
            ເມືອງປັດຈຸບັນ
          </label>
          <select
            id="district2"
            name="current_district"
            value={formData.district2}
            onChange={handleDistrictChange2}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
            required
            disabled={!selectedProvince2}
          >
            <option value="">-- ເລືອກເມືອງ --</option>
            {districts2.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </select>
        </div>

        {/* Current Village */}
        <div className="flex items-center">
          <label
            htmlFor="current_village"
            className="text-gray-700 font-medium w-1/4"
          >
            ບ້ານປັດຈຸບັນ
          </label>
          <input
            type="text"
            id="current_village"
            name="current_village"
            value={formData.current_village}
            onChange={handleChange}
            className="w-3/4 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center mt-4 space-x-4">
          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600"
          >
            Submit
          </button>

          {/* Edit Button */}
          <button
            type="button"
            className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-sm hover:bg-yellow-600"
            // onClick={handleEdit}
          >
            Edit
          </button>

          {/* Delete Button */}
          <button
            type="button"
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600"
            // onClick={handleDelete}
          >
            Delete
          </button>

          {/* Cancel Button */}
          <button
            type="button"
            className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-md shadow-sm hover:bg-gray-600"
            // onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
      {/* //table at bottom */}
      {/* Employee Data Table */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">ລາຍຊື່ລະບົບລູກຈໍ</h2>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ຊື່</th>
              <th className="border border-gray-300 px-4 py-2">ນາມສະກຸນ</th>
              <th className="border border-gray-300 px-4 py-2">ເພດ</th>
              <th className="border border-gray-300 px-4 py-2">ວັນເກີດ</th>
              <th className="border border-gray-300 px-4 py-2">ບ້ານເກີດ</th>
              <th className="border border-gray-300 px-4 py-2">
                ວັນທີເຂົ້າຮັບຮອງ
              </th>
              <th className="border border-gray-300 px-4 py-2">ບ້ານປັດຈຸບັນ</th>
            </tr>
          </thead>
          <tbody>
            {/* {employeeList.map((employee, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{employee.fname}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.lname}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.gender}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.dateofbirth}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.villageofbirth}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.hire_date}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.current_village}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeManage;
