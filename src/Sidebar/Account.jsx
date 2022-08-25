import React from "react";
import dataAccount from "../dataAccount";
const Account = ()=>{
    return(
        <>
        <div className="Account">
            <div className="accountPhoto">
                {dataAccount.map(d=><img src={d.photo} alt={d.name}/>)}
            </div>
            <div className="accountTitle">
                {dataAccount.map(d=>(
                <>
                <span>{d.name}</span>
                <span className="sidebarSurname">{d.surname}</span>
                </>
                ))}
            </div>
            <div className="job">
                {dataAccount.map(d=><div>{d.job}</div>)}
            </div>
        </div>
        </>
    )
}
export default Account