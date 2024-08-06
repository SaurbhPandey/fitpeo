import React from "react";
import Rating from "./Rating";
import '../index.css'

const CustomerFeedback = () => {
  const data = [
    {
      img: "https://via.placeholder.com/150",
      name: "Jenny Wilson",
      rating: "5",
      feedback:
        "I wanted to let you know that your recent work was impressive. The quality and attention to detail were excellent, and the project was delivered on time.",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "John Doe",
      rating: "4",
      feedback:
        "The project was well executed and met our expectations. However, there were a few delays that could be improved upon. Overall, good work!",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Emily Davis",
      rating: "5",
      feedback:
        "Excellent job! The final deliverable was top-notch, and the attention to detail was outstanding. I especially appreciated the timely updates and clear communication throughout the process.",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Michael Brown",
      rating: "3",
      feedback:
        "The work was satisfactory, but there were some issues with the initial planning and execution. More thorough planning and clearer documentation would help in the future.",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Sarah Johnson",
      rating: "4",
      feedback:
        "Great work overall. The quality was good, but there were minor issues that need to be addressed. More attention to detail in the initial stages would be beneficial.",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "David Smith",
      rating: "5",
      feedback:
        "Fantastic job! Everything was delivered as expected, and the quality was excellent. Your professionalism and ability to meet deadlines were much appreciated.",
    },
  ];

  return (
    <div className="">
      <div className="text-xl font-bold text-white ml-4 mt-6">Customer's Feedback</div>
      <div>
        {data.map((item, index) => (
          <div
            key={index} // Adding a unique key to each item
            className={`py-4 ${
              index !== data.length - 1 ? "border-b border-white" : ""
            }`} // Add border only if not the last item
          >
            <div className="flex justify-start items-center mb-2 ml-4">
              <img src={item.img} alt="" className="w-16 h-16 rounded-full" />
              <h1 className="text-white ml-4">{item.name}</h1>
            </div>
            <div className="mb-2 ml-4">
              <Rating />
            </div>
            <div className="ml-4 mr-4">
              <h4 className="text-white">{item.feedback}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
