import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header  = () =>{
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);
    
    //Subscribing to the sotre using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    


    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-blue-100 lg:bg-blue-200">
            <div className="logo-container">
                <img className="w-22 pl-0.5 ml-1" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "❌" }</li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/About">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/Contact">Contact Us</Link>
                    </li>
                    {/* <Link to="/About" className="no-link-style"><li>About Us</li></Link>
                    <Link to="/Contact" className="no-link-style"><li>Contact Us</li></Link> */}
                    <li className="px-4 font-bold">
                    <Link to="/cart">🛒({cartItems.length})</Link>
                    </li>
                    <button className="px-4" onClick={() => {
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout") 
                        : setBtnNameReact("Login");
                    }}>{btnNameReact}
                    </button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;