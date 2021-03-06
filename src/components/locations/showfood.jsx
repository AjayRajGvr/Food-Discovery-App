import React from 'react';
import HotelImage from '../../assets/hotel.jpg'
import './showfood.styles.css';

const ShowFood = ({id,name,dishes}) => (
    <div className="row-food" >
        <div className="column-food">
        <article className='card-food'  >
        <header>
            <h2>{name}</h2>
        </header>
        <img src={HotelImage} alt='hotel image' style={{width:'100%',height:'100%'}} />
        <div className='container'>
            <p><h3>Available Dishes:</h3><h4>{dishes}</h4></p>
        </div>
        </article>

        </div>
    </div>
)
export default ShowFood;