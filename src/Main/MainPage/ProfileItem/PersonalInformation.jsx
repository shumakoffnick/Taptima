import React from "react";
import Moment from 'react-moment';
import Rectangle from "/Users/nikolaj/Desktop/Taptima/taptima-app/src/img/Rectangle.png"

const PersonalInformation = ({state})=>{
    return(
        <>
       <div className="PersonalInformation">
        <div className="personalBlock">
            <div className="personalInfo">
                <div className="personalName">
                    <div className="personalTitle">{state.map(s=><div>{s.firstName}</div>)}</div>
                    <div className="personalTitleSecond">{state.map(s=><div>{s.secondName}</div>)}</div>
                </div>
                <div className="personalLocation">
                    <div className="personalCountry">
                        {state.map(s=><div>{s.country}</div>)}
                    </div>
                    <div className="personalCountry">
                        {state.map(s=><div>{s.city}</div>)}
                    </div>
                </div>
                <div>
                <Moment format="YYYY-MM-DD HH:mm" interval={1000} />
                </div>
            </div>
            <img className="personalImg" src={Rectangle} alt={state.map(s=>s.firstName)}/>
        </div>
        <div className="personalButton">
            <button className="thePersonalButton">UPLOAD PICTURE</button>
            <button className="thePersonalButton">REMOVE PICTURE</button>
        </div>
       </div>
        </>
    )
}
export default PersonalInformation