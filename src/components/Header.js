// import { LOGO_URL } from "../utils/constants";
// import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";
// const Header  = () =>{
//     const [btnNameReact, setBtnNameReact] = useState("Login");

//     const onlineStatus = useOnlineStatus();

//     const {loggedInUser} = useContext(UserContext);
//     // console.log(loggedInUser);
    
//     //Subscribing to the sotre using a Selector
//     const cartItems = useSelector((store) => store.cart.items);
//     console.log(cartItems);
    


//     return(
//         <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-blue-100 lg:bg-blue-200">
//             <div className="logo-container">
//                 <img className="w-22 pl-0.5 ml-1" src={LOGO_URL}></img>
//             </div>
//             <div className="flex items-center">
//                 <ul className="flex p-4 m-4">
//                     <li className="px-4">Online Status: {onlineStatus ? "✅" : "❌" }</li>
//                     <li className="px-4">
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li className="px-4">
//                         <Link to="/About">About Us</Link>
//                     </li>
//                     <li className="px-4">
//                         <Link to="/Contact">Contact Us</Link>
//                     </li>
//                     {/* <Link to="/About" className="no-link-style"><li>About Us</li></Link>
//                     <Link to="/Contact" className="no-link-style"><li>Contact Us</li></Link> */}
//                     <li className="px-4 font-bold">
//                     <Link to="/cart">🛒({cartItems.length})</Link>
//                     </li>
//                     <button className="px-4" onClick={() => {
//                         btnNameReact === "Login"
//                         ? setBtnNameReact("Logout") 
//                         : setBtnNameReact("Login");
//                     }}>{btnNameReact}
//                     </button>
//                     <li className="px-4">{loggedInUser}</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }
// export default Header;


// import { LOGO_URL } from "../utils/constants";
// import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";

// const Header = () => {
//     const [btnNameReact, setBtnNameReact] = useState("Login");

//     const onlineStatus = useOnlineStatus();

//     const { loggedInUser } = useContext(UserContext);
//     // console.log(loggedInUser);
    
//     //Subscribing to the store using a Selector
//     const cartItems = useSelector((store) => store.cart.items);
//     console.log(cartItems);

//     return (
//         <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center h-16">
//                     {/* Logo Section */}
//                     <div className="flex-shrink-0 flex items-center">
//                         <Link to="/" className="flex items-center space-x-2">
//                             <img 
//                                 className="h-10 w-auto transition-transform duration-200 hover:scale-105" 
//                                 src={LOGO_URL} 
//                                 alt="Logo"
//                             />
//                             <span className="hidden sm:block text-xl font-bold text-gray-800 tracking-tight">
//                                 Foodiverse
//                             </span>
//                         </Link>
//                     </div>

//                     {/* Navigation Menu */}
//                     <nav className="hidden md:flex items-center space-x-1">
//                         {/* Online Status */}
//                         <div className="flex items-center px-3 py-2 rounded-full bg-gray-50 mr-4">
//                             <div className={`w-2 h-2 rounded-full mr-2 ${onlineStatus ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
//                             <span className="text-sm font-medium text-gray-700">
//                                 {onlineStatus ? "Online" : "Offline"}
//                             </span>
//                         </div>

//                         {/* Navigation Links */}
//                         <Link 
//                             to="/" 
//                             className="px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium"
//                         >
//                             Home
//                         </Link>
//                         <Link 
//                             to="/About" 
//                             className="px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium"
//                         >
//                             About Us
//                         </Link>
//                         <Link 
//                             to="/Contact" 
//                             className="px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium"
//                         >
//                             Contact Us
//                         </Link>

//                         {/* Cart */}
//                         <Link 
//                             to="/cart" 
//                             className="relative px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium flex items-center space-x-2"
//                         >
//                             <div className="relative">
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6H17M7 13h10M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
//                                 </svg>
//                                 {cartItems.length > 0 && (
//                                     <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-bounce">
//                                         {cartItems.length}
//                                     </span>
//                                 )}
//                             </div>
//                             <span className="hidden lg:block">Cart</span>
//                         </Link>

//                         {/* User Section */}
//                         <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
//                             {loggedInUser && (
//                                 <div className="flex items-center space-x-2">
//                                     <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center cursor-pointer">
//                                         <span className="text-white font-semibold text-sm">
//                                             {loggedInUser.charAt(0).toUpperCase()}
//                                         </span>
//                                     </div>
//                                     <span className="text-gray-700 font-medium hidden xl:block">
//                                         {loggedInUser}
//                                     </span>
//                                 </div>
//                             )}
                            
//                             {/* Login/Logout Button */}
//                             <button 
//                                 className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
//                                     btnNameReact === "Login" 
//                                         ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg" 
//                                         : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
//                                 }`}
//                                 onClick={() => {
//                                     btnNameReact === "Login"
//                                         ? setBtnNameReact("Logout") 
//                                         : setBtnNameReact("Login");
//                                 }}
//                             >
//                                 {btnNameReact}
//                             </button>
//                         </div>
//                     </nav>

//                     {/* Mobile Menu Button */}
//                     <div className="md:hidden flex items-center space-x-4">
//                         {/* Mobile Cart */}
//                         <Link 
//                             to="/cart" 
//                             className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
//                         >
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6H17M7 13h10M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
//                             </svg>
//                             {cartItems.length > 0 && (
//                                 <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
//                                     {cartItems.length}
//                                 </span>
//                             )}
//                         </Link>

