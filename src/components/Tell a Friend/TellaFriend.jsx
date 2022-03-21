import React from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {fa-facebook, fa-instagram-square, fa-whatsapp-square} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { tellafriends } from "../../data/tellafriend";

const TellaFriend = () => {
  return (
    <>
      <div className="relative">
        <img
          className="h-96 w-full object-cover   lg:w-full  "
          src="https://media.istockphoto.com/vectors/abstract-bright-white-background-geometric-texture-vector-id1199291148?k=20&m=1199291148&s=170667a&w=0&h=9iNN6t0ViCrKTc9O5-6UNK5ouPR1qNXuiyzR3K2qkPI="
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col space-y-9">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Tell a <span className="text-orange-600">Friend</span>{" "}
          </h2>
        <ul className="flex flex-row justify-center flex-wrap">
          {tellafriends.map((listfriend) => (
            <li className="px-8 py-4">
              <div className="bg-orange-500 w-20 h-20  rounded-full flex items-center justify-center flex-wrpa ">
                <a className="text-5xl text-white" href={listfriend.link}>
                  {" "}
                  <FontAwesomeIcon icon={listfriend.icon} />{" "}
                </a>
              </div>
            </li>
          ))}
        </ul>
        
        </div>

        
      </div>
    </>
  );
};

export default TellaFriend;
