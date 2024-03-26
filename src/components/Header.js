import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    let [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    return (
        
        <div className="flex justify-between bg-pink-100 shadow-lg items-center sm:bg-yellow-200 lg:bg-green-200">
            <div className="w-44 p-5"> 
                <Link to={"/"}>
                <img src="https://cdn.pixabay.com/photo/2014/03/24/17/15/school-295210_960_720.png"  className="w-full" alt="Logo"></img>
                </Link>   
            </div>
            
            <div >
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <div className="online-status">
{onlineStatus? <span className="online">Online</span>: <span className="offline">Offline</span>}
                        </div>
                    </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/mentor">Mentor</Link></li>
                    <li className="px-4"><Link to="/mentee">Mentee</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4 font-bold"><Link to="/cart">Cart ( {cartItems.length} items )</Link></li>
                    <li className="px-4">
                        <button className="btn" onClick={()=>{
                            btnNameReact === "Login" ? 
                            setBtnNameReact("Logout") : setBtnNameReact("Login");
                        }}>
                            {btnNameReact}
                        </button>
                    </li>
                    <li>
                        {data.loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;