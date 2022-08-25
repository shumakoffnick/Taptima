import React, { useState } from "react";

const Notifications = ({not, setNot})=>{
 
    

const [notemail, setNotemail] = useState(true)
const [notpush, setNotpush] = useState(true)
const [nottext, setNottext] = useState(true)
const [notphone, setNotphone] = useState(true)
const [mesemail, setMesemail] = useState(true)
const [mespush, setMespush] = useState(true)
const [mestext, setMestext] = useState(true)
const changenotemail = ()=>{
    setNotemail(!notemail)
    console.log(notemail)
}
const changenotpush = ()=>{
    setNotpush(!notpush)
    console.log(notpush)
}
const changenottext = ()=>{
    setNottext(!nottext)
    console.log(nottext)
}
const changenotphone = ()=>{
    setNotphone(!notphone)
    console.log(notphone)
}
const changemesemail = ()=>{
    setMesemail(!mesemail)
    console.log(mesemail)
}
const changemespush = ()=>{
    setMespush(!mespush)
    console.log(mespush)
}
const changemestext = ()=>{
    setMestext(!mestext)
    console.log(mestext)
}
    
const obj = {
    notificationEmail: notemail,
    notificationPush: notpush,
    notificationText: nottext,
    notificationPhone: notphone,
    messagesEmail: mesemail,
    messagesPush: mespush,
    messageText: mestext
}
const changeDat = ()=>{
    setNot([{obj}])
    console.log(not)
}
    return(
        <>
        <div className="notifications">
            <div className="notificationHeader">
                <div className="notificationTitle">Notifications</div>
                <div className="notificationSuptitle">Mange the notifications emailing</div>
            </div>
            <div className="notificationCheckBlock">
                <div className="notificationCheckBlockNot">
                    <div className="notTitle">Notifications</div>
                    <div className="notBlock">
                        <input type="checkbox" onClick={changenotemail}/>
                        <div className="checkText">Email</div>
                    </div>
                    <div className="notBlock">
                        <input type="checkbox" onClick={changenotpush}/>
                        <div className="checkText">Push notifications</div>
                    </div>
                    <div className="notBlock">
                        <input type="checkbox" onClick={changenottext}/>
                        <div className="checkText">Text Messages</div>
                    </div>
                    <div className="notBlock">
                        <input type="checkbox" onClick={changenotphone}/>
                        <div className="checkText">Phone Calls</div>
                    </div>
                    
                </div>
                <div className="notificationCheckBlockMes">
                    <div className="mesTitle">Messages</div>
                    <div className="mesBlock">
                        <input type="checkbox" onClick={changemesemail}/>
                        <div className="checkText">Email</div>
                    </div>
                    <div className="mesBlock">
                        <input type="checkbox" onClick={changemespush}/>
                        <div className="checkText">Push Notifications</div>
                    </div>
                    <div className="mesBlock">
                        <input type="checkbox" onClick={changemestext}/>
                        <div className="checkText">Text Messages</div>
                    </div>
                    
                </div>
            </div>
            <div className="notificationButton">
                <button onClick={changeDat} className="theNotificationButton">SAVE</button>
            </div>
        </div>
        </>
    )
}
export default Notifications