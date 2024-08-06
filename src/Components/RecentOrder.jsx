import React from "react";

const RecentOrder = () => {
  const orderData = [
    {
      info: {
        img: "https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?s=612x612&w=0&k=20&c=zn4YXiU1RX4-DHz8XNSSB3PoEKBxpfeFtRTESWX6OWQ=",
        name: "Jack Anderson",
      },
      orderStatus: "Delivered",
      amount: "$350",
      orderNo: "ASGDGF-432",
    },
    {
      info: {
        img: "https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?s=612x612&w=0&k=20&c=zn4YXiU1RX4-DHz8XNSSB3PoEKBxpfeFtRTESWX6OWQ=",
        name: "Shaun Tait",
      },
      orderStatus: "Pending",
      amount: "$320",
      orderNo: "ASGCXF-432",
    },
    {
      info: {
        img: "https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?s=612x612&w=0&k=20&c=zn4YXiU1RX4-DHz8XNSSB3PoEKBxpfeFtRTESWX6OWQ=",
        name: "Micheal Ford",
      },
      orderStatus: "Delivered",
      amount: "$650",
      orderNo: "ASARGF-4324",
    },
    {
      info: {
        img: "https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?s=612x612&w=0&k=20&c=zn4YXiU1RX4-DHz8XNSSB3PoEKBxpfeFtRTESWX6OWQ=",
        name: "Jack Anderson",
      },
      orderStatus: "Delivered",
      amount: "$350",
      orderNo: "ASGDGF-432",
    },
    {
      info: {
        img: "https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?s=612x612&w=0&k=20&c=zn4YXiU1RX4-DHz8XNSSB3PoEKBxpfeFtRTESWX6OWQ=",
        name: "Jack Anderson",
      },
      orderStatus: "Delivered",
      amount: "$350",
      orderNo: "ASGDGF-432",
    },
    {
      info: {
        img: "https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?s=612x612&w=0&k=20&c=zn4YXiU1RX4-DHz8XNSSB3PoEKBxpfeFtRTESWX6OWQ=",
        name: "Jack Anderson",
      },
      orderStatus: "Pending",
      amount: "$350",
      orderNo: "ASGDGF-432",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-white font-bold text-xl ml-5 mt-5">Recent Orders</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-dark-gray">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider text-white">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Order No.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-dark-gray divide-y ">
            {orderData.map((item) => (
              <tr key={item.orderNo} className="bg-dark-gray">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  <div className="flex items-center">
                    <img
                      src={item.info.img}
                      alt=""
                      className="h-12 w-12 rounded-full"
                    />
                    <h1 className="ml-4">{item.info.name}</h1>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {item.orderNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {item.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <h1
                    className={`${
                      item.orderStatus === "Delivered"
                        ? "text-green-500 bg-green-300"
                        : "text-red-500 bg-red-300"
                    } rounded-lg py-1 px-2 w-20 align-middle text-center`}
                  >
                    {item.orderStatus}
                  </h1>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrder;
