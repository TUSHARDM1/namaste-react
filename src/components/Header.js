import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    let [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        
        <div className="header">
            <div className="logo">
                <Link to={"/"}>
                <img src="https://cdn.pixabay.com/photo/2014/03/24/17/15/school-295210_960_720.png" alt="Logo"></img>
                </Link>   
            </div>
            
            <div className="nav">
                <ul>
                    <li>
                        <div className="online-status">
{onlineStatus? <span className="online"></span>: <span className="offline"></span>}
                        </div>
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/mentor">Mentor</Link></li>
                    <li><Link to="/">Mentee</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>
                        <button className="btn" onClick={()=>{
                            btnNameReact === "Login" ? 
                            setBtnNameReact("Logout") : setBtnNameReact("Login");
                        }}>
                            {btnNameReact}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;