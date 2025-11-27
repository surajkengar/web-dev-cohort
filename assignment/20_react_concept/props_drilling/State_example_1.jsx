import {useState} from "react";

import State_1 from "./State_1";
function State_example_1(){
    const [users , setuser] =useState([
        {id : 1 , firstname :  "suraj" ,  lastname : "kengar" , age : 22},
        {id : 2 , firstname : "rohit" , lastname :"sharma" , age : 38},
        {id : 3 , firstname : "virat" , lastname : "kohali" , age : 37}
    ])

    function handleclick(id){
        setuser(
            users.map((user)=>{
                if(user.id === id){
                    return {
                        ...user , age : user.age +1
                    };
                }else{
                    return {...user};
                }
            })
        )
    }

    return <div>
        <State_1  users={users}  handleclick={handleclick}/>
    </div>
}

export default State_example_1;