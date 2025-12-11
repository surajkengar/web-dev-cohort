import Todo from "./todo";

function Todos({todos ,dispatch}){
    
    return(
        <>
           { todos.map((todo1)=>{
               return <Todo key={todo1.id} {...todo1} dispatch={dispatch}/>
           })}
        </>
    )
}

export default Todos;