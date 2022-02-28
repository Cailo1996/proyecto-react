import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {fa-facebook, fa-instagram-square, fa-whatsapp-square} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
// import './Styles.css';

const TellaFriend = () => {
    return (
      <>
      <div>
          <h2>Tell a Friend</h2>
          
          <li>  <FontAwesomeIcon icon={faFacebook} />  </li>
         
          {/* <ul className='flex flex-row'>
              <li> <FontAwesomeIcon icon={fa-facebook} />           </li>
              <li> <FontAwesomeIcon icon={fa-instagram-square} />         </li>
              <li> <FontAwesomeIcon icon={fa-whatsapp-square} />         </li>  
          </ul> */}
      </div>
      </>
      );
}
 
export default TellaFriend;