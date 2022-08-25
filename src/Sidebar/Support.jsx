import React from "react";
import { Link } from "react-router-dom";
import {MdOutlineContactSupport} from 'react-icons/md'
const Support = () =>{
    return(
        <>
        <div className="Support">
            <div className="supportTitle">
                Support
            </div>
            <Link to="/supportpage">
                <MdOutlineContactSupport/>
                Support
            </Link>
        </div>
        </>
    )
}
export default Support