import React from "react";
import { Link } from "react-router-dom";
import {RiDashboardFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {BsBasket3} from 'react-icons/bs'
import {AiOutlineLock} from 'react-icons/ai'
import {TbFileTypography} from 'react-icons/tb'
import {BsImages} from 'react-icons/bs'
const SidebarItem = ()=>{
    return(
        <>
        <div className="SidebarItem">
        <div className="SidebarLink">
            <Link className="theLink" to="/dashboard">
            <RiDashboardFill/>
            Dashboard</Link>
        </div>
        <div className="SidebarLink">
            <Link className="theLink" to="/users">
            <FiUsers/>
            Users</Link>
        </div>
        <div className="SidebarLink">
            <Link className="theLink" to="/products">
            <BsBasket3/>
            Products</Link>
        </div>
        <div className="SidebarLink">
            <Link className="theLink" to="/authentication">
            <AiOutlineLock/>
            Authentication</Link>
        </div>
        <div className="SidebarLink">
            <Link className="theLink" to="/typography">
            <TbFileTypography/>
            Typography</Link>
        </div>
        <div className="SidebarLink">
            <Link className="theLink" to="/icons">
            <BsImages/>
            Icons & Images</Link>
        </div>
        </div>
        </>
    )
}
export default SidebarItem