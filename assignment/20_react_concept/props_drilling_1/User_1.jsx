


function User_1({id , firstname , lastname , age , handleclick , handleclick1}){

    return <div>
        <h3>firstname : {firstname}</h3>
        <h3>lastname  : {lastname}</h3>
        <h3>age : {age}</h3>
        <h3>id: {id}</h3>

        <button onClick={()=>{
            handleclick(id);
        }}>increse age</button>

        <button onClick={()=>{
            handleclick1(id);
        }}>delete age</button>
        
    </div>
}

export default User_1;