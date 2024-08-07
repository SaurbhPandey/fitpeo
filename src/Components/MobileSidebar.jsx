import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSearch,
  faMessage,
  faGear,
  faBell,
  faChartLine,
  faEnvelope,
  faUser,
  faCalendar,
  faChartBar,
  faFolder,
  faCog
} from "@fortawesome/free-solid-svg-icons";

const MobileSidebar = ({ setIsMobileSidebarOpen }) => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active item

  const Menus = [
    { title: "Dashboard", icon: faChartLine },
    { title: "Inbox", icon: faEnvelope },
    { title: "Accounts", icon: faUser, gap: true },
    { title: "Schedule", icon: faCalendar },
    { title: "Search", icon: faSearch },
    { title: "Analytics", icon: faChartBar },
    { title: "Files", icon: faFolder, gap: true },
    { title: "Setting", icon: faCog },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index); // Update the active item index
    // Optionally close the sidebar after an item is clicked
    setIsMobileSidebarOpen(false);
  };

  return (
    <div className="fixed inset-x-0 top-0 bg-dark-gray z-50 shadow-lg">
      {/* Top Section of Mobile Sidebar */}
      <div className="flex justify-between items-center p-4 bg-dark-gray">
        <h1 className="text-white font-bold text-xl">Fitpeo</h1>
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

      {/* Sidebar Menu Items */}
      <div className="p-4">
        <ul>
          {Menus.map((menu, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={`flex items-center gap-4 p-2 cursor-pointer text-gray-300 text-sm rounded-md ${
                activeIndex === index ? "bg-light-white" : "hover:bg-light-white"
              }`}
            >
              <FontAwesomeIcon icon={menu.icon} className="text-white" />
              <span className="text-white">{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;
