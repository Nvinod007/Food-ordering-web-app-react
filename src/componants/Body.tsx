import RestaurantCard from './RestaurantCard';
import React, { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurantsData from '../hooks/useRestaurantsData';
import useInternetStatus from '../hooks/useInternetStatus';
import { WithPromtedLabel } from '../higherOrderComponents/withPromotedLabel';
import UserContext from '../utils/userContext';

const Body = () => {

  const [restaurant, setRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([])
  const internetStatus = useInternetStatus();

  useEffect(() => {
    const restaurantData = useRestaurantsData();
    restaurantData.then(resList => {
      setRestaurant(resList);
      setFilteredData(resList);
    })
  }, [])

  const RestaurantCardPromoted = WithPromtedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  const handleSearch = () => {
    setFilteredData(restaurant.filter(res => res?.info.name.toLowerCase().includes(searchText.toLowerCase())));
  };

  const handleTopRated = () => {
    setFilteredData(restaurant.filter(res => res?.info.avgRating > 4));
  };

  if (!internetStatus) {
    return <h1>Looks like you are offline, check you connection!</h1>
  }

  return !restaurant?.length ? <Shimmer /> : (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col md:flex-row justify-between items-center py-4 space-y-4 md:space-y-0 md:space-x-4'>
        <div className='flex-grow flex flex-col md:flex-row items-center'>
          <input type='text'
            className='form-input border border-gray-800 p-2 w-full md:w-auto rounded-lg'
            placeholder='Search restaurants...'
            value={searchText}
            onChange={(value) => { setSearchText(value.target.value) }} />
          <button
            data-testid="searchInput"
            className='btn bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-2 md:mt-0 md:ml-4'
            onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className='mt-4 md:mt-0'>
          <button
            className="btn bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-lg"
            onClick={handleTopRated}
          >Top Rated Restaurant</button>
        </div>
        <div className="flex items-center space-x-2 py-2 mt-4 md:mt-0">
          <label>UserName:- </label>
          <input
            className="form-input border border-gray-800 p-2 rounded-lg"
            value={loggedInUser}
            onChange={(e) => {
              typeof setUserName === 'function' && setUserName(e.target.value)
            }}
          />
        </div>
      </div>
      <div className='flex flex-wrap -mx-2'>
        {filteredData && filteredData.map((res) => {
          return res.info.avgRating > 4 ?
            <RestaurantCardPromoted resData={res.info} key={res.info.id} />
            :
            <RestaurantCard resData={res.info} key={res.info.id} />
        }
        )}
      </div>

    </div>
  )
}

export default Body;