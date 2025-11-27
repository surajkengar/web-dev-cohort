

function User_1({firstname , id , lastname , age , handleclick}){
    return <div>
        <h3>id : {id}</h3>
        <h3>firstname : {firstname}</h3>
        <h3>lastname : {lastname}</h3>
        <h3>age : {age}</h3>

        <button onClick={()=>{
            handleclick(id);
        }}>increse age</button>
    </div>
}

export default User_1;