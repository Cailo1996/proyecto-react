import React, { useState } from "react";

const Modal = ({ cart, setCart, showModal, SetShowModal }) => {
    
  return (
    <> {showModal ?
      <div className="fixed inset-0 flex items-center justify-center  bg-black/[.5]">
        <div className="w-96 h-52 bg-white rounded-xl flex items-center justify-center flex-col">
          <div className="p-2.5 flex items-center justify-center">
            <h4 _className="m-0">Modal title</h4>
          </div>
          <div className="p-8  flex items-center justify-center">
            This is modal content
          </div>
          <div className="p-2.5 w-96">
            <button
              onClick={() => setCart(cart + 1)}
              className="w-full text-white bg-orange-600 rounded-xl h-11 hover:opacity-75"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
      : null}
    </>
  );
};
export default Modal;
