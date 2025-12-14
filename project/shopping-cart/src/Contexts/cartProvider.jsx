import { createContext, useReducer,useContext } from "react";
const mycontext = createContext();

function Reducer(cart , action){
        if(action.type === "AddNewCart"){
            return [...cart , action.payload]
        }
        if(action.type === "increseQuantity"){
            
            return cart.map((item)=>{
                    if(item.id === action.payload.id) {
                        return {...item , quantity : item.quantity + 1}
                    }else{
                        return item;
                    }
                })
            
        }
        if(action.type === "decreseQuantity"){
            
            return cart.map((item)=>{
                if(item.quantity === 0){
                    return item;
                }
                 if(item.id === action.payload.id) {
                    return {...item, quantity:item.quantity - 1}
                }else{
                    return item;
                }
            })
        }
        if(action.type === "Remove"){

           return cart.filter((item)=>{
                return item.id !== action.payload.id;
           })
        }
        return cart;
}

function Provider({children}){
    const[cart , dispatch]=useReducer(Reducer , []);            
    const Additem = (newCartItem)=>{
        dispatch({type:"AddNewCart" , payload:newCartItem});
    };
    return (
        <mycontext.Provider value={
            {cart , Additem , dispatch}
        }>
            {children}
        </mycontext.Provider>
    )
}
export function useCart(){
    return useContext(mycontext);
}
export default Provider;