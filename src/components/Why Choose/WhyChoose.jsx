import React from 'react';

const WC = ({list}) => {
    return (
        <div className="bg-white">
          <div className="max-w-2xl px-4 py-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Why Choose<span className="text-orange-600 "> the Premium Bakery Quality </span></h2>
    
            <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
              {list.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="w-full min-h-20 aspect-w-1 aspect-h-1 lg:h-20 lg:aspect-none">
                    <img
                      src={item.icono}
                      alt={item.nombre}
                      className=" w-14 "
                    />
                  </div>
                  <div className="flex-col ">
                    <div>
                      <h3 className="font-bold text-gray-900 lg:text-lg italic decoration-orange-500 ">{item.nombre}</h3>
                    </div>                  
                    <p className=" text-gray-900 lg:text-base ">{item.descripcion} </p>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}
 
export default WC
;