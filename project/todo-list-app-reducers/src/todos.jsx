import Todo from "./todo";
import { useContext } from "react";
import { mycontext } from "./App";

function Todos(){
    const{state} = useContext(mycontext);
    return(
        <>
           { state.map((todo1)=>{
               return <Todo key={todo1.id} todo={todo1}/>
           })}
        </>
    )
}

export default Todos;