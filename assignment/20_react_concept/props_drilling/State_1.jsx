import User_1 from "./User_1";
function State_1({users , handleclick}){

    return <div>
        {
            users.map((user)=>{
                return <div key={user.id}>
                    <User_1 {...user } handleclick={handleclick} />
                </div>
            })
        }
    </div>
}

export default State_1;