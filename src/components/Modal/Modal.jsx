import React, { useState } from "react";

const Modal = ({ cart, setCart, showModal, setShowModal }) => {
  return (
    <>
      {" "}
      {showModal ? (
        <div className="fixed inset-0 flex items-center justify-center  bg-black/[.5]">
          <div className="flex flex-col items-center justify-center bg-white w-96 h-52 rounded-xl">
            <div className="p-2.5 flex items-center justify-center">
              <h4 _className="m-0">Modal title</h4>
            </div>
            <div className="flex items-center justify-center p-8">
              This is modal content
            </div>
            <div className="p-2.5 flex ">
              <button
                onClick={() => {
                  setCart(cart + 1);
                  setShowModal((prev) => !prev);
                }}
                className="mx-1 text-white bg-orange-600  rounded-xl h-11 hover:opacity-75 w-44"
              >
                Confirmar
              </button>
              <button
                onClick={() => { 
                  setShowModal((prev) => !prev);
                }}
                className="mx-1 text-white bg-orange-600  rounded-xl h-11 hover:opacity-75 w-44"
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
