import React from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";

const WhoMakes = ({ list }) => {
  return (
    <div className="max-w-2xl px-4 py-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-4 ">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 py-2">
        Who Makes <span className="text-orange-600 ">Your Food?</span>
      </h2>
      <div className="flex justify-around flex-col lg:flex-row">
        <div className="flex flex-col justify-around ">
          <p className="font-bold text-gray-900 lg:text-lg italic py-2">
            Our mission is to help grow the local food ecosystem in BC and
            across Canada. Why?{" "}
          </p>
          <div className="flex flex-col justify-between">
            {list.map((item, index) => (
              <ul key={index} className="flex py-2  ">
                <CheckCircleIcon className="h-10  flex-none text-white bg-orange-500 rounded-full " />
                <li className="px-2  flex"> {item.Text}</li>
              </ul>
            ))}
          </div>
          <div>
            <a
              href="#"
              className="md:hidden w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-orange-600 rounded-xl hover:bg-orange-500 md:py-4 md:text-lg md:px-10"
            >
              Discover our Producers
            </a>
          </div>
        </div>
        <div className="lg:pl-4">
          <img
            className="hidden md:block w-full"
            src="https://www.rionegro.com.ar/wp-content/uploads/2019/06/Moras2.jpg?resize=1536,1152"
            alt=""
          />
          <div className="hidden md:py-4 md:block lg:hidden">
            <a
              href="#"
              className=" w-full flex items-center justify-center px-8  border border-transparent text-base font-medium text-white bg-orange-600 rounded-xl hover:bg-orange-500 md:py-3 md:text-lg md:px-10"
            >
              Discover our Producers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoMakes;
