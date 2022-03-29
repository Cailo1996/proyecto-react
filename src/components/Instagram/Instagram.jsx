// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../data/Instagram";
import "./instagram.css";

export default function Instagram ({list}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };

  return (
    <>
      <div className="flex justify-center py-8  ">
        <h2 className="text-2xl tracking-tight font-extrabold text-center text-orange-500 sm:text-3xl md:text-4xl">@PremiumBakeryQuality <span className="text-gray-900">on Instagram</span> </h2>
      </div>
      <div className="ContainerHorizontal" >
        <Slider {...settings} >
          {list.map((item, index) => (
            <div key={index} className="cardSlide" >
              <img src={item.foto} alt={item.nombre} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}



