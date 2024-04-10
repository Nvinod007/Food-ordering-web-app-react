import React from 'react';
const Shimmer = () => {
  const noOfCards = 'vinodkumar'.split('')
  return (
    <div className='shimmer-container'>
      {noOfCards.map((card, index) => (
        <div key={index} className='shimmer-card'>Card {card}</div>
      ))}
    </div>)
}
export default Shimmer