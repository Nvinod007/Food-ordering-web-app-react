import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import React from 'react';
import { addItem } from "../redux/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-3 flex flex-col items-center relative">
            <img src={CDN_URL + item.card.info.imageId} className="w-full rounded-lg" />
            <div className="absolute bottom-0 transform translate-y-1/2">
              <button
                className="p-1  px-3 rounded-lg bg-green-400 text-white shadow-lg"
                onClick={()=>handleAddItem(item)}>
                Add +
              </button>
            </div>
          </div>

          
        </div>
      ))}
    </div>
  );
};

export default ItemList;