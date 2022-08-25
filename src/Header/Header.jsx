import React from "react";
import Logo from "./Logo";
import Pro from "./Pro";
import Personal from "./Personal";
const Header = ()=>{
    return(
        <>
        <div className="header">
            <Logo/>
            <Pro/>
            <Personal/>
        </div>
        </>
    )
}
export default Header