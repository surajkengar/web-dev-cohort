
import {useState} from "react";
import {v4 as uuid} from "uuid";
import {toast} from "react-toastify";
function Todo_from({addTodos}){
    const [title , settitle] = useState("");
    function handlesubmit(e){
        e.preventDefault();
        if(title.trim().length===0){
            toast.error("please fill input" , {
                autoClose:2000,
            });
            return;
        }
        const newTodo={
            id:uuid(),
            title : title,
            completed :false
            
        }

        addTodos(newTodo);

       settitle("");

    }
    return <form onSubmit={handlesubmit} className="Todoform"> 
        <input 
        className="Todoform_input"
        type="text"
        value={title}
        onChange={(e)=>{
            settitle(e.target.value)
        }}
        />
        <button type="submit" className="Todoform_btn">Add</button>
    </form>
}

export default Todo_from;