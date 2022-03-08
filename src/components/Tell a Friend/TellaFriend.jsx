import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {fa-facebook, fa-instagram-square, fa-whatsapp-square} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons';
import {tellafriends} from '../../data/tellafriend'


const TellaFriend = () => {
    return (
      <>
      <div className='bg-yellow-200'>
            <div className='flex justify-center mb-6'> 
                <h2>Tell a Friend</h2>
            </div> 
                            
            <ul className='flex flex-row justify-center'>
                 {
                  tellafriends.map(listfriend => (
                    <li className='px-8'>     
                        <a href={listfriend.link}> <FontAwesomeIcon icon={listfriend.icon} />  </a>  
                    </li>
                  ))  
                }
            </ul>

      </div>
      </>
      );
}
 
export default TellaFriend;