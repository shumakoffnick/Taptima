import React from "react";
import { useState } from "react";

const BasicProfile = ({state, setState})=>{
const [name, setName] = useState("")
const [surname, setSurname] = useState("")
const [email, setEmail] = useState("")
const [country, setCountry] = useState("")
const [city, setCity] = useState("")
const [phone, setPhone] = useState("")


const isValidEmail = (email)=>{
    return /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g.test(email)
}
const isValidPhone = (phone)=>{
    return /^((8|\+7)[ ]?)?(\(?\d{3}\)?[ ]?)?[\d ]{7,10}$/.test(phone)
}
const but = ()=>{
    console.log(ob)
    if(name === ""){
        alert("Введите имя")
        ob.firstName = state.map(s=>s.firstName)
        console.log(ob.firstName)
    }else{
        ob.firstName = name
        console.log(ob.firstName)
    }
    if(surname === ""){
        alert("Введите фамилию")
        ob.secondName = state.map(s=>s.secondName)
        console.log(ob.secondName)
    }else{
        ob.secondName = surname
        console.log(ob.secondName)
    }
    
    if(!isValidEmail(email)){
        ob.email = state.map(s=>s.email)
        console.log(ob.email)
        alert('Не правильный Email')
    }else{
        ob.email = email
        console.log(ob.email)}
    if(country === ""){
        alert("Введите страну")
        ob.country = state.map(s=>s.country)
        console.log(ob.country)
    }else{
        ob.country = country
        console.log(ob.country)
    }
    if(city === ""){
        alert("Введите город")
        ob.city = state.map(s=>s.city)
        console.log(ob.city)
    }else{
        ob.country = city
        console.log(ob.city)
    }
    if(!isValidPhone(phone)){
        ob.phone = state.map(s=>s.phone)
        console.log(ob.phone)
        alert("Не правильный номер")
    }else{
        ob.phone = phone
        console.log(ob.phone)}
    setState([ob])
    setName("")
    setSurname("")
    setEmail("")
    setCountry("")
    setCity("")
    setPhone("")
}
const ob = {
    firstName: "",
    secondName: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    id: Math.random()
}
    return(
        <>
        <div className="basicProfile">
            <div className="basicHeader">
                <div className="basicTitle">Basic Profile</div>
                <div className="basicSuptitle">The information can be edited from yuor profile page</div>
            </div>
        <div className="inputBlock">
        <input className="theBasicInput" type="text" placeholder="First Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input className="theBasicInput" type="text" placeholder="Second Name" value={surname} onChange={(e)=>setSurname(e.target.value)}/>
        <input className="theBasicInput" type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input className="theBasicInput" type="text" placeholder="Country" value={country} onChange={(e)=>setCountry(e.target.value)}/>
        <input className="theBasicInput" type="text" placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)}/>
        <input className="theBasicInput" type="text" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        
        </div>
        <div className="basicButton">
        <button className="theBasicButton" onClick={but}>SAVE SETTINGS</button>
        </div>
        </div>
        
        </>
    )
}
export default BasicProfile