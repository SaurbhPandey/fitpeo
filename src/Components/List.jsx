import React from "react";
import goal from "../assets/goal.png";
import arrow from "../assets/arrow.png";
import dinner from "../assets/dinner.png";
import menu from "../assets/menu.png"
const List = () => {
  const list = [
    {
      name: "Goals",
      icon: goal,
    },
    {
      name: "Dishes",
      icon: dinner,
    },
    {
      name: "Menu",
      icon: menu,
    },
    {
      name: "Goals",
      icon: goal,
    },
  ];
  return (
    <div>
      {list.map((item) => (
        <div className="flex justify-between items-center">
          <div className="flex mt-8 ml-6 items-center">
            <img src={item.icon} alt="" className="w-16 h-16" />
            <h1 className="font-semibold text-white ml-8">{item.name}</h1>
          </div>
          <div className="mr-8 mt-8">
            <img src={arrow} alt="" className="w-6 h-6"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
