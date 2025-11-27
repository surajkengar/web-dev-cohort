import User_1 from "./User_1";
function State_1({users , handleclick ,handleclick1}){

    return <div >
        {
            users.map((user)=>{
                return <div key={user.id}>
                    <User_1 {...user}  handleclick ={handleclick} handleclick1={handleclick1} />
                </div> 
            })
        }
    </div>
}

export default State_1;