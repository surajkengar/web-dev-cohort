import {useState} from "react";


function StateArray(){
    const [fruits,setfruit] = useState(["mango" , "banana"]);
    function handleClick(){
        setfruit((previous)=>{
            return [...previous,"orange"];
        });
    }
    return <>
        <ul>
            {
                fruits.map((fruit)=>{
                   return  <li key={fruit}>{fruit}</li>
                })
            }
        </ul>
        <button onClick={handleClick}>Add new fruit</button>
    </>
}

export default StateArray;