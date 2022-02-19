import React from 'react';
import { navlist } from '../../data/navbar';


const Navbar = () => {
  return (
    <>  
      <div>
          <ul className='flex flex-row'>
            {
              navlist.map(listnavbar => (
                <li>
                  <a href={listnavbar.link}>{listnavbar.namenavbar}</a>
                </li>
              ))  
            }
          </ul>
      </div> 
    </>   
  )
};

export default Navbar;