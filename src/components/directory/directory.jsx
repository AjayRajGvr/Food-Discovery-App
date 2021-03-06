import React from 'react';
//import MenuItem from '../menu-item/menuitem'; 
import './directory.styles.scss'; 
import kochiImage from '../../assets/kochi.jpg'; 
import bangaloreImage from '../../assets/bangalore.jpg';
import hyderabadImage from '../../assets/hyderabad.jpg';

import {Link} from 'react-router-dom';
const Directory = () => (

<div classname='row' >
    <div className='column'>
   <div className='card'>
       <img src={kochiImage} alt='kochi' style={{width:'100%', height:'100%' }} />
      
       <Link to='/kochi' className='link' >
           <div className='container'>
           <h3><b>View Restaurants in Kochi</b></h3>
           </div>   
       </Link>
       </div>
       </div>
       <div className='column'>
   <div className='card'>
       <img src={bangaloreImage} alt='bangalore' style={{width:'100%',height:'100%'}} />
      
       <Link to='/bangalore' className='link' >
           <div className='container'>
           <h3><b>View Restaurants in Bangalore</b></h3>
           </div>   
       </Link>
       </div>
       </div>
       <div className='column'>
   <div className='card'>
       <img src={hyderabadImage} alt='kochi' style={{width:'100%'}} />
      
       <Link to='/hyderabad' className='link' >
           <div className='container'>
           <h3><b>View Restaurants in hyderabad</b></h3>
           </div>   
       </Link>
       </div>
       </div>


</div>
);




export default Directory;