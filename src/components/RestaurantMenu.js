import Shimmer from "./Shimmer";  
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    
    if (resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwo} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
    // console.log(itemCards);
    
    console.log("render");
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);
    

    return (
        <div className="text-center">
            <h1 className="font-bold my-5 text-xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwo}</p>

            {/* categories accordions */}
            {categories.map((category, index)=> (
                <RestaurantCategory 
                key={category?.card?.card.title} 
                data = {category?.card?.card}
                // showItems={index === showIndex ? true : false}
                // setShowIndex={() => setShowIndex(index)}
                index = {index}
                showItems = {index === showIndex}
                setShowIndex={(clickedIndex) => setShowIndex((prevIndex)=> prevIndex === clickedIndex ? null : clickedIndex)}
                />
            ))}
        </div>
    )
}
export default RestaurantMenu;