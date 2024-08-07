import React from "react";
import TotalOrders from "../assets/TotalOrders.png";
import Cancelled from "../assets/Cancelled.png";
import DeliveredOrders from "../assets/DeliveredOrders.png";
import Revenue from "../assets/Revenue.png";
import Decrase from "../assets/Decrease.png";
import Increase from "../assets/Increase.png";
import DoughnutChart from "./DoughnutChart";

const Status = () => {
  const cardArr = [
    {
      name: "Total Orders",
      count: "75",
      percentage: "3%",
      src: TotalOrders,
      type: "Increase",
    },
    {
      name: "Total Delivered",
      count: "70",
      percentage: "3%",
      src: DeliveredOrders,
      type: "Decrease",
    },
    {
      name: "Total Cancelled",
      count: "05",
      percentage: "3%",
      src: Cancelled,
      type: "Increase",
    },
    {
      name: "Total Revenue",
      count: "$12k",
      percentage: "3%",
      src: Revenue,
      type: "Decrease",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-white font-bold text-xl ml-6 mt-4">Dashboard</h1>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 mt-8">
        {cardArr.map((card, index) => (
          <div
            key={index}
            className="bg-dark-gray rounded-lg p-4 flex flex-col items-center flex-1 min-w-[200px] lg:max-w-[280px]"
          >
            <div className="flex justify-center">
              <img
                src={card.src}
                className="w-12 h-12 rounded-full bg-white"
              />
            </div>
            <div className="mt-4 text-center">
              <h1 className="font-semibold text-white">{card.name}</h1>
              <h1 className="font-bold text-2xl text-white mt-2">{card.count}</h1>
              <div className="flex justify-center items-center mt-2">
                <img
                  src={card.type === "Increase" ? Increase : Decrase}
                  className="w-4 h-4"
                />
                <h1
                  className={`font-semibold ${
                    card.type === "Increase" ? "text-green-600" : "text-red-600"
                  } ml-2`}
                >
                  {card.percentage}
                </h1>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-dark-gray rounded-lg p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:flex-grow lg:max-w-[400px]">
          <div className="flex flex-col items-center lg:items-start lg:mr-4">
            <h1 className="text-white mt-3 font-semibold text-center lg:text-left">Net Profit</h1>
            <div className="flex flex-col items-center lg:items-start lg:mt-4">
              <h1 className="font-bold text-3xl mt-2 lg:mt-0">$6759.25</h1>
              <div className="flex items-center mt-2">
                <img src={Increase} alt="Increase" className="w-4 h-4" />
                <h1 className="text-green-500 ml-2">3%</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start lg:mt-4">
            <DoughnutChart />
            <h1 className="text-white mt-2">Total Revenue</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
