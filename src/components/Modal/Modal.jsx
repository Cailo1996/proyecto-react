import React, {useState} from "react";



const Modal = ({props, cart, setCart}) => {
    /**if (!props.show) {
        return null;
    } */

  return (
    <div className="fixe inset-0 flex items-center justify-center bg-slate-300">
      <div className="w-96 bg-white">
        <div className="p-2.5">
          <h4 _className="m-0">Modal title</h4>
        </div>
        <div className="p-2.5 b">This is modal content</div>
        <div className="p-2.5">
        <button onClick={()=>setCart(cart+1)} className="w-full text-white bg-orange-600 rounded-b-xl h-11 hover:opacity-75">Confirmar</button>
   
       
        </div>
      </div>
    </div>
  );
};
export default Modal;
