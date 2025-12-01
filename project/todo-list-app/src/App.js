import {useState}from "react";
import Todo_from from "./Todo_from";
import Todoss from "./Todoss";
import { ToastContainer, toast } from 'react-toastify';
 

function App() {
  const [Todos , settodos] = useState([
    {id : 1 , title : "learn react" , completed : false},
    {id : 2 , title : "learn javascript" , completed : true},
    {id : 3 , title : "learn Sql" , completed : false}

  ])

  function addTodos(newTodo){
      settodos((previousState)=>{
         return [...previousState , newTodo]
      })
  }

  const handletoggle = (id)=>{
        settodos(
          (previousState)=>{
              return previousState.map((todo)=>{
                if(id === todo.id){
                  return {...todo ,completed : !todo.completed }
                }else{
                  return todo
                }
              })
          }
        )
  }

  const removeTodo = (id)=>{
       settodos((previousState)=>{
        return previousState.filter((todo)=>{
            if(todo.id !== id){
              return {...todo}
            }
        })
      })
  }
  return (
    <div className="container">
        <ToastContainer />
        <h1 className="main_title">Todo-List-App</h1>
        <Todo_from  addTodos={addTodos}/>
        <Todoss  Todos={Todos} handletoggle={handletoggle} removeTodo={removeTodo}/>
    
    </div>
  );
}

export default App;
