import { SWIGGY_API } from "../utils/constants";
import { useState, useEffect} from 'react';

const useRestaurantsData = async () => {
  const [resList, setResList] = useState();

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      console.log('rawdata', data);
      const jsonData = await data.json();
      console.log('jsonData', jsonData);
      console.log('data', jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

      // setRestaurant(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      // resList = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      console.log('fetched data', jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      setResList(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

    } catch (error) {
      console.log('error while fetching:-', error)
      setResList(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return resList;
}
export default useRestaurantsData;