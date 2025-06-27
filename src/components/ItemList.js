
import { useDispatch, useSelector } from "react-redux";
import { CDN_IMG } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({items, dummy}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    };

    // Function to get quantity of a specific item in cart
    const getItemQuantity = (itemId) => {
        return cartItems.filter(item => item.card.info.id === itemId).length;
    };
    
    return(
        <div className="grid gap-2 p-4">
            {items.map((item) => {
                const quantity = getItemQuantity(item.card.info.id);
                
                return (
                    <div
                        key={item.card.info.id}
                        className="flex justify-between items-start p-4 m-2 border-b-2 border-gray-200 hover:shadow-md transition-shadow bg-white"
                    >
                        {/* Left Section - Text Content */}
                        <div className="flex-1 pr-4">
                            {/* Bestseller tag */}
                            {item.card.info.ribbon?.text && (
                                <p className="text-[10px] text-red-500 font-semibold">
                                    <span className="text-red-400">⭐</span> {item.card.info.ribbon.text}
                                </p>
                            )}

                            {/* Name */}
                            <h3 className="text-[16px] text-left font-semibold text-gray-800">
                                {item.card.info.name}
                            </h3>

                            {/* Price and discount */}
                            <div className="flex items-left gap-2 mt-1">
                                <span className="text-[14px] font-medium text-green-600">
                                    ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                                </span>
                            </div>

                            {/* Rating */}
                            {item.card.info.ratings?.aggregatedRating?.rating && (
                                <p className="mt-1 text-[12px] text-green-600 text-left font-semibold">
                                    ⭐ {item.card.info.ratings.aggregatedRating.rating}
                                    <span className="text-gray-500 font-normal text-[11px] ml-1">
                                        ({item.card.info.ratings.aggregatedRating.ratingCount})
                                    </span>
                                </p>
                            )}

                            {/* Description */}
                            <p className="mt-2 text-[12px] text-left text-gray-600 line-clamp-2">
                                {item.card.info.description}
                            </p>
                        </div>

                        {/* Right Section - Image and Add Button */}
                        <div className="w-24 text-center">
                            <img
                                src={CDN_IMG + item.card.info.imageId}
                                className="w-full h-20 object-cover rounded-lg"
                                alt={item.card.info.name}
                            />
                            
                            {/* Conditional rendering based on quantity */}
                            {quantity === 0 ? (
                                // Show ADD button when quantity is 0
                                <button 
                                    className="mt-2 text-green-600 font-bold border border-gray-300 px-3 py-1 rounded shadow-sm hover:shadow-md text-[12px] cursor-pointer bg-white" 
                                    onClick={() => handleAddItem(item)}
                                >
                                    ADD
                                </button>
                            ) : (
                                // Show quantity controls when quantity > 0
                                <div className="mt-2 flex items-center justify-center bg-white border border-gray-300 rounded shadow-sm">
                                    <button 
                                        className="text-green-600 font-bold px-2 py-1 text-[14px] cursor-pointer hover:bg-gray-50" 
                                        onClick={() => handleRemoveItem(item)}
                                    >
                                        −
                                    </button>
                                    <span className="text-green-600 font-bold px-2 py-1 text-[12px] min-w-[20px]">
                                        {quantity}
                                    </span>
                                    <button 
                                        className="text-green-600 font-bold px-2 py-1 text-[14px] cursor-pointer hover:bg-gray-50" 
                                        onClick={() => handleAddItem(item)}
                                    >
                                        +
                                    </button>
                                </div>
                            )}
                            
                            <p className="text-[10px] text-gray-500 mt-1">Customisable</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;

