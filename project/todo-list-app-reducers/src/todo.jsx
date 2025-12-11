

function Todo({id,name,status , dispatch}){
    function handleClick(){
        dispatch({type:"delete_todo", payload:{id:id}});
    }

    function handleToggle(){
        dispatch({type:"Toggle" , payload:{id:id}});
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
            <h4>id : {id}</h4>
            <h4>name :{name}</h4>
            <h4>status :{status?"true":"false"}</h4>
            <button onClick={handleClick}>Delete</button>
            <button onClick={handleToggle}>Toggle completed</button>
        </div>
    )
}

export default Todo;