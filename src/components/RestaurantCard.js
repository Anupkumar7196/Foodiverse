import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props;
    // console.log(resData);
    
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        areaName,
    } = resData?.info;

    return(
        <div className="bg-white  m-4 px-4 py-3 w-[180px] h-[270px] rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 cursor-pointer"
        >
           <img className="w-full h-[100px] object-cover block rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
           <h5 className="font-bold text-gray-800 mb-1">{name}</h5>
           <p className="text-[10px] text-gray-700">{cuisines.join(", ")}</p>
           <p className="text-[8px] text-gray-500">⭐ {avgRating} </p>
           <p className="text-[8px] font-bold text-green-600">{costForTwo}</p>
           <p className="text-[8px] text-gray-500">📍 {areaName}</p>
        </div>
    );
};

// Higher Order Component
// Input- RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
    return(props)=>{
        return(
            <div>
                <lable className="absolute bg-gray-500 text-white m-2 p-2 rounded-l-md">Promoted</lable>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;