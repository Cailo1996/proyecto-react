import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="h-64 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-96 "
          src="https://media-exp1.licdn.com/dms/image/C511BAQFKcHgnNokmfw/company-background_10000/0/1548870617921?e=2159024400&v=beta&t=LvrP2gIEVkf8HTeI9HgBrGeihbYapuuqh7803UvtlUw"
          alt=""
        />
        <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 absolute inset-0">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Support Your Local Artisans</span>
            </h1>
            <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Discover brands and theit stories
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-orange-600 rounded-xl hover:bg-orange-500 md:py-4 md:text-lg md:px-10"
                >
                  Browse bands
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
