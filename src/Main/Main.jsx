import React, { useState } from "react";
import { Route, Routes, Link} from "react-router-dom";
import Dashboard from "../Sidebar/Pages/Dashboard"
import Authentication from "../Sidebar/Pages/Authentication"
import Users from "../Sidebar/Pages/Users";
import Products from "../Sidebar/Pages/Product";
import Typography from "../Sidebar/Pages/Typography";
import Icons from "../Sidebar/Pages/Icons";
import SupportPage from "../Sidebar/Pages/SupportPage";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import MainMenu from "./MainMenu";
import MainProfile from './MainPage/MainProfile'
import MainAccount from './MainPage/MainAccount'
import MainPricePlan from './MainPage/MainPricePlan'
import dataProfile from "./MainPage/ProfileItem/dataProfile";
import dataNotification from "./MainPage/ProfileItem/dataNotification"
const Main = ()=>{
    const [not, setNot] = useState(dataNotification)
    const [state, setState] = useState(dataProfile)
    return(
        <>
        <div className="Main">
            <div className="mainLinks">
            <Link className="backButton" to="/">
                <AiOutlineArrowLeft className="backArrom"/>
                Back</Link>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/authentication" element={<Authentication/>}/>
                <Route path="/typography" element={<Typography/>}/>
                <Route path="/icons" element={<Icons/>}/>
                <Route path="/supportpage" element={<SupportPage/>}/>
            </Routes>
            </div>
            <div className="mainMenu">
                <MainMenu/>
            </div>
            <div className="mainPages">
                <Routes>
                    <Route path="/" element={<MainProfile state={state} setState={setState} not={not} setNot={setNot}/>}/>
                    <Route path="/mainaccount" element={<MainAccount/>}/>
                    <Route path="/mainpriceplan" element={<MainPricePlan/>}/>
                </Routes>
            </div>
        </div>
        </>
    )
}
export default Main