import React from "react";

const OurPartner = ({ title, icon, bt }) => {
  return (
    <div >
      <div className="relative py-8">
        <img
          className="h-72 w-full object-cover  md:h-96 lg:w-full lg:h-96 "
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a781ce32751817.56929eefe4f71.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-2xl tracking-tight font-extrabold text-center text-gray-900 sm:text-3xl md:text-4xl">
              <span className="block xl:inline">{title}</span>
            </h1>
            <div className="flex justify-center my-2 h-auto w-32 ">
            <img src={icon} alt="" className="rounded-full " />  
            </div>
            
            
            <div className="">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-orange-600 rounded-xl hover:bg-orange-500 md:py-4 md:text-lg md:px-10"
                >
                  {bt}
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
export default OurPartner;
