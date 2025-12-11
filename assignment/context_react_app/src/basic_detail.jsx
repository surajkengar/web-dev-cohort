import {useContext} from "react";
import { mycontext } from "./Addprovider";


function Basic(){
      const{auth , setauth} = useContext(mycontext);
      function handleClkick(){
            setauth({})
        }

    return (
        <>
            <h1>name:{auth.name}</h1>
            <h1>city:{auth.city}</h1>
            <button onClick={handleClkick}>
                logout
            </button>
        </>
    )
}

export default Basic;