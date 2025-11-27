import {useState} from "react";
function StateObject(){
    const [person , setperson] = useState({
        firstname : "suraj",
        lastname  : "kengar",
        age : 22,
        phone : 8745965447
    })

    function handleClick(){
        setperson(()=>{
            return {
                ...person,
                age:23
            }
        })
    }

    return <>
        <h4>firstname : {person.firstname}</h4>
        <h4>lastname : {person.lastname}</h4>
        <h4>age: {person.age}</h4>
        <h4>phone : {person.phone}</h4>

        <button onClick={handleClick}>increase age</button>
       

    
    </>
}

export default StateObject;