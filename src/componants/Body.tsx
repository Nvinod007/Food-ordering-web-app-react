import RestaurantCard from './RestaurantCard';
import React, { useState, useEffect } from 'react';
import Shimmer from './shimmer';
import { SWIGGY_API } from '../utils/constants';

const Body = () => {


  const [restaurant, setRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  let resList = []

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(SWIGGY_API);
        const jsonData = await data.json();
        console.log('jsonData', jsonData);
        console.log('data', jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        
        setRestaurant(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        resList = restaurant

      } catch (error) {
        console.log('error while fetching:-', error)
      }

    }
    fetchData();
  }, [])

  return restaurant.length === 0 ? <Shimmer /> : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input type='text'
            className='search-box'
            value={searchText}
            onChange={(value) => { setSearchText(value.target.value) }} />
          <button
            onClick={() => {
              console.log('searchText', searchText)
              const filteredList = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
              console.log('filteredList', filteredList)
              setRestaurant(filteredList);
            }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          const filteredList = restaurant.filter(
            (res) => res.data.avgRating > 4
          );
          setRestaurant(filteredList);
        }}
        >Top Rated Restaurant</button>
      </div>
      <div className='res-container'>
        {restaurant && restaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant?.info} />
        ))}
      </div>

    </div>
  )
}

export default Body;