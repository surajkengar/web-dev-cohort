import { useReducer } from "react"

function Reduce1(State,action){
    if(action.type === "INCREMENT"){
        return {...State , count:State.count+1}
    }

    if(action.type === "RESET"){
        return {...State,count:0}
    }

    if(action.type === "DECREMENT"){
        return {...State , count:State.count-1}
    }

    return State;
}



const initialState={count:0};
function Reduce(){
    const[state , dispatch]=useReducer(Reduce1,initialState);
    function handle1(){
        dispatch({
            type:"INCREMENT"
        })
    }
    function handle2(){
        dispatch({
            type:"RESET"
        })
    }
    function handle3(){
        dispatch({
            type:"DECREMENT"
        })
    }
    

    return(
        <div>
            <h1>useReducers detail</h1>
            <hr/>
            <h1>count:{state.count}</h1>
            <button onClick={handle1}>increse</button>
            <button onClick={handle2}>Reset</button>
            <button onClick={handle3}>decrese</button>
        </div>
    )
}

export default Reduce;