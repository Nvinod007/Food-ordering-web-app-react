import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resName, cuisine } = props;
  return (
    <div className='res-card'>
      <img className='res-img' alt='res-logo' src={CDN_URL} />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 Minutes</h4>
    </div>

  )
}
export default RestaurantCard;