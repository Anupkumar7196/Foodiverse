
import ItemList from "./ItemList";

const RestaurantCategory = ({data,index, showItems, setShowIndex, dummy}) =>{
    // console.log(data);
    const handleClick = () => {
        setShowIndex(index);
    };

    return(
        <div>
            {/* Header */}
            
            <div className="w-auto  mx-20 my-2 bg-gray-50 shadow-lg p-2 ">
                <div className="flex justify-between cursor-pointer" onClick= {handleClick}>
                    <span className="font-bold text-[12px]">{data.title} ({data.itemCards.length})</span>
                    <span className="text-lg">{showItems ? "⬆️" : "⬇️"}</span>
                </div>
                
                {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}
            </div> 
        </div>
    )
}
export default RestaurantCategory;