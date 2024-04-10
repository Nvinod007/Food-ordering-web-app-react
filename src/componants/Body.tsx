import RestaurantCard from './RestaurantCard';
import React, { useState, useEffect } from 'react';
import Shimmer from './shimmer';
import { SWIGGY_API } from '../utils/constants';
import { fetchData } from '../utils/dataFetch';
import { Link } from 'react-router-dom';

const Body = () => {

  const [restaurant, setRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData]= useState ([])

  useEffect(() => {
    fetchData().then(res => {
      setRestaurant(res)
      setFilteredData(res)
    })
  }, [])

  return restaurant?.length === 0 ? <Shimmer /> : (
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
              setFilteredData(restaurant.filter(res => 
                 res?.info.name.toLowerCase().includes(searchText.toLowerCase())
              ))
            }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          const filteredList = restaurant.filter(
            (res) => res?.info.avgRating > 4
          );
          setFilteredData(filteredList);
        }}
        >Top Rated Restaurant</button>
      </div>
      <div className='res-container'>
        {filteredData && filteredData.map((res) => (
          <Link to={'/restaurants/'+res?.info.id} key={res?.info.id}><RestaurantCard resData={res?.info} /></Link>
        ))}
      </div>

    </div>
  )
}

export default Body;