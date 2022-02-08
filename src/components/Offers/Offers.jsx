import React from "react";
import "./styles.css";

const Offers = ({ list }) => {
  return (
    <div className="cards-container">
      {list.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.foto} alt={item.nombre}/>
          <p>{item.nombre}</p>
          <p>{item.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default Offers;
