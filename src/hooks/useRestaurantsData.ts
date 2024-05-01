import { SWIGGY_API } from "../utils/constants";

const useRestaurantsData = () => {
  return new Promise((resolve, reject) => {
    fetch(SWIGGY_API)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        const actualData = jsonData.data.cards.find(card => card.card.card.gridElements !== undefined)
        const restaurants = actualData.card.card.gridElements.infoWithStyle.restaurants;
        resolve(restaurants);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        reject(error);
      });
  });
};

export default useRestaurantsData;
