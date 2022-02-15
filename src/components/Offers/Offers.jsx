import React from "react";


const Offers = ({ list }) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Latest <span className="text-orange-600">Offers</span></h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {list.map((item, index) => (
            <div key={index} className="group relative rounded-xl shadow-xl shadow-gray-500">
              <div className="w-full min-h-80 aspect-w-1 aspect-h-1 lg:h-80 lg:aspect-none">
                <img
                  src={item.foto}
                  alt={item.nombre}
                  className="w-full h-64 object-center object-cover rounded-t-xl sm:h-80 "
                />
              </div>
              <div className="my-4 flex justify-around ">
                <div>
                  <h3 className="text-gray-900 font-bold lg:text-sm">{item.nombre}</h3>
                </div>                  
                <p className="text-gray-900 font-bold lg:text-sm">{item.precio} <span className="lg:text-xs text-sm font-medium text-gray-500 line-through">{item.antes}</span></p>
              </div>
              <div>
                <button className="bg-orange-600 w-full rounded-b-xl h-11 text-white hover:opacity-75">Comprar</button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
