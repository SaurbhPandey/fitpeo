import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import MobileSidebar from "./Components/MobileSidebar";
import List from "./Components/List";
import {
  faSearch,
  faMessage,
  faGear,
  faBell,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Status from "./Components/Status";
import BarChart from "./Components/BarChart";
import RecentOrder from "./Components/RecentOrder";
import CustomerFeedback from "./Components/CustomerFeedback";
import './index.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex w-full h-screen bg-black relative">
      {/* Sidebar for Desktop */}
      {!isMobileView && (
        <div
          className={`${isOpen ? "w-1/6" : "w-20"} h-full bg-dark-gray hidden md:block`}
          style={{ position: "sticky", top: 0 }}
        >
          <Sidebar setIsOpen={setIsOpen} />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`${
          isOpen ? "w-5/6" : "w-calc-custom"
        } flex flex-col overflow-y-auto`}
      >
        {/* Top Bar */}
        <div className={`h-16 py-4 bg-dark-gray flex items-center justify-between pl-4 sticky top-0 z-10 ${isMobileView ? "md:hidden" : ""}`}>
          {/* Mobile View Top Bar */}
          {isMobileView && (
            <div className="flex w-full items-center">
              <FontAwesomeIcon
                icon={faBars}
                className="text-white text-xl mr-4"
                onClick={() => setIsMobileSidebarOpen(true)}
              />
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
              <img
                src="https://media.gettyimages.com/id/1432570616/photo/millennial-asian-tourist-in-the-city-with-bicycle.jpg?s=612x612&w=0&k=20&c=fSOLE0EnSP0xQ-hsYABAKEtbVitRc-L1BD4MHsvLPX0="
                className="rounded-full h-8 w-8 ml-4"
                alt="User"
              />
            </div>
          )}
          {/* Desktop View Top Bar */}
          {!isMobileView && (
            <div className="relative flex items-center">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"
              />
              <input
                type="text"
                className="w-64 h-8 pl-10 bg-gray-500 rounded-sm text-white placeholder-white"
                placeholder="Search"
              />
            </div>
          )}
          {!isMobileView && (
            <div className="flex items-center gap-4 mr-10">
              <FontAwesomeIcon icon={faMessage} className="text-white" />
              <FontAwesomeIcon icon={faGear} className="text-white" />
              <FontAwesomeIcon icon={faBell} className="text-white" />
              <img
                src="https://media.gettyimages.com/id/1432570616/photo/millennial-asian-tourist-in-the-city-with-bicycle.jpg?s=612x612&w=0&k=20&c=fSOLE0EnSP0xQ-hsYABAKEtbVitRc-L1BD4MHsvLPX0="
                className="rounded-full h-8 w-8"
                alt="User"
              />
            </div>
          )}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4">
          <Status />
          <div className={`flex ${isMobileView ? "flex-col" : "flex-row"} gap-4 mt-10 mx-4 lg:mx-10`}>
            <div className={`bg-dark-gray rounded-lg ${isMobileView ? "w-full" : "w-7/12"} h-84`}>
              <BarChart />
            </div>
            <div className={`bg-dark-gray rounded-lg ${isMobileView ? "w-full" : "w-5/12"} h-84`}>
              <List />
            </div>
          </div>
          <div className={`flex ${isMobileView ? "flex-col" : "lg:flex-row"} gap-4 mt-10 mx-4 lg:mx-10`}>
            <div className={`bg-dark-gray rounded-lg ${isMobileView ? "w-full mb-6" : "lg:w-7/12"} min-h-96`}>
              <RecentOrder />
            </div>
            <div className={`bg-dark-gray rounded-lg overflow-y-auto custom-scrollbar ${isMobileView ? "w-full" : "lg:w-5/12"} min-h-96`} style={{ maxHeight: '580px' }}>
              <CustomerFeedback />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileView && isMobileSidebarOpen && (
        <MobileSidebar setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
      )}
    </div>
  );
};

export default App;
