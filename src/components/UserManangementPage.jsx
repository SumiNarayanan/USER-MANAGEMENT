import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import menuData from "../Data/Data";
import { FaUserCog } from "react-icons/fa";

const UserManagementPage = () => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [inputsLocked, setInputsLocked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [setAsDefault, setSetAsDefault] = useState(false);

  // Check if there's a default company and role saved in local storage on page load
  useEffect(() => {
    const savedCompany = localStorage.getItem("defaultCompany");
    const savedRole = localStorage.getItem("defaultRole");

    if (savedCompany && savedRole) {
      setCompany(savedCompany);
      setRole(savedRole);
      const selectedMenu = menuData[savedCompany]?.[savedRole] || [];
      setMenuItems(selectedMenu);
      setInputsLocked(true);
    }
  }, []);

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setSetAsDefault(e.target.checked);
  };

  const handleOkClick = () => {
    if (company && role) {
      if (setAsDefault) {
        localStorage.setItem("defaultCompany", company);
        localStorage.setItem("defaultRole", role);
      }
      const selectedMenu = menuData[company]?.[role] || [];
      setMenuItems(selectedMenu);
      setInputsLocked(true);
    } else {
      alert("Please select both a company and a role.");
    }
  };

  const handleReset = () => {
    setInputsLocked(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar that spans from the top */}
      {inputsLocked && (
        <Sidebar
          menuData={menuItems}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      )}

      {/* Main Content Area */}
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        {/* Display selected company and role on top when inputs are locked */}
        {inputsLocked && (
          <div className="flex justify-end items-center mb-4 space-x-2">
            <button
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded focus:outline-none cursor-default"
              disabled
            >
              {company} - {role}
            </button>
            <button
              onClick={handleReset}
              className="flex items-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <FaUserCog className="mr-2" /> Change Company/Role
            </button>
          </div>
        )}

        {/* Placeholder Content */}
        {inputsLocked && (
          <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-700">Your Image/Content Here</p>
          </div>
        )}

        {/* Modal for selecting company and role (initially shown) */}
        {!inputsLocked && (
          <Modal
            company={company}
            role={role}
            handleCompanyChange={handleCompanyChange}
            handleRoleChange={handleRoleChange}
            handleOkClick={handleOkClick}
            setAsDefault={setAsDefault}
            handleCheckboxChange={handleCheckboxChange}
          />
        )}
      </div>
    </div>
  );
};

export default UserManagementPage;
