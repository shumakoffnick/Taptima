import React from "react";

const BasicProfile = ({state, setState})=>{

const changeFirstName = (e)=>{
    ob.firstName = e.target.value;
    console.log(ob);
    e.preventDefailt()
}
const changeSecondName = (e)=>{
    ob.secondName = e.target.value;
    console.log(ob)
    
}
const changeEmail = (e)=>{
    ob.email = e.target.value;
    console.log(ob)
}
const changeCountry = (e)=>{
    ob.country = e.target.value;
    console.log(ob)
}
const changeCity = (e)=>{
    ob.city = e.target.value;
    console.log(ob)
}
const changePhone = (e)=>{
    ob.phone = e.target.value;
    console.log(ob)
}
const but = ()=>{
    console.log(ob)
    setState([ob])
}
const ob = {
    firstName: "",
    secondName: "",
    email: "",
    country: "",
    city: "",
    phone: ""
}
    return(
        <>
        <div className="basicProfile">
            <div className="basicHeader">
                <div className="basicTitle">Basic Profile</div>
                <div className="basicSuptitle">The information can be edited from yuor profile page</div>
            </div>
        <div className="inputBlock">
        <input className="theBasicInput" type="text" placeholder="First Name" onChange={changeFirstName}/>
        <input className="theBasicInput" type="text" placeholder="Second Name" onChange={changeSecondName}/>
        <input className="theBasicInput" type="text" placeholder="Email" onChange={changeEmail}/>
        <input className="theBasicInput" type="text" placeholder="Country" onChange={changeCountry}/>
        <input className="theBasicInput" type="text" placeholder="City" onChange={changeCity}/>
        <input className="theBasicInput" type="text" placeholder="Phone" onChange={changePhone}/>
        
        </div>
        <div className="basicButton">
        <button className="theBasicButton" onClick={but}>SAVE SETTINGS</button>
        </div>
        </div>
        
        </>
    )
}
export default BasicProfile