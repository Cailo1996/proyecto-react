import React, { useState } from "react";

const Modal = ({ cart, setCart, showModal, setShowModal }) => {
  return (
    <>
      {" "}
      {showModal ? (
        <div  className="fixed inset-0 flex items-center justify-center  bg-black/[.5]">
          <div className="flex flex-col items-center justify-center bg-white md:w-96 md:h-52 rounded-xl">
            <div className="p-2.5 flex items-center justify-center">
              <h4 className="m-0 text-2xl font-extrabold tracking-tight text-gray-900 ">¡Se agregara a tu <span className="text-orange-600">Carrito</span> !</h4>
            </div>
            <div className="flex items-center justify-center p-8">
              <h6 className="font-bold text-gray-900"> Producto</h6>
            </div>
            <div className="p-2.5 flex flex-col s:flex-row ">
              <button
                onClick={() => {
                  setCart(cart + 1);
                  setShowModal((prev) => !prev);
                }}
                className="mx-1 my-1 text-white bg-orange-600 rounded-xl h-11 hover:opacity-75 w-64 s:w-44"
              >
                Confirmar
              </button>
              <button
                onClick={() => { 
                  setShowModal((prev) => !prev)
                }}
                className="mx-1 my-1 text-white bg-red-700 rounded-xl h-11 hover:opacity-75 w-64 s:w-44"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Modal;
