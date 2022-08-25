import React from "react";
import PersonalInformation from "./ProfileItem/PersonalInformation";
import BasicProfile from "./ProfileItem/BasicProfile";
import Notifications from "./ProfileItem/Notifications";
const MainProfile  = ({state, setState, not, setNot})=>{
    return(
        <>
        <div className="profile">   
            <div className="profilePersonal">
                <PersonalInformation state={state}/>
            </div>
            <div className="BasicAndNotification">
                <BasicProfile state={state} setState={setState}/>
                <Notifications not={not} setNot={setNot}/>
            </div>
        </div>
        </>
    )
}
export default MainProfile