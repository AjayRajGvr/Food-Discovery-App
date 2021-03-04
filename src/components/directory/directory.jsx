import React from 'react';
//import MenuItem from '../menu-item/menuitem'; 
import './directory.styles.css'; 
import kochiImage from '../../assets/kochi.jpg'; 
import bangaloreImage from '../../assets/bangalore.jpg';
import hyderabadImage from '../../assets/hyderabad.jpg';

import {Link} from 'react-router-dom';
const Directory = () => (

<div classname='row' >
    <div className='column'>
   <div className='card'>
       <img src={kochiImage} alt='kochi' style={{width:'100%' }} />
      
       <Link to='/kochi' >
           <div className='container'>
           <h4><b>view restraunts in Kochi</b></h4>
           </div>   
       </Link>
       </div>
       </div>
       <div className='column'>
   <div className='card'>
       <img src={bangaloreImage} alt='bangalore' style={{width:'100%'}} />
      
       <Link to='/bangalore' >
           <div className='container'>
           <h4><b>view restraunts in Bangalore</b></h4>
           </div>   
       </Link>
       </div>
       </div>
       <div className='column'>
   <div className='card'>
       <img src={hyderabadImage} alt='kochi' style={{width:'100%'}} />
      
       <Link to='/hyderabad' >
           <div className='container'>
           <h4><b>view restraunts in hyderabad</b></h4>
           </div>   
       </Link>
       </div>
       </div>


</div>
);




export default Directory;