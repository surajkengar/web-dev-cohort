import {useState} from "react";

function App(){
  let firstName = "suraj";
  function handleclick(){
    console.log(firstName);
    firstName="rohit";
  }

  return <div>
    <h1>{firstName}</h1>
    <button onClick={handleclick}>change the name</button>

  </div>
}

export default App;