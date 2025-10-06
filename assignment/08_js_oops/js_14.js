// getter 

class user{
    constructor(name , age ){
        this.name =name;
        this.age=age;
    }

    get user_name(){
        return `user name is ${this.name} and age is ${this.age}`;
    }

    setname1(name ,age){
        this.name=name;
        this.age=age;
    }
}


const user1 = new user("suraj", 23);

user1.setname1("sagar" , 25);

console.log(user1.user_name)

