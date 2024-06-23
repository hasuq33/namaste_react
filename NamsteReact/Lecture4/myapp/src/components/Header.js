import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

function Header() {
    const [ btnNameReact , setBtnName] = useState("login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    return (
        <div className='flex justify-between bg-pink-100 shadow-sm'>
            <div className='logo-container'>
                <img className='logo w-40' src={LOGO_URL}/>
            </div>
            <div className='nav-items flex items-center'>
                <ul className="flex p-4 m-4 justify-between">
                    <li className="px-4">OnlineStatus: {onlineStatus?'✅':'🔴'}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">{loggedInUser}</li>
                    <li className="px-4"><button className="login" onClick={()=>{
                        btnNameReact === "login" ? setBtnName("logout") : setBtnName("login")
                    }}>{btnNameReact}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header