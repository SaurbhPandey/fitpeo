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
        <div className="h-16 py-4 bg-dark-gray flex items-center justify-between pl-4 sticky top-0 z-10">
          <div className="relative flex items-center">
            {isMobileView && (
              <FontAwesomeIcon
                icon={faBars}
                className="text-white text-xl mr-4"
                onClick={() => setIsMobileSidebarOpen(true)}
              />
            )}
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
          <div className="flex justify-around items-center gap-4 mr-10">
            <div>
              <FontAwesomeIcon icon={faMessage} className="text-white" />
            </div>
            <div>
              <FontAwesomeIcon icon={faGear} className="text-white" />
            </div>
            <div>
              <FontAwesomeIcon icon={faBell} className="text-white" />
            </div>
            <div>
              <img
                src="https://media.gettyimages.com/id/1432570616/photo/millennial-asian-tourist-in-the-city-with-bicycle.jpg?s=612x612&w=0&k=20&c=fSOLE0EnSP0xQ-hsYABAKEtbVitRc-L1BD4MHsvLPX0="
                className="rounded-full h-8 w-8"
              />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4">
          <Status />
        </div>

        {/* Layout for BarChart and List */}
        <div className={`flex ${isMobileView ? "flex-col" : "flex-row"} gap-4 mt-10 mx-4 lg:mx-10`}>
          <div className={`bg-dark-gray rounded-lg ${isMobileView ? "w-full" : "w-7/12"} h-84`}>
            <BarChart />
          </div>
          <div className={`bg-dark-gray rounded-lg ${isMobileView ? "w-full" : "w-5/12"} h-84`}>
            <List />
          </div>
        </div>

        {/* Layout for RecentOrder and CustomerFeedback */}
        <div className={`flex ${isMobileView ? "flex-col" : "lg:flex-row"} lg:justify-between mt-10 mx-4 lg:mx-10`}>
          <div className="bg-dark-gray rounded-lg min-h-96 w-full lg:w-7/12">
            <RecentOrder />
          </div>
          <div className="bg-dark-gray rounded-lg overflow-y-scroll custom-scrollbar w-full lg:w-5/12" style={{ height: '580px' }}>
            <CustomerFeedback />
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
