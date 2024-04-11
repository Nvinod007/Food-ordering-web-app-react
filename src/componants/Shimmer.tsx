import React from 'react';
const Shimmer = () => {
  const noOfCards = 'vinodkumar'.split('')
  return (
    <div className=' flex flex-wrap justify-center items-center'>
      {noOfCards.map((card, index) => (
        <div key={index} className='p-28 py-36 m-8  bg-gray-200 rounded-lg shadow-md mx-4 animate-pulse'></div>
      ))}
    </div>)
}
export default Shimmer