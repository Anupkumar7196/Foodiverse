
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import {Link} from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-5 p-5">
            <div className="w-9/12 m-auto">
                {cartItems.length > 0 && (
                    <button 
                        className="p-3 m-2 bg-red-500 hover:bg-red-600 text-white rounded-lg cursor-pointer transition-colors duration-200 font-medium shadow-md"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                )}
                
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-1">
                        {/* Empty Cart SVG Illustration */}
                        <div className="">
                            <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
                                {/* Kitchen Hood */}
                                <rect x="70" y="20" width="60" height="15" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
                                <rect x="95" y="5" width="10" height="20" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
                                
                                {/* Stove/Cooktop */}
                                <rect x="60" y="35" width="80" height="8" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1"/>
                                <circle cx="75" cy="39" r="2" fill="#374151"/>
                                <circle cx="125" cy="39" r="2" fill="#374151"/>
                                
                                {/* Stove Dials */}
                                <g stroke="#d1d5db" strokeWidth="0.5" fill="none">
                                    <line x1="70" y1="45" x2="80" y2="45"/>
                                    <line x1="120" y1="45" x2="130" y2="45"/>
                                    <line x1="75" y1="43" x2="75" y2="47"/>
                                    <line x1="125" y1="43" x2="125" y2="47"/>
                                </g>
                                
                                {/* Pan */}
                                <ellipse cx="100" cy="90" rx="45" ry="15" fill="#f9fafb" stroke="#d1d5db" strokeWidth="2"/>
                                <ellipse cx="100" cy="88" rx="45" ry="15" fill="white" stroke="#d1d5db" strokeWidth="1"/>
                                
                                {/* Pan Handle */}
                                <rect x="145" y="86" width="25" height="4" fill="#374151" rx="2"/>
                                
                                {/* Colorful Food Items in Pan */}
                                <ellipse cx="85" cy="88" rx="8" ry="4" fill="#ef4444"/> {/* Red vegetable */}
                                <ellipse cx="100" cy="85" rx="6" ry="3" fill="#f59e0b"/> {/* Orange/yellow */}
                                <ellipse cx="115" cy="88" rx="7" ry="4" fill="#10b981"/> {/* Green */}
                                <ellipse cx="95" cy="92" rx="5" ry="3" fill="#8b5cf6"/> {/* Purple */}
                                <ellipse cx="110" cy="90" rx="6" ry="3" fill="#f97316"/> {/* Orange */}
                                
                                {/* Steam lines */}
                                <g stroke="#d1d5db" strokeWidth="1" fill="none" opacity="0.6">
                                    <path d="M 85 70 Q 85 65 87 60 Q 89 65 89 60"/>
                                    <path d="M 100 68 Q 100 63 102 58 Q 104 63 104 58"/>
                                    <path d="M 115 70 Q 115 65 117 60 Q 119 65 119 60"/>
                                </g>
                                
                                {/* Stove Base/Platform */}
                                <rect x="50" y="100" width="100" height="12" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1"/>
                                
                                {/* Decorative Base Pattern */}
                                <g fill="#fbbf24" opacity="0.8">
                                    <polygon points="55,108 60,103 65,108"/>
                                    <polygon points="70,108 75,103 80,108"/>
                                    <polygon points="85,108 90,103 95,108"/>
                                    <polygon points="100,108 105,103 110,108"/>
                                    <polygon points="115,108 120,103 125,108"/>
                                    <polygon points="130,108 135,103 140,108"/>
                                </g>
                            </svg>
                        </div>
                        
                        {/* Empty Cart Message */}
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">Your cart is empty</h2>
                        <p className="text-gray-600 mb-8 max-w-md">
                            You can go to home page to view more restaurants
                        </p>
                        
                        {/* Call to Action Button */}
                        <Link to="/">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg uppercase tracking-wide cursor-pointer">
                            See Restaurants Near You
                        </button>
                        </Link>
                    </div>
                ) : (
                    <ItemList items={cartItems} />
                )}
            </div>
        </div>
    )
}

export default Cart;