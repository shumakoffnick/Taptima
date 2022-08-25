import React from "react";
import { Link } from "react-router-dom";
const MainMenu = ()=>{
    return(
        <>
        <div className="mainMenu">
            <div className="mainMenuItem">
                <Link className="mainMenuLink" to="/">Profile</Link>
            </div>
            <div className="mainMenuItem">
                <Link className="mainMenuLink" to="/mainaccount">Account</Link>
            </div>
            <div className="mainMenuItem">
                <Link className="mainMenuLink" to="/mainpriceplan">Price Plan</Link>
            </div>
        </div>
        </>
    )
}
export default MainMenu