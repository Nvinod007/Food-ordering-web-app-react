import { SWIGGY_API } from "../utils/constants";

const useRestaurantsData = () => {
  return new Promise((resolve, reject) => {
    fetch(SWIGGY_API)
      .then(response => {
        // if (!response.ok) {
        //   throw new Error('Failed to fetch data');
        // }
        return response.json();
      })
      .then(jsonData => {
        const restaurants = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        resolve(restaurants);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        reject(error);
      });
  });
};

export default useRestaurantsData;
