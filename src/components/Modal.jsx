import React from "react";

const Modal = ({
  company,
  role,
  handleCompanyChange,
  handleRoleChange,
  handleOkClick,
  setAsDefault,
  handleCheckboxChange,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">Select Company and Role</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Company:
          </label>
          <select
            value={company}
            onChange={handleCompanyChange}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Select a company
            </option>
            <option value="company1">Company 1</option>
            <option value="company2">Company 2</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Role:
          </label>
          <select
            value={role}
            onChange={handleRoleChange}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={setAsDefault}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">
              Set as default for future use
            </span>
          </label>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={handleOkClick}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
