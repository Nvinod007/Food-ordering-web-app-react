import React from 'react';

/**
 * 
 * @returns     <div>
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="shimmer h-8 rounded-md mb-1"></div>
            <div className="shimmer h-4 rounded-md mb-2"></div>
            <div className="shimmer h-4 rounded-md mb-1"></div>
          </div>
          <div className="w-3/12 p-3 flex flex-col items-center relative">
            <div className="shimmer w-full rounded-lg h-40 mb-2"></div>
            <div className="absolute bottom-0 transform translate-y-1/2">
              <div className="shimmer h-8 w-16 rounded-lg bg-green-400 text-white"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
 */

const ShimmerItemList = () => {
  return (
    <div className='m-8'>
        <div
          className="p-2 m-2 mt-32 border-gray-200  text-center flex justify-center"
        >
        <div className="w-7/12  ">
          {'vinod'.split('').map(() => <div className="shimmer h-16 rounded-md mb-3"></div>)}
          </div>
        </div>
    </div>
  );
};

export default ShimmerItemList;