//                         {/* Mobile Login Button */}
//                         <button 
//                             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                                 btnNameReact === "Login" 
//                                     ? "bg-orange-500 hover:bg-orange-600 text-white" 
//                                     : "bg-gray-100 hover:bg-gray-200 text-gray-700"
//                             }`}
//                             onClick={() => {
//                                 btnNameReact === "Login"
//                                     ? setBtnNameReact("Logout") 
//                                     : setBtnNameReact("Login");
//                             }}
//                         >
//                             {btnNameReact}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Navigation Menu - Hidden by default, you can add mobile menu toggle logic */}
//             <div className="md:hidden bg-white border-t border-gray-100">
//                 <div className="px-4 py-3 space-y-1">
//                     <div className="flex items-center justify-between mb-3">
//                         <div className="flex items-center space-x-2">
//                             <div className={`w-2 h-2 rounded-full ${onlineStatus ? 'bg-green-500' : 'bg-red-500'}`}></div>
//                             <span className="text-sm text-gray-600">
//                                 {onlineStatus ? "Online" : "Offline"}
//                             </span>
//                         </div>
//                         {loggedInUser && (
//                             <span className="text-sm text-gray-700 font-medium">
//                                 Welcome, {loggedInUser}
//                             </span>
//                         )}
//                     </div>
                    
//                     <Link 
//                         to="/" 
//                         className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
//                     >
//                         Home
//                     </Link>
//                     <Link 
//                         to="/About" 
//                         className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
//                     >
//                         About Us
//                     </Link>
//                     <Link 
//                         to="/Contact" 
//                         className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
//                     >
//                         Contact Us
//                     </Link>
//                 </div>
//             </div>
//         </header>
//     )
// }

// export default Header;

import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    // console.log(loggedInUser);
    
    //Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <img 
                                className="h-10 w-auto transition-transform duration-200 hover:scale-105" 
                                src={LOGO_URL} 
                                alt="Logo"
                            />
                            <span className="hidden sm:block text-xl font-bold text-gray-800 tracking-tight">
                                Foodiverse
                            </span>
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {/* Online Status */}
                        <div className="flex items-center px-3 py-2 rounded-full bg-gray-50 mr-4">
                            <div className={`w-2 h-2 rounded-full mr-2 ${onlineStatus ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                            <span className="text-sm font-medium text-gray-700">
                                {onlineStatus ? "Online" : "Offline"}
                            </span>
                        </div>

                        {/* Navigation Links */}
                        <Link 
                            to="/" 
                            className="px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/About" 
                            className="px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium"
                        >
                            About Us
                        </Link>
                        <Link 
                            to="/Contact" 
                            className="px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium"
                        >
                            Contact Us
                        </Link>

                        {/* Cart */}
                        <div className="relative group">
                            <Link 
                                to="/cart" 
                                className="relative px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium flex items-center space-x-2"
                            >
                                <div className="relative">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6H17M7 13h10M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                                    </svg>
                                    {cartItems.length > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-bounce">
                                            {cartItems.length}
                                        </span>
                                    )}
                                </div>
                                <span className="hidden lg:block">Cart</span>
                            </Link>
                            
                            {/* Hover Tooltip */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-80">
                                    {/* Orange triangle pointer */}
                                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                                        <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-orange-500"></div>
                                    </div>
                                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                                        <div className="w-0 h-0 border-l-3 border-r-3 border-b-3 border-l-transparent border-r-transparent border-b-white"></div>
                                    </div>
                                    
                                    {cartItems.length === 0 ? (
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Cart Empty</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                Good food is always cooking!<br />
                                                Go ahead, order some<br />
                                                yummy items from the menu.
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                                {cartItems.length} item{cartItems.length > 1 ? 's' : ''} in cart
                                            </h3>
                                            <p className="text-gray-500 text-sm">
                                                Click to view your cart
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* User Section */}
                        <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
                            {loggedInUser && (
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center cursor-pointer">
                                        <span className="text-white font-semibold text-sm">
                                            {loggedInUser.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <span className="text-gray-700 font-medium hidden xl:block">
                                        {loggedInUser}
                                    </span>
                                </div>
                            )}
                            
                            {/* Login/Logout Button */}
                            <button 
                                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                                    btnNameReact === "Login" 
                                        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg" 
                                        : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
                                }`}
                                onClick={() => {
                                    btnNameReact === "Login"
                                        ? setBtnNameReact("Logout") 
                                        : setBtnNameReact("Login");
                                }}
                            >
                                {btnNameReact}
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        {/* Mobile Cart */}
                        <Link 
                            to="/cart" 
                            className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 "
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6H17M7 13h10M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                            </svg>
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>

                        {/* Mobile Login Button */}
                        <button 
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200  ${
                                btnNameReact === "Login" 
                                    ? "bg-orange-500 hover:bg-orange-600 text-white " 
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => {
                                btnNameReact === "Login"
                                    ? setBtnNameReact("Logout") 
                                    : setBtnNameReact("Login");
                            }}
                        >
                            {btnNameReact}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu - Hidden by default, you can add mobile menu toggle logic */}
            <div className="md:hidden bg-white border-t border-gray-100">
                <div className="px-4 py-3 space-y-1">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${onlineStatus ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <span className="text-sm text-gray-600">
                                {onlineStatus ? "Online" : "Offline"}
                            </span>
                        </div>
                        {loggedInUser && (
                            <span className="text-sm text-gray-700 font-medium">
                                Welcome, {loggedInUser}
                            </span>
                        )}
                    </div>
                    
                    <Link 
                        to="/" 
                        className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/About" 
                        className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                    >
                        About Us
                    </Link>
                    <Link 
                        to="/Contact" 
                        className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;


