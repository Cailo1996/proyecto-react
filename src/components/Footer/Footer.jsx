import React from 'react';
import footerlist from './footerlist/footerlist'
// import './styles.css'


const Footer = () => {
  return (
      {/* <div className="flex flex-row space-x-20 footer-title"> */}
    {
      <div className="flex flex-row h-screen py-6 bg-grey-900">
        <div class="basis-1/4"></div>
        <div class="basis-1/4"><h2>Ocassions</h2></div>
        <div class="basis-1/4"><h2>All Categories</h2></div>
        <div class="basis-1/4"><h2>Gifts & Bundles</h2></div>
        <div class="basis-1/4"><h2>Our Brands</h2></div>
        <div class="basis-1/4"><h2>About Us</h2></div>
      </div>
    }
     )
  
  
  
  
  // <footer className="footer-title">Soy un Footer</footer>;
};

export default Footer;
