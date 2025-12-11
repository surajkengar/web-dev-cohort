import {  useReducer } from "react";
import Todos  from "./todos";
import Addtodo from "./AddTodoform";
function reducer(state , action){
  if(action.type === "delete_todo"){
     return state.filter((todo)=> todo.id !== action.payload.id);
  }

  if(action.type === "Add"){
     return [...state , action.payload.NewTodo]
  }
  if(action.type === "Toggle"){
    return state.map((Todo)=>{
      if(action.payload.id === Todo.id){
        return {...Todo , status:!Todo.status}
      }else{
        return Todo;
      }
    })
  }
  return state;
}

function App() {
  const initialState=[
    {id:1 , name : "suraj" , status:true},
    {id:2 , name : "sagar" , status:false},
    {id:3 , name : "rohit" , status:true}
  ]
  const[state , dispatch]=useReducer(reducer , initialState);

  return (
    <>
        <Addtodo dispatch={dispatch}/>
        <Todos todos={state} dispatch={dispatch}/>
        
    </>
  )
}

export default App
