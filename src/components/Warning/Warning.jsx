import React from "react";

const Warning = () => {
  const [showAlert, setShowAlert] = React.useState(true);
  return (
    <>
      {showAlert && (
        <div className="bg-stone-400 flex flex-row ">
          <p className="font-semibold text-white grow flex justify-center  ">
            Free Delivery over $100. Gift with Purchase over $150
          </p>
          <button
            className="text-white text-2xl font-semibold align-middle mr-4 "
            onClick={() => setShowAlert(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ) }
    </>
  );
};
export default Warning;
