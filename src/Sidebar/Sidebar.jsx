import React from "react";
import Account from "./Account";
import SidebarItem from "./SidebarItem";
import Support from "./Support";
const MainSidebar = ()=>{
    return(
        <>
        <div className="MainSidebar">
            <Account/>
            <SidebarItem/>
            <Support/>
        </div>        
        </>
    )
}
export default MainSidebar