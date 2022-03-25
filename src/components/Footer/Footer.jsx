import React from "react";

const Footer = ({ list }) => {
  return (
    <div className="p-8 bg-orange-500 w-full">
      <div className="flex justify-around flex-col lg:flex-row">
        <div className="lg:w-1/4 flex justify-center pb-4 lg:justify-start">
          <img
            className="w-auto h-52 rounded-full"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-bakery-logo-design-template-e979c6db88d6772062e4090687c00b7e_screen.jpg?ts=1602149907"
            alt="Panadería"
          />
        </div>
        <div className="flex lg:justify-around lg:w-3/4 flex-col lg:flex-row">
          {list.map((item, index) => (
            <div key={index} className="flex-col">
              <h2 className="py-8 font-bold flex justify-center lg:justify-start"> {item.title}</h2>
              <ul>
                {item.list.map((item, index) => (
                  <li className="py-1" key={index}>
                    <button> {item}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
