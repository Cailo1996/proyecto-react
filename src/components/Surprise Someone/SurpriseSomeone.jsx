import React from "react";

const SurpriseSomeOne = ({ list }) => {
  return (
    <div className="max-w-2xl px-4 py-8 mx-auto sm:px-6 lg:max-w-7xl lg:px-4 ">
      <div className="flex justify-around flex-col lg:flex-row">
        <div className="lg:pr-4">
          <img
            className="hidden md:block w-full "
            src="https://images.pexels.com/photos/5634637/pexels-photo-5634637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-around ">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 pt-2">
            Surprise Someone{" "}
            <span className="text-2xl font-extrabold tracking-tight text-orange-500 pb-2">
              <br />
              Working from Home
            </span>
          </h2>
          <div className="flex flex-col justify-between">
            {list.map((item, index) => (
              <div key={index} className="flex py-2  ">
                <p className="px-2 font-bold text-gray-900 lg:text-lg italic  flex"> {item.Text}</p>
              </div>
            ))}
          </div>
          <div>
            <a
              href="#"
              className="  w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-orange-600 rounded-xl hover:bg-orange-500 md:py-4 md:text-lg md:px-10"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurpriseSomeOne;
