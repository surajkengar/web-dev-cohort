import {useState} from "react";

function App(){
    const [counter , setcounter] = useState(0);
    function handleincrese(){
        setcounter(counter+1);

    }

    function handledecrese(){
        setcounter(counter - 1);
    }
      
    function handlereset(){
        setcounter(0);
    }
    return <div>
         <h1>counter:{counter}</h1>
         <button onClick={handleincrese}>increse</button>
         <button onClick={handledecrese}>decrese</button>
         <button onClick={handlereset}>reset</button>

    </div>
}

export default App;