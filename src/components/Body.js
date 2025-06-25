// import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
// import { useState, useEffect, useContext } from "react";
// import Shimmer from "./Shimmer";
// import {Link} from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

// const Body = () => {
//     const [listOfRestaurants, setListOfRestaurant] = useState([]);
//     const [filteredRestaurant, setFilteredRestaurant] = useState("");
//     const [searchText, setSearchText] = useState("");

//     const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

//     //Whenever state variables update, react triggers a reconciliation cycle
//     // console.log("Body Rendered", listOfRestaurants);
    
//     useEffect(() => {
//         fetchData();        
//     }, []);


//     const fetchData = async() => {
//         const data = await fetch(
//             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5780204&lng=77.2087952&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//         );
//         const json = await data.json();

//         // console.log(json);
//         //Optional Chaining
//         setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     }

//     //Conditional rendering
//     // if(listOfRestaurants.length === 0){
//     //     return (
//     //     <Shimmer />
//     //     );
//     // }

//     const onlineStatus = useOnlineStatus();
//     if (onlineStatus === false) {
//         return (
//           <div className="offline-banner">
//             <h1>You're Offline! Please check your internet connection!</h1>
//           </div>
//         );
//       };

//       const {loggedInUser, setUserName} = useContext(UserContext);
//     return listOfRestaurants.length === 0 ? (
//     <Shimmer />
//     ) : (
//         <div className="body">
            
//             <div className="flex mx-4">
//                 <div className="m-2 p-2">
//                     <input 
//                         type="test"
//                         className="border-[1px] border-gray-300 rounded-md"
//                         placeholder="Search Restaurant"
//                         value={searchText}
//                         onChange={(e) => {
//                             setSearchText(e.target.value);
//                         }}
//                     />
//                     <button className="px-2 py-1 bg-blue-300 m-4 rounded-lg cursor-pointer"
//                         onClick={ (e)=>{
//                             console.log(searchText);

//                             const filterdRestaurant = listOfRestaurants.filter(
//                                 (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
//                             );
//                             setFilteredRestaurant(filterdRestaurant);
//                         }}
//                     >
//                         Search
//                     </button>
//                 </div>
                
//                 <div className="m-2 p-4 flex items-center">
//                 <button className="px-4 py-1  bg-blue-300 rounded-lg cursor-pointer" onClick={()=>{
//                     const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4);
//                     setListOfRestaurant(filteredList);
//                 }}
//                 >
//                     Top Rated Restaurant
//                 </button>
//                 </div>
//                 <div className="m-1 p-2 flex items-center">
//                     <label className="p-2">UserName: </label>
//                     <input className="border border-black p-2 rounded-lg py-1" 
//                     value={loggedInUser}
//                     onChange={(e) => setUserName(e.target.value)}/>
//                 </div>
//             </div>
//             <div className="flex flex-wrap ml-5">
//                 {
//                     filteredRestaurant.map((restaurant)=>(
//                         <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} > 

//                         {restaurant.info.promoted ? (
//                             <RestaurantCardPromoted resData = {restaurant} />
//                         ) : (
//                             <RestaurantCard  resData={restaurant}/>
//                         )}
//                         </Link>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }
// export default Body;


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
        <div className="body flex flex-col items-center min-h-screen">
            
            {/* <div className="flex flex-wrap justify-center items-center w-full max-w-6xl mx-auto px-4 py-4">
                <div className="m-2 p-2">
                    <input 
                        type="test"
                        className="border-[1px] border-gray-300 rounded-md px-3 py-2"
                        placeholder="Search Restaurant"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="px-4 py-2 bg-blue-300 m-4 rounded-lg cursor-pointer hover:bg-blue-400 transition-colors"
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
                
                <div className="m-2 p-2 flex items-center">
                <button className="px-4 py-2 bg-blue-300 rounded-lg cursor-pointer hover:bg-blue-400 transition-colors" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4);
                    setListOfRestaurant(filteredList);
                }}
                >
                    Top Rated Restaurant
                </button>
                </div>
                <div className="m-2 p-2 flex items-center">
                    <label className="p-2 font-medium">UserName: </label>
                    <input className="border border-gray-300 p-2 rounded-lg" 
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div> */}

        <div className="flex flex-wrap justify-center   items-center w-full max-w-6xl mx-auto px-4 py-4">
            {/* Search Input & Button */}
            <div className="m-2 p-2 flex flex-col sm:flex-row items-center gap-3">
           <input 
            type="text"
            className="border-[1px] border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            />
             <button 
            className="px-5 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-200 cursor-pointer"
            onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
            }}
             >
            Search
            </button>
            </div>

            {/* Top Rated Button */}
            <div className="m-2 p-2 flex items-center">
           <button 
            className="px-5 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all duration-200 cursor-pointer"
            onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                setListOfRestaurant(filteredList);
            }}
             >
            Top Rated Restaurant
            </button>
            </div>

            {/* Username Input */}
            <div className="m-2 p-2 flex items-center gap-2">
             <label className="font-medium text-gray-700">UserName:</label>
            <input 
            className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            />
            </div>
        </div>

            
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mx-auto px-4">
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