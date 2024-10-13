import React, { useState, useEffect } from "react";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    fname: "", //ຊື່
    lname: "", //ນາມສະກຸນ
    gender: "", //ເພດ
    dateofbirth: "", //ວັນ/ເດືອນ/ປີເກີດ
    provinceofbirth: "", //ແຂວງເກີດ
    districtofbirth: "", //ເມືອງເກີດ
    villageofbirth: "", //ບ້ານເກີດ
    current_village: "",
    current_district: "",
    currentprovince: "",
    ethnicity: "", //ຊົນເຜົ່າ
    father_name: "", //ຊື່ພໍ່
    mother_name: "", //ຊື່ແມ່
    spouse_name: "", //ຊື່ຄູ່ສົມລົດ
    num_of_children: 0, //ມີລູກຈັກຄົນ
    hire_date: "", //ວັນ/ເດືອນ/ປີຈ້າງງານ
    department: "", //ພະແນກ
    position: "", //ຕໍາແໜ່ງ
    branch: "", //ສາຂາ
    factory: "", //ໂຮງງານ
    projects: "", //ໂຄງການ
    trainingcenter: "", //ສູນເຝິກອົບຮົມ
    grade: "", //ລະດັບວັດທະນະທໍາ
    degree: "", //ລະດັບການສຶກສາ
    major: "", //ວິຊາສະເພາະ
    majorcategory: "", //ຕົງກັບສາຍທີ່ຮຽນຈົບ
    study_years: 0, //ຈໍານວນປີທີ່ຮຽນ
    nameofintitute: "", //ຊື່ສະຖາບັນການສຶກສາ
    graduate_country: "", //ຈົບຈາກປະເທດໃດ?
    organizations: [
      { join_date: "", leave_date: "", selected: false },
      { join_date: "", leave_date: "", selected: false },
      { join_date: "", leave_date: "", selected: false },
      { join_date: "", leave_date: "", selected: false },
      { join_date: "", leave_date: "", selected: false },
    ], //ຊາວໜຸ່ມ,ແມ່ຍິງ,ກຳມະບານ,ພັກສຳຮອງ,ພັກສົມບູນ
  });

  const [collapsibleSections, setCollapsibleSections] = useState([
    {
      id: "section1",
      title: "ຂໍ້ມູນທົ່ວໄປ",
      isOpen: false, // Track if the section is open
    },
    {
      id: "section2",
      title: "ທີ່ຢູ່ປັດຈຸບັນ",
      isOpen: false, // Track if the section is open
    },
    {
      id: "section3",
      title: "ຂໍ້ມູນພະນັກງານ",
      isOpen: false, // Track if the section is open
    },
    {
      id: "section4",
      title: "ຂໍ້ມູນວຸດທິການສຶກສາ",
      isOpen: false, // Track if the section is open
    },
    {
      id: "section5",
      title: "Organizations",
      isOpen: false, // Track if the section is open
    },
  ]);

  const [ethnicitys, setEthnicities] = useState([]);
  const [selectedEthnicity, setSelectedEthnicity] = useState("");

  const [majorcategorys, setMajorCategorys] = useState([]);
  const [selectedMajorCategory, setSelectedMajorCategory] = useState("");

  const [degrees, setDegrees] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState("");

  const [grades, setGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState("");

  const [centers, setCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState("");

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");

  const [factorys, setFactorys] = useState([]);
  const [selectedFactory, setSelectedFactory] = useState("");

  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");

  const [positions, setPositions] = useState([]);
  const [selectedPosition, setselectedPosition] = useState("");

  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [provinces2, setProvinces2] = useState([]);
  const [districts2, setDistricts2] = useState([]);
  const [selectedProvince2, setSelectedProvince2] = useState("");
  const [selectedDistrict2, setSelectedDistrict2] = useState("");

  // Fetch ethnicity when the component mounts
  useEffect(() => {
    const fetchEthnicity = async () => {
      try {
        const response = await fetch("http://localhost:8081/ethnicity"); // Adjust the API endpoint
        const data = await response.json();
        setEthnicities(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchEthnicity();
  }, []);

  // Fetch majorcategory when the component mounts
  useEffect(() => {
    const fetchmajorcategory = async () => {
      try {
        const response = await fetch("http://localhost:8081/majorcategory"); // Adjust the API endpoint
        const data = await response.json();
        setMajorCategorys(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchmajorcategory();
  }, []);

  // Fetch degree when the component mounts
  useEffect(() => {
    const fetchDegree = async () => {
      try {
        const response = await fetch("http://localhost:8081/degree"); // Adjust the API endpoint
        const data = await response.json();
        setDegrees(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchDegree();
  }, []);

  // Fetch grade when the component mounts
  useEffect(() => {
    const fetchGrade = async () => {
      try {
        const response = await fetch("http://localhost:8081/grade"); // Adjust the API endpoint
        const data = await response.json();
        setGrades(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchGrade();
  }, []);

  // Fetch center when the component mounts
  useEffect(() => {
    const fetchCenter = async () => {
      try {
        const response = await fetch("http://localhost:8081/trainingcenter"); // Adjust the API endpoint
        const data = await response.json();
        setCenters(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchCenter();
  }, []);

  // Fetch project when the component mounts
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("http://localhost:8081/project"); // Adjust the API endpoint
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProject();
  }, []);

  // Fetch factory when the component mounts
  useEffect(() => {
    const fetchFactory = async () => {
      try {
        const response = await fetch("http://localhost:8081/factory"); // Adjust the API endpoint
        const data = await response.json();
        setFactorys(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchFactory();
  }, []);

  // Fetch branch when the component mounts
  useEffect(() => {
    const fetchBranch = async () => {
      try {
        const response = await fetch("http://localhost:8081/branch"); // Adjust the API endpoint
        const data = await response.json();
        setBranches(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchBranch();
  }, []);

  // Fetch position when the component mounts
  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const response = await fetch("http://localhost:8081/position"); // Adjust the API endpoint
        const data = await response.json();
        setPositions(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchPosition();
  }, []);

  // Fetch department when the component mounts
  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await fetch("http://localhost:8081/department"); // Adjust the API endpoint
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchDepartment();
  }, []);

  // Fetch provinces when the component mounts
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch("http://localhost:8081/province"); // Adjust the API endpoint
        const data = await response.json();
        setProvinces(data);
        setProvinces2(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  // Fetch districts when the selected province changes
  useEffect(() => {
    const fetchDistricts = async () => {
      if (selectedProvince) {
        try {
          const response = await fetch(
            `http://localhost:8081/district?province=${selectedProvince}`
          ); // Adjust the API endpoint
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
            `http://localhost:8081/district?province=${selectedProvince2}`
          ); // Adjust the API endpoint
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

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
    setSelectedDistrict(""); // Reset district selection when province changes
    // Call the parent handleChange to update form data
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    // Call the parent handleChange to update form data
  };

  const handleProvinceChange2 = (event) => {
    setSelectedProvince2(event.target.value);
    setSelectedDistrict2(""); // Reset district selection when province changes
    // Call the parent handleChange to update form data
  };

  const handleDistrictChange2 = (event) => {
    setSelectedDistrict2(event.target.value);
    // Call the parent handleChange to update form data
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    selectedDepartment(""); // Reset district selection when province changes
    // Call the parent handleChange to update form data
  };

  const handlePositionChange = (event) => {
    setselectedPosition(event.target.value);
    selectedPosition(""); // Reset district selection when province changes
    // Call the parent handleChange to update form data
  };

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
    selectedBranch(""); // Reset district selection when province changes
    // Call the parent handleChange to update form data
  };

  const handleFactoryChange = (event) => {
    setSelectedFactory(event.target.value);
    selectedFactory(""); // Reset district selection when province changes
    // Call the parent handleChange to update form data
  };

  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
    selectedProject(""); // Reset district selection when province changes
    // Call the parent handleChange to update form data
  };

  const handleCenterChange = (event) => {
    setSelectedCenter(event.target.value);
    selectedCenter(""); // Reset district selection when province changes
    // Call the parent handleChange to update form data
  };

  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
    selectedGrade(""); // Reset district selection when province changes
    // Call the parent handleChange to update form data
  };

  const handleDegreeChange = (event) => {
    setSelectedDegree(event.target.value);
    selectedDegree(""); // Reset district selection when province changes
    // Call the parent handleChange to update form data
  };

  const handleMajorCategoryChange = (event) => {
    setSelectedMajorCategory(event.target.value);
    selectedMajorCategory(""); // Reset district selection when province changes
    // Call the parent handleChange to update form data
  };

  const handleEthnicityChange = (event) => {
    setSelectedEthnicity(event.target.value);
    selectedEthnicity(""); // Reset district selection when province changes
    // Call the parent handleChange to update form data
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrgChange = (index, e) => {
    const updatedOrgs = [...formData.organizations];
    updatedOrgs[index][e.target.name] = e.target.value;
    setFormData({ ...formData, organizations: updatedOrgs });
  };

  const handleOrgSelectChange = (index) => {
    setFormData((prevData) => {
      const updatedOrgs = [...prevData.organizations];

      // Mark the organization as selected if the join_date is filled
      if (updatedOrgs[index].join_date) {
        updatedOrgs[index].selected = true;
      } else {
        updatedOrgs[index].selected = false;
      }

      return { ...prevData, organizations: updatedOrgs };
    });
  };

  const toggleSection = (id) => {
    setCollapsibleSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id ? { ...section, isOpen: !section.isOpen } : section
      )
    );
  };

  return (
    <div className="container mx-auto">
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {collapsibleSections.map((section) => (
          <div key={section.id} className="collapse bg-white mb-2">
            <input
              type="checkbox"
              checked={section.isOpen}
              readOnly
              onClick={() => toggleSection(section.id)}
            />
            <div
              className="collapse-title text-xl font-medium flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(section.id)}
            >
              <span>{section.title}</span>
              {section.isOpen ? <span>−</span> : <span>+</span>}
            </div>
            {section.isOpen && (
              <div className="collapse-content p-4">
                {section.id === "section1" && (
                  <div className="mb-4">
                    {/* First Row (First Name and Last Name) */}
                    <div className="flex mb-4">
                      <div className="flex-1 mr-4">
                        <label
                          htmlFor="fname"
                          className="block text-gray-700 mb-1"
                        >
                          ຊື່
                        </label>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          value={formData.fname}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        />
                      </div>

                      <div className="flex-1">
                        <label
                          htmlFor="lname"
                          className="block text-gray-700 mb-1"
                        >
                          ນາມສະກຸນ
                        </label>
                        <input
                          type="text"
                          id="lname"
                          name="lname"
                          value={formData.lname}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex mb-4">
                      <div className="flex-1 mr-4">
                        <label
                          htmlFor="gender"
                          className="block text-gray-700 mb-1"
                        >
                          ເພດ
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        >
                          <option value="">-- ເລືອກເພດ --</option>{" "}
                          {/* Placeholder option */}
                          <option value="male">ຊາຍ</option>
                          <option value="female">ຍິງ</option>
                          <option value="other">ອື່ນໆ</option>
                        </select>
                      </div>

                      <div className="flex-1">
                        <label
                          htmlFor="dateofbirth"
                          className="block text-gray-700 mb-1"
                        >
                          ວັນ/ເດືອນ/ປີເກີດ
                        </label>
                        <input
                          type="date"
                          id="dateofbirth"
                          name="dateofbirth"
                          value={formData.dateofbirth}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="flex-1 mr-4">
                        <label
                          htmlFor="provinceofbirth"
                          className="block text-gray-700 mb-1"
                        >
                          ແຂວງເກີດ
                        </label>
                        <select
                          id="provinceofbirth"
                          name="provinceofbirth"
                          value={selectedProvince}
                          onChange={handleProvinceChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
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

                      <div className="flex-1">
                        <label
                          htmlFor="districtofbirth"
                          className="block text-gray-700 mb-1"
                        >
                          ເມືອງເກີດ
                        </label>
                        <select
                          id="districtofbirth"
                          name="districtofbirth"
                          value={selectedDistrict}
                          onChange={handleDistrictChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                          disabled={!selectedProvince} // Disable if no province is selected
                        >
                          <option value="">-- ເລືອກເມືອງ --</option>
                          {districts.map((district) => (
                            <option key={district.id} value={district.id}>
                              {district.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="flex-1 mr-4">
                        <label
                          htmlFor="villageofbirth"
                          className="block text-gray-700 mb-1"
                        >
                          ບ້ານເກີດ
                        </label>
                        <input
                          type="text"
                          id="villageofbirth"
                          name="villageofbirth"
                          value={formData.villageofbirth}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        />
                      </div>

                      <div className="flex-1">
                        <label
                          htmlFor="ethnicity"
                          className="block text-gray-700 mb-1"
                        >
                          ຊົນເຜົ່າ
                        </label>
                        <select
                          id="ethnicity"
                          name="ethnicity"
                          value={selectedEthnicity}
                          onChange={handleEthnicityChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
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
                    </div>
                    <div className="flex mb-4">
                      <div className="flex-1 mr-4">
                        <label
                          htmlFor="father_name"
                          className="block text-gray-700 mb-1"
                        >
                          ຊື່ພໍ່
                        </label>
                        <input
                          type="text"
                          id="father_name"
                          name="father_name"
                          value={formData.father_name}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        />
                      </div>
                      <div className="flex-1 ">
                        <label
                          htmlFor="mother_name"
                          className="block text-gray-700 mb-1"
                        >
                          ຊື່ແມ່
                        </label>
                        <input
                          type="text"
                          id="mother_name"
                          name="mother_name"
                          value={formData.mother_name}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="flex-1 mr-4">
                        <label
                          htmlFor="spouse_name"
                          className="block text-gray-700 mb-1"
                        >
                          ຊື່ຄູ່ສົມລົດ
                        </label>
                        <input
                          type="text"
                          id="spouse_name"
                          name="spouse_name"
                          value={formData.spouse_name}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        />
                      </div>
                      <div className="flex-1 ">
                        <label
                          htmlFor="num_of_children"
                          className="block text-gray-700 mb-1"
                        >
                          ມີລູກຈັກຄົນ
                        </label>
                        <input
                          type="number"
                          id="num_of_children"
                          name="num_of_children"
                          value={formData.num_of_children}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                          min = {0}
                          
                        ></input>
                      </div>
                    </div>
                  </div>
                )}

                {section.id === "section2" && (
                  <div className="flex flex-col mb-4">
                    {/* First Row with currentprovince and currentdistrict */}
                    <div className="flex mb-4">
                      <div className="flex-1 mr-4">
                        <label
                          htmlFor="currentprovince"
                          className="block text-gray-700 mb-1"
                        >
                          ແຂວງຢູ່ປັດຈຸບັນ
                        </label>
                        <select
                          id="currentprovince"
                          name="currentprovince"
                          value={selectedProvince2}
                          onChange={handleProvinceChange2}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
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

                      <div className="flex-1">
                        <label
                          htmlFor="current_district"
                          className="block text-gray-700 mb-1"
                        >
                          ເມືອງຢູ່ປັດຈຸບັນ
                        </label>
                        <select
                          id="current_district"
                          name="current_district"
                          value={selectedDistrict2}
                          onChange={handleDistrictChange2}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                          disabled={!selectedProvince2} // Disable if no province is selected
                        >
                          <option value="">-- ເລືອກເມືອງ --</option>
                          {districts2.map((district) => (
                            <option key={district.id} value={district.id}>
                              {district.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Second Row with spouse_name */}
                    <div className="flex mb-4">
                      <div className="flex-1">
                        <label
                          htmlFor="current_village"
                          className="block text-gray-700 mb-1"
                        >
                          ບ້ານຢູ່ປັດຈຸບັນ
                        </label>
                        <input
                          type="text"
                          id="current_village"
                          name="current_village"
                          value={formData.current_village}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {section.id === "section3" && (
                  <div className="flex flex-col mb-4">
                    <div className="flex mb-4">
                      <div className="flex-1">
                        <label
                          htmlFor="hire_date"
                          className="block text-gray-700 mb-1"
                        >
                          ວັນ/ເດືອນ/ປີຈ້າງງານ
                        </label>
                        <input
                          type="date"
                          id="hire_date"
                          name="hire_date"
                          value={formData.hire_date}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="flex-1 mr-4">
                        <label
                          htmlFor="department"
                          className="block text-gray-700 mb-1"
                        >
                          ພະແນກ
                        </label>
                        <select
                          id="department"
                          name="department"
                          value={selectedDepartment}
                          onChange={handleDepartmentChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
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

                      <div className="flex-1">
                        <label
                          htmlFor="department"
                          className="block text-gray-700 mb-1"
                        >
                          ຕໍາແໜ່ງ
                        </label>
                        <select
                          id="position"
                          name="position"
                          value={selectedPosition}
                          onChange={handlePositionChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        >
                          <option value="">-- ເລືອກຕໍາແໜ່ງ --</option>
                          {positions.map((position) => (
                            <option key={position.id} value={position.id}>
                              {position.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="flex-1 mr-4">
                        <label
                          htmlFor="branch"
                          className="block text-gray-700 mb-1"
                        >
                          ສາຂາ
                        </label>
                        <select
                          id="branch"
                          name="branch"
                          value={selectedBranch}
                          onChange={handleBranchChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
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

                      <div className="flex-1">
                        <label
                          htmlFor="factory"
                          className="block text-gray-700 mb-1"
                        >
                          ໂຮງງານ
                        </label>
                        <select
                          id="factory"
                          name="factory"
                          value={selectedFactory}
                          onChange={handleFactoryChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        >
                          <option value="">-- ເລືອກໂຮງງານ --</option>
                          {factorys.map((factory) => (
                            <option key={factory.id} value={factory.id}>
                              {factory.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      <div className="flex-1 mr-4">
                        <label
                          htmlFor="projects"
                          className="block text-gray-700 mb-1"
                        >
                          ໂຄງການ
                        </label>
                        <select
                          id="projects"
                          name="projects"
                          value={selectedProject}
                          onChange={handleProjectChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
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

                      <div className="flex-1">
                        <label
                          htmlFor="trainingcenter"
                          className="block text-gray-700 mb-1"
                        >
                          ສູນເຝິກອົບຮົມ
                        </label>
                        <select
                          id="trainingcenter"
                          name="trainingcenter"
                          value={selectedCenter}
                          onChange={handleCenterChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        >
                          <option value="">-- ເລືອກສູນເຝິກອົບຮົມ --</option>
                          {centers.map((center) => (
                            <option key={center.id} value={center.id}>
                              {center.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
                {section.id === "section4" && (
                  <div className="flex flex-col mb-4">
                    <div className="flex mb-4">
                      <div className="flex-1">
                        <label
                          htmlFor="grade"
                          className="block text-gray-700 mb-1"
                        >
                          ລະດັບວັດທະນະທໍາ
                        </label>
                        <select
                          id="grade"
                          name="grade"
                          value={selectedGrade}
                          onChange={handleGradeChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        >
                          <option value="">-- ເລືອກລະດັບວັດທະນະທໍາ --</option>
                          {grades.map((grade) => (
                            <option key={grade.id} value={grade.id}>
                              {grade.level}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="flex-1">
                        <label
                          htmlFor="degree"
                          className="block text-gray-700 mb-1"
                        >
                          ລະດັບການສຶກສາ
                        </label>
                        <select
                          id="degree"
                          name="degree"
                          value={selectedDegree}
                          onChange={handleDegreeChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        >
                          <option value="">-- ເລືອກລະດັບການສຶກສາ --</option>
                          {degrees.map((degree) => (
                            <option key={degree.id} value={degree.id}>
                              {degree.level}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="flex-1 mr-4">
                        <label
                          htmlFor="major"
                          className="block text-gray-700 mb-1"
                        >
                          ວິຊາສະເພາະ
                        </label>
                        <input
                          type="text"
                          id="major"
                          name="major"
                          value={formData.major}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        />
                      </div>

                      <div className="flex-1">
                        <label
                          htmlFor="majorcategory"
                          className="block text-gray-700 mb-1"
                        >
                          ຕົງກັບສາຍທີ່ຮຽນຈົບ
                        </label>
                        <select
                          id="majorcategory"
                          name="majorcategory"
                          value={selectedMajorCategory}
                          onChange={handleMajorCategoryChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        >
                          <option value="">-- ເລືອກ --</option>
                          {majorcategorys.map((majorcategory) => (
                            <option
                              key={majorcategory.id}
                              value={majorcategory.id}
                            >
                              {majorcategory.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="flex-1">
                        <label
                          htmlFor="study_years"
                          className="block text-gray-700 mb-1"
                        >
                          ຈໍານວນປີທີ່ຮຽນ
                        </label>
                        <input
                          type="number"
                          id="study_years"
                          name="study_years"
                          value={formData.study_years}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          min="0"
                          max="10"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="flex-1">
                        <label
                          htmlFor="nameofintitute"
                          className="block text-gray-700 mb-1"
                        >
                          ຊື່ສະຖາບັນການສຶກສາ
                        </label>
                        <input
                          type="text"
                          id="nameofintitute"
                          name="nameofintitute"
                          value={formData.nameofintitute}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="flex-1">
                        <label
                          htmlFor="graduate_country"
                          className="block text-gray-700 mb-1"
                        >
                          ຈົບຈາກປະເທດໃດ?
                        </label>
                        <input
                          type="text"
                          id="graduate_country"
                          name="graduate_country"
                          value={formData.graduate_country}
                          onChange={handleChange}
                          className="w-full p-2 border border-[#4A4A4A] bg-white rounded-lg mb-4"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
                {section.id === "section5" && (
                  <div>
                    {formData.organizations.map((org, index) => (
                      <div key={index} className="flex mb-4 items-center">
                        {/* Static organization names */}
                        <span className="w-1/3">
                          {index === 0 && "ຊາວໜຸ່ມ"}
                          {index === 1 && "ແມ່ຍິງ"}
                          {index === 2 && "ກຳມະບານ"}
                          {index === 3 && "ພັກສຳຮອງ"}
                          {index === 4 && "ພັກສົມບູນ"}
                        </span>

                        {/* Join Date Input */}
                        <input
                          type="date"
                          name="join_date"
                          value={org.join_date}
                          onChange={(e) => handleOrgChange(index, e)}
                          className="flex-1 p-2 border border-[#4A4A4A] bg-white rounded-lg mr-2"
                          required
                          onBlur={() => handleOrgSelectChange(index)}
                        />

                        {/* Leave Date Input (can be null) */}
                        <input
                          type="date"
                          name="leave_date"
                          value={org.leave_date}
                          onChange={(e) => handleOrgChange(index, e)}
                          className="flex-1 p-2 border border-[#4A4A4A] bg-white rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primary text-white p-3 rounded mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
