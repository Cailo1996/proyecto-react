import React from "react";
import { XIcon } from "@heroicons/react/outline";

const Warning = () => {
  return (
    <div className="bg-stone-400 flex flex-row  ">
      <p className="font-medium text-white grow flex justify-center ">
        Free Delivery over $100. Gift with Purchase over $150
      </p>
      <button className="" type="button">
        <XIcon className="h-4 w-4 text-white mx-4 " />
      </button>
    </div>
  );
};

export default Warning;
