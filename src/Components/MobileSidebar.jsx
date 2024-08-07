// Components/MobileSidebar.js
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch, faMessage, faGear, faBell } from "@fortawesome/free-solid-svg-icons";

const MobileSidebar = ({ setIsMobileSidebarOpen }) => {
  return (
    <div className="fixed inset-x-0 top-0 bg-dark-gray z-50 shadow-lg">
      {/* Top Section of Mobile Sidebar */}
      <div className="flex justify-between items-center p-4 bg-black">
        <h1 className="text-white">Menu</h1>
        <FontAwesomeIcon
          icon={faTimes}
          className="text-white text-2xl"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      </div>

      {/* Search Bar and Icons */}
      <div className="bg-dark-gray p-4 flex items-center justify-between">
        <div className="relative flex-1">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"
          />
          <input
            type="text"
            className="w-full h-8 pl-10 bg-gray-500 rounded-sm text-white placeholder-white"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center gap-4 ml-4">
          <FontAwesomeIcon icon={faMessage} className="text-white" />
          <FontAwesomeIcon icon={faGear} className="text-white" />
          <FontAwesomeIcon icon={faBell} className="text-white" />
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="p-4">
        <p className="text-white">Sidebar Content for Mobile</p>
        {/* You can add more sidebar items or navigation links here */}
      </div>
    </div>
  );
};

export default MobileSidebar;
