import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState("");
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        fetchData();        
    }, []);


    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5780204&lng=77.2087952&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        console.log(json);
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
      }
    return listOfRestaurants.length === 0 ? (
    <Shimmer />
    ) : (
        <div className="body">
            
            <div className="filter">
                <div className="search">
                    <input 
                        type="test"
                        className="search-box"
                        placeholder="Search Restaurant"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
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
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4);
                    setListOfRestaurant(filteredList);
                }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant)=>(
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} > <RestaurantCard  resData={restaurant}/></Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;