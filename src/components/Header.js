import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header  = () =>{
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "❌" }</li>
                    <Link to="/" className="no-link-style"><li>Home</li></Link>
                    <Link to="/About" className="no-link-style"><li>About Us</li></Link>
                    <Link to="/Contact" className="no-link-style"><li>Contact Us</li></Link>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout") 
                        : setBtnNameReact("Login");
                    }}>{btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;