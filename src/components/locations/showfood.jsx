import React from 'react';
import HotelImage from '../../assets/hotel.jpg'
//import './showfood.styles.css';

const ShowFood = ({id,name,dishes}) => (
    <div >
        <article class="card">
        <header>
            <h2>{name}</h2>
        </header>
        <img src={HotelImage} alt='hotel image' />
        <div className='content'>
            <p><h3>Available Dishes:</h3>{dishes}</p>
        </div>
        </article>

       
    </div>
)
export default ShowFood;