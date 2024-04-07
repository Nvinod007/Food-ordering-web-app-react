import RestaurantCard from './RestaurantCard';

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='filter'>
        <button className="filter-btn" title="Top">Top Rated Restaurant</button>
      </div>
      <div className='res-container'>
        <RestaurantCard resName="Meghana Foods" cuisine="Biriyani, Asaian, Nort Indian" />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
      </div>

    </div>
  )
}

export default Body;