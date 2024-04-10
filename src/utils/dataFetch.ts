import { SWIGGY_API } from "./constants";

export const fetchData = async () => {
  try {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    console.log('jsonData', jsonData);
    console.log('data', jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    // setRestaurant(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    // resList = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    console.log('fetched data', jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    return jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants

  } catch (error) {
    console.log('error while fetching:-', error)
  }

}