import React from 'react';




const WC = ({list}) => {
    return (
        <div className="bg-white">
          <div className="max-w-2xl px-4 py-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Why Choose<span className="text-orange-600"> the Premium Bakery Quality</span></h2>
    
            <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
              {list.map((item, index) => (
                <div key={index} className="relative shadow-xl group rounded-xl shadow-gray-500">
                  <div className="w-full min-h-80 aspect-w-1 aspect-h-1 lg:h-80 lg:aspect-none">
                    <img
                      src={item.icono}
                      alt={item.nombre}
                      className="object-cover object-center w-full h-64 rounded-t-xl sm:h-80 "
                    />
                  </div>
                  <div className="flex justify-around my-4 ">
                    <div>
                      <h3 className="font-bold text-gray-900 lg:text-sm">{item.nombre}</h3>
                    </div>                  
                    <p className="font-bold text-gray-900 lg:text-sm">{item.descripcion} <span className="text-sm font-medium text-gray-500 line-through lg:text-xs">{item.antes}</span></p>
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