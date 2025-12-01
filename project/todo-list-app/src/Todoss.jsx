import Todo from "./Todo";

function Todoss({Todos , handletoggle , removeTodo}){
    
    return <div>
        {
            Todos.map((Todo1)=>{
                return <div key={Todo1.id}>
                    <Todo {...Todo1}  handletoggle={handletoggle}  removeTodo={removeTodo}/>
                </div>
            })
        }
    </div>
}

export default Todoss;