import {useState} from  "react";

function App(){
  const [countcart , setcountcart] = useState(0); 
  return <div>
      <h2>cart item:{countcart}</h2>
      <button onClick={()=>{
        setcountcart(countcart+1);
      }}>Add cart</button>

      <button onClick={()=>{
        setcountcart(0);
      }}>Reset cart</button>

  </div>
}

export default App;