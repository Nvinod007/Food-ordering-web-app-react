import React from 'react'
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../hooks/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId)
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer /> 

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const groupedCards = resInfo.cards.find(card => card.groupedCard !== undefined);
  const groupedData = groupedCards?.groupedCard?.cardGroupMap?.REGULAR.cards
  const itemCardsData = groupedData?.find(element => 'itemCards' in element.card.card);

  const categories =
    groupedCards.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log('categories', categories)
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories?.map((category, index) => (
        // * controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => index===showIndex? setShowIndex(null):setShowIndex(index)}
        />
      ))}
    </div>
  )
}

export default RestaurantMenu;
