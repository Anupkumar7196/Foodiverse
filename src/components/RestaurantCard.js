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
        <div className="bg-white  m-4 px-4 py-3 w-[180px] rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 cursor-pointer"
        >
           <img className="w-full h-[100px] object-cover block rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
           <h5 className="font-bold text-gray-800 mb-1">{name}</h5>
           <h4 className="text-sm text-gray-700">{cuisines.join(", ")}</h4>
           <h4 className="text-xs text-gray-500">⭐ {avgRating} </h4>
           <h4 className="text-xs text-gray-500">{costForTwo}</h4>
           <h4 className="text-xs text-gray-500">⏱️  {deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard;