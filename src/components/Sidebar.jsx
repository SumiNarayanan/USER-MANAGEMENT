

import React, { useState } from 'react';
import { FaBars, FaHome, FaUser, FaCog, FaChartLine, FaEnvelope, FaQuestionCircle } from 'react-icons/fa'; // Importing more icons for the menu

const Sidebar = ({ menuData, isSidebarOpen, toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const getMenuIcon = (label) => {
    switch (label) {
      case 'Home':
        return <FaHome />;
      case 'Profile':
        return <FaUser />;
      case 'Settings':
        return <FaCog />;
      case 'Analytics':
        return <FaChartLine />;
      case 'Messages':
        return <FaEnvelope />;
      case 'Support':
        return <FaQuestionCircle />;
      default:
        return <FaHome />;
    }
  };

  return (
    <div className={`bg-gray-900 text-white h-screen transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} fixed top-0 left-0 shadow-lg`}>
      <div className="flex items-center justify-between p-4">
        {isSidebarOpen && <h2 className="text-2xl font-bold">Dashboard</h2>}
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <FaBars />
        </button>
      </div>
      <ul className="space-y-2">
        {menuData.map((menuItem, index) => (
          <li key={index} className="hover:bg-gray-700 rounded-lg">
            <div
              onClick={() => handleMenuClick(menuItem.label)}
              className="cursor-pointer flex items-center justify-between p-3"
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{getMenuIcon(menuItem.label)}</span>
                {isSidebarOpen && <span className="text-md font-semibold">{menuItem.label}</span>}
              </div>
              {isSidebarOpen && (
                <span className="text-lg">{activeMenu === menuItem.label ? '-' : '+'}</span>
              )}
            </div>
            {isSidebarOpen && activeMenu === menuItem.label && (
              <ul className="pl-8">
                {menuItem.submenus.map((submenu, subIndex) => (
                  <li key={subIndex} className="p-2 hover:bg-gray-600 rounded-lg">
                    {submenu}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
