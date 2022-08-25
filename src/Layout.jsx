import React from "react";
import Main from "./Main/Main";
import MainSidebar from "./Sidebar/Sidebar";
const Layout = ()=>{
    return(
        <>
        <div className="layout">
            <MainSidebar/>
            <Main/>
        </div>
        </>
    )
}
export default Layout