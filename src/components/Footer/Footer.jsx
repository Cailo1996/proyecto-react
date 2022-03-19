import React from 'react';
import { footList } from '../../data/fdata';
import Logo from './Logo/Logo';


const Footer = () => {
  return (
    <>
        <div className='h-screen pt-12 m-4 bg-orange-50'>

          <div className='flex flex-row flex-wrap pl-8 text-base font-semibold'>
            <div className='basis-2/12'><Logo/></div>
            <div className='basis-2/12'>Occasions</div>
            <div className='basis-2/12'>All Categories</div>
            <div className='basis-2/12'>Gift & Bundles</div>
            <div className='basis-2/12' >Our Brands</div>
            <div className='basis-2/12'>About Us</div>
          </div>

          {footList.map((item) => (  
            <div className='flex flex-row space-y-2 text-base font-normal flex-nowrap' >
              <div className='pl-20 ml-8 text-center basis-4/12 hover:underline cursor-pointer'>{item.description1}</div>
              <div className='text-left basis-1/6 hover:underline cursor-pointer'>{item.description2}</div>
              <div className='text-left basis-6/12 hover:underline cursor-pointer'>{item.description3}</div>
            </div>
          ))}
        </div>
    </>
  )
};
export default Footer;

