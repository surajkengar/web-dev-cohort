import { createContext } from "react";
 export const mycontext = createContext();
 import { useState } from "react";



function Provide({children}){

    const [auth , setauth] = useState({name : "suraj" , city:"pune"});
    return (
       <mycontext.Provider value={{auth:auth , setauth:setauth}}>
                {children}
       </mycontext.Provider>
    )
}


export default Provide;