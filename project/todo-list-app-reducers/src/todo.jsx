
import { useContext } from "react";
import { mycontext } from "./App";
function Todo({todo}){
    const{state , dispatch } = useContext(mycontext);
    function handleClick(){
        dispatch({type:"delete_todo", payload:{id:todo.id}});
    }

    function handleToggle(){
        dispatch({type:"Toggle" , payload:{id:todo.id}});
    }
    return (
        <div style={{
            fontFamily:"sans-serif",
            backgroundColor:"#cecece",
            padding:"1rem",
            margin:"1rem",
            borderRadius:"1rem"
        }
            
        }>
            <h4>id : {todo.id}</h4>
            <h4>name :{todo.name}</h4>
            <h4>status :{todo.status?"true":"false"}</h4>
            <button onClick={handleClick}>Delete</button>
            <button onClick={handleToggle}>Toggle completed</button>
        </div>
    )
}

export default Todo;