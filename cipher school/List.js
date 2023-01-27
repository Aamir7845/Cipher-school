import React, { useState}from "react";
import Test from "./Test";
import "./List.css"
import UserDetails from "./UserDetails";

const List = () => {
    let [state, setState] = useState({ 
        name: "Anoop Yadav",})

    let allUsers = [
        {
            name: "Aamir", email:"asohail@mail.com",
            phone: "24478388238",
        },
        {
            name: " Prakhar", email:"ps@mail.com",
            phone: "536487298923",
        },
        { 
            name: " Ashutosh", email:"asahu@mail.com",
            phone: "735888374782",
        },
    ];
    
    let setStateName = (name) => {
        setState({...state, name});
    };
     return (
        <div  className="anoopp">
            <Test name ={state.name} setName={setStateName} />
            {allUsers.map((user,index) => (
                <UserDetails key={index} user={user} />
            ))}
        </div>
     );
    
    };
export default List;