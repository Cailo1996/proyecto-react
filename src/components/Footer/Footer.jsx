import React from 'react';
import { footList } from '../../data/fdata';
import Logo from './Logo/Logo';


const Footer = () => {
  return (
    <>
      <div className='h-screen pt-8 m-4 bg-orange-50'>

        <div className='grid grid-cols-6 pl-10 text-base font-semibold'>

        {/* <div className='flex space-x-40 text-base py-6 font-semibold'> */}
            <div ><Logo/></div>
            <div className='text-left'>Occasions</div>
            <div >All Categories</div>
            <div >Gift & Bundles</div>
            <div >Our Brands</div>
            <div >About Us</div>
        </div>

          {footList.map((item) => ( 
              <div className='grid grid-cols-6 text-base-base font-light'>
                <div className='col-start-2 text-left'>{item.description}</div>
                <div className='col-start-3 text-left'>xxxxxxxxxxxxxxxxx</div>
                <div className='col-start-4 col-span-6 text-left'>xxxxxxxxxxxxxxxxx</div>
              
                {/* <ul> */}
                  {/* <li className='px-40 text-base font-light'>{item.description}</li> */}
                  {/* <li >{item.description}</li> */}
                {/* </ul> */}
              </div>
         ))}
      </div>
    </>
  ) 
 };

 export default Footer;
