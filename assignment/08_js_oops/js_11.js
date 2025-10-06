// class in javascript

class  creat_user{
    constructor(name ,age){
        this.first_name =name;
        this.age=age;
    }
    eat(){
            console.log("this is a class");
    }
    about(){
        console.log(`name is ${this.first_name} and age is ${this.age}`);
    }

}

const new_user = new creat_user("suraj",23);

console.log(new_user.eat());
console.log(Object.getPrototypeOf(new_user));
console.log(new_user.about())