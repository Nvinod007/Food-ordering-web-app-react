import React from 'react'
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../hooks/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId)

  if (!resInfo) return <Shimmer /> 
  console.log('resInfo', resInfo);
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

  const groupedData = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards
  const itemCardsData = groupedData.find(element => 'itemCards' in element.card.card);
  return (
    <div className='menu'>
      <h1>{ name}</h1>
      <h3>{ cuisines.join(', ')}</h3>
      <h3>{ costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCardsData?.card?.card?.itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>)}
      </ul>
    </div>
  )
}

export default RestaurantMenu;
