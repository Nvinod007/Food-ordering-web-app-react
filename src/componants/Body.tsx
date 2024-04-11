import RestaurantCard from './RestaurantCard';
import React, { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurantsData from '../hooks/useRestaurantsData';
import useInternetStatus from '../hooks/useInternetStatus';
import { WithPromtedLabel } from '../higherOrderComponents/withPromotedLabel';

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
  },[])
  const RestaurantCardPromoted = WithPromtedLabel(RestaurantCard);



  const fetchData = async() => {
    const d = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4485835&lng=78.39080349999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    console.log('d', d)
    const j = d.json()
    console.log('j', j)
  }
  useEffect(() => {
    fetchData()
  }, [])
  
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
    <div className='body'>
      <div className='flex items-center'>
        <div className='m-4 p-4'>
          <input type='text'
            className='border border-solid border-black p-1 pl-2 hover:border-separate'
            value={searchText}
            onChange={(value) => { setSearchText(value.target.value) }} />
          <button
            className='px-2 py-2 bg-green-50 ml-2 hover:bg-green-200 rounded-lg'
            onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className='m-4 p-4'>
          <button
            className="px-2 py-2 bg-gray-50 rounded-lg hover:bg-gray-200"
            onClick={handleTopRated}
          >Top Rated Restaurant</button>
        </div>
      </div>
      <div className='flex flex-wrap'>
        {filteredData && filteredData.map((res) => (
          <Link to={'/restaurants/' + res?.info.id} key={res?.info.id}>
            {res.info.avgRating>4 ? (
              <RestaurantCardPromoted resData={res.info} />
            ) : (
                <RestaurantCard resData={res.info} />
            )}
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Body;