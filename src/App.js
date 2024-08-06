import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import List from "./Components/List";
import {
  faSearch,
  faMessage,
  faGear,
  faBell,
  fagrid2,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Status from "./Components/Status";
import BarChart from "./Components/BarChart";
import RecentOrder from "./Components/RecentOrder";
import CustomerFeedback from "./Components/CustomerFeedback";
import './index.css'
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="flex w-full h-screen bg-black">
      {/* Sidebar */}
      <div
        className={`${isOpen ? "w-1/6" : "w-20"} h-full bg-dark-gray`}
        style={{ position: "sticky", top: 0 }}
      >
        <Sidebar setIsOpen={setIsOpen} />
      </div>

      {/* Main Content */}
      <div
        className={`${
          isOpen ? "w-5/6" : "w-calc-custom"
        } flex flex-col overflow-y-auto`}
      >
        {/* Top Bar */}
        <div className="h-16 py-4 bg-dark-gray flex items-center justify-between pl-4 sticky top-0 z-10">
          <div className="relative">
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
        <div className="flex justify-around">
          <div className="bg-dark-gray h-84 w-7/12 mt-10 rounded-lg">
            <BarChart />
          </div>
          <div className="bg-dark-gray w-4/12 mt-10 rounded-lg h-84">
            <List />
          </div>
        </div>
        <div className="flex justify-around max-h-96" 
        // style={{maxHeight : "180px", minHeight : "150px"}}
        >
          <div className="bg-dark-gray w-7/12 mt-10 rounded-lg  min-h-96">
            <RecentOrder />
          </div>
          <div className="bg-dark-gray w-4/12 mt-10 rounded-lg overflow-y-scroll custom-scrollbar" style={{height : '580px'}}>
            <CustomerFeedback/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
