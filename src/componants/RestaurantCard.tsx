import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import React from 'react';

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    id,
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-64 h-96 flex flex-col bg-gray-50 hover:bg-gray-200 transition-colors duration-200 ease-in-out shadow rounded-lg overflow-hidden">
      <img
        className="w-full flex-shrink-0 h-40 object-cover mb-4" 
      alt={`${name} image`}
      src={`${CDN_URL}${cloudinaryImageId}`}
  />
      <Link to={'/restaurants/' + id} key={id} className="flex-grow flex flex-col justify-between"> 
        <div>
          <h3 className="font-bold text-lg mb-2">{name}</h3> 
          <h4 className="text-gray-700 mb-2">{cuisines.join(", ")}</h4>
        </div>
        <div>
          <div className="flex items-center justify-between mt-2 text-sm">
            <h4 className="text-yellow-500 font-semibold">{avgRating} <span className="text-yellow-400">⭐</span></h4>
            <h4 className="text-green-600 font-semibold">{costForTwo}</h4>
          </div>
          <h4 className="text-gray-500 mt-2">{sla?.slaString}</h4> 
        </div>
      </Link>
    </div>
)
};

export default RestaurantCard;