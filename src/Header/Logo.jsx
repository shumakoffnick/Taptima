import React from "react";
import oval3 from '../icon/Oval3.png'
import oval4 from '../icon/Oval4.png'
const Logo = ()=>{
    return(
        <>
        <div className="logo">
            <div className="logoImg">
                <img className="imgOval3" src={oval3} alt="logo"></img>
                <img className="imgOval4" src={oval4} alt="logo"></img>
            </div>
            <div className="logoText">Devias kit</div>
        </div>
        </>
    )
}
export default Logo