import React from 'react';
import { footList } from '../../data/fdata';

const Footer = () => {
  return (
    <>
    <div>
    {footList.map((item) => (
            
                <ul>
                  <li>{item.description}</li>
                </ul>
            
        ))}
    </div>
    </>
  ) 
 };

 export default Footer;
