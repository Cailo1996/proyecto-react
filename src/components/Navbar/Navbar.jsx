import React from 'react';
import { navlist } from '../../data/navbar';
import Logo from './Logo/Logo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faUser, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './icon.css'


const Navbar = () => {
  return (
    <>  
      <div className='flex justify-between flex items-center'>
          <div>
              <ul className='flex flex-row space-x-10 flex items-center ml-10 font-sans'>
              <Logo />
              
                {
                  navlist.map(listnavbar => (
                    <li>
                      <a href={listnavbar.link}>{listnavbar.namenavbar}</a>
                    </li>
                  ))  
                }
              </ul>
          </div>
                
          <div>
              <ul className='flex flex-row flex items-center space-x-10 fa-lg'>
                  <li className='rounded-full outline outline-offset-8 outline-1 outline-gray-300'>  <FontAwesomeIcon icon={faMagnifyingGlass} />  </li>
                  <li className='rounded-full outline outline-offset-8 outline-1 outline-gray-300'>  <FontAwesomeIcon icon={faUser} />  </li>
                  
                  <li className='rounded-full outline outline-offset-8 outline-1 outline-gray-300'>  <FontAwesomeIcon icon={faShoppingCart} /></li>
                     
                  
              </ul>
          </div>
      </div>
    </>   
  )
};

export default Navbar;