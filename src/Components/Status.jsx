import React from "react";
import TotalOrders from "../assets/TotalOrders.png";
import Cancelled from "../assets/Cancelled.png";
import DeliveredOrders from "../assets/DeliveredOrders.png";
import Revenue from "../assets/Revenue.png";
import Decrase from "../assets/Decrease.png";
import Increase from "../assets/Increase.png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
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
      name: "Total Deliverd",
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
    <div>
      <h1 className="text-white font-bold text-xl ml-6 mt-4">Dashboard</h1>
      <div className="flex justify-around mt-8">
        {cardArr.map((card) => (
          <div className="h-36 w-60 bg-dark-gray ml-6 rounded-lg">
            <div>
              <img
                src={card.src}
                className="w-12 h-12 rounded-full bg-white ml-6 mt-5"
              />
            </div>
            <div>
              <h1 className="font-semibold text-white ml-6 ">{card.name}</h1>
            </div>
            <div className="flex justify-between items-center mt-2 ml-6 mr-6">
              <h1 className="font-bold text-2xl text-white ">{card.count}</h1>
              <div className="flex justify-around items-center">
                <img
                  src={card.type === "Increase" ? Increase : Decrase}
                  className="w-4 h-4 "
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
        <div className="text-white h-36 w-72  bg-dark-gray ml-6 rounded-lg">
          <div className="flex flex-col ml-4 justify-between">
            <div>
              <h1 className="text-white mt-3 font-semibold">Net Profit</h1>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-start justify-around ">
                <div>
                  <h1 className="font-bold text-3xl">$6759.25</h1>
                </div>
                <div className="w-4 h-4 ">
                  <img src={Increase} alt="" />
                  <h1 className="text-green-500 ">3%</h1>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center pr-4">
                <DoughnutChart />
                <h1>Total Revenue</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
