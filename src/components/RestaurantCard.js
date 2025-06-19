import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData?.info;

    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
           <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
           <h5>{name}</h5>
           <p>{cuisines.join(", ")}</p>
           <p>{avgRating} stars</p>
           <p>{costForTwo}</p>
           <p>{deliveryTime} minutes</p>
        </div>
    )
}
export default RestaurantCard;