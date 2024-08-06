import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faEnvelope,
  faUser,
  faCalendar,
  faSearch,
  faChartBar,
  faFolder,
  faCog,
  faChevronLeft,
  faChevronRight,
  faGrid2
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ setIsOpen }) => {
  const [open, setOpen] = useState(false);
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
  };

  return (
    <div className="flex">
      <div
        className={` w-full
         bg-dark-gray h-screen p-5 pt-8 relative duration-300 flex flex-col justify-between`}
      >
        {/* Top Section */}
        <div>
          <div className="flex gap-x-4 items-center">
            {/* <img
              src="../assets/logo.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            /> */}
            <FontAwesomeIcon  icon="fa-solid fa-grid-2"  className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}/>
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              } text-white`}
            >
              Analytics
            </h1>
          </div>

          <ul className="pt-6">
            {Menus.map((menu, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(index)}
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4
                ${menu.gap ? "mt-9" : "mt-2"}
                ${
                  activeIndex === index
                    ? "bg-light-white"
                    : "hover:bg-light-white"
                }`}
              >
                <FontAwesomeIcon icon={menu.icon} className="text-white" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Toggle Button */}
        <div className="absolute bottom-0 left-0 w-full p-4">
          <button
            className="w-full bg-dark-gray p-2 text-white flex items-center justify-center"
            onClick={() => {
              setOpen(!open);
              setIsOpen(!open);
            }}
          >
            <FontAwesomeIcon
              icon={open ? faChevronLeft : faChevronRight}
              className="text-white"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
