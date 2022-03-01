import React from 'react';
import { footList } from '../../data/fdata';

const Footer = () => {
  return (
    <>
    <div className='h-screen pt-8 m-10 bg-orange-50'>
      <div className='flex space-x-40 text-base py-6 font-semibold'>
        <div >         </div>
        <div >Occasions</div>
        <div >All Categories</div>
        <div >Gift & Bundles</div>
        <div >Our Brands</div>
        <div >About Us</div>
      </div>

    {footList.map((item) => ( 
            
                <ul>
                  <li className='mx-40 text-base font-light'>{item.description}</li>
                </ul>
            
        ))}
    </div>
    </>
  ) 
 };

 export default Footer;
