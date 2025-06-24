import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState("");
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    //Whenever state variables update, react triggers a reconciliation cycle
    // console.log("Body Rendered", listOfRestaurants);
    
    useEffect(() => {
        fetchData();        
    }, []);


    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5780204&lng=77.2087952&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        // console.log(json);
        //Optional Chaining
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //Conditional rendering
    // if(listOfRestaurants.length === 0){
    //     return (
    //     <Shimmer />
    //     );
    // }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
          <div className="offline-banner">
            <h1>You're Offline! Please check your internet connection!</h1>
          </div>
        );
      };

      const {loggedInUser, setUserName} = useContext(UserContext);
    return listOfRestaurants.length === 0 ? (
    <Shimmer />
    ) : (
        <div className="body">
            
            <div className="flex">
                <div className="m-2 p-2">
                    <input 
                        type="test"
                        className="border-[1px] border-gray-300 rounded-md"
                        placeholder="Search Restaurant"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="px-2 py-1 bg-blue-300 m-4 rounded-lg cursor-pointer"
                        onClick={ (e)=>{
                            console.log(searchText);

                            const filterdRestaurant = listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filterdRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                
                <div className="m-2 p-4 flex items-center">
                <button className="px-4 py-1  bg-blue-300 rounded-lg cursor-pointer" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4);
                    setListOfRestaurant(filteredList);
                }}
                >
                    Top Rated Restaurant
                </button>
                </div>
                <div className="m-1 p-2 flex items-center">
                    <label className="p-2">UserName: </label>
                    <input className="border border-black p-2 rounded-lg py-1" 
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-wrap ml-5">
                {
                    filteredRestaurant.map((restaurant)=>(
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} > 

                        {restaurant.info.promoted ? (
                            <RestaurantCardPromoted resData = {restaurant} />
                        ) : (
                            <RestaurantCard  resData={restaurant}/>
                        )}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;

