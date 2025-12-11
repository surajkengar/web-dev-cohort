import {useState} from 'react';


function Addtodo({dispatch}){
    const[name , setname] =useState("");
    function handleSubmit(e){
        e.preventDefault();

        const NewTodo ={
            id:crypto.randomUUID(),
            name:name,
            status:false

        }
        dispatch({type:"Add" , payload:{NewTodo:NewTodo}});
    }
    return (
        <>
           <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" value={name} onChange={(e)=>{
                setname(e.target.value);
            }}/>
            <button type="submit">Add Todo</button>
           </form>
        </>
    )
}

export default Addtodo;