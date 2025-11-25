import {usestate} from "react";

function App(){
    const [firstName , setfirstName] =useState("suraj");

    return <div>

        <h1>firstName:{firstName}</h1>
        <button onClick={()=>{
            if(firstName === "suraj"){
                setfirstName("rohit");
            }
            else{
                setfirstName("suraj");
            }
        }}>change the name</button>
    </div>
}

export default App;