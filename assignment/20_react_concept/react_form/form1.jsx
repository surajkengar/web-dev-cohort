import { useState } from 'react';
import Counter from './counter';
import Userform from './userform';
import Fullname from './Fullname';
const fullname = firstname +" "+lastname;
function App() {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  // ✅ Handles typing in inputs
  function handlechange(e) {
    setformdata((previousState) => {
      return {
        ...previousState,
        [e.target.name]: e.target.value
      };
    });
  }

  // ✅ Handles form submit
  function handlesubmit(e) {
    e.preventDefault();
    console.log("Form Submitted:", formdata);
    alert("Form submitted successfully!");
  }

  const {firstname , lastname} = formdata;

  return (
  <>
    <form onSubmit={handlesubmit}>
      <h1>Form</h1>

      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={firstname}
        onChange={handlechange}
      />
      <br /><br />

      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={formdata.lastname}
        onChange={handlechange}
      />
      <br /><br />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formdata.email}
        onChange={handlechange}
      />
      <br /><br />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formdata.password}
        onChange={handlechange}
      />
      <br /><br />

      ✅ <button >Submit</button>

      <h1>user detail</h1>
      <p>firstname:{firstname}</p>
      <br />
      <p>lastname:{lastname}</p>
      
      
     
    </form>
     <Counter />
     <Userform />
     <Fullname Fullname={fullname}/>
    
    </>
    
  );
 
}

export default App;
