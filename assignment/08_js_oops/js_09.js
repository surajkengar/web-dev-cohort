//prototype in javascript

// Object.create(user.prototype) → creates a new object whose prototype is user.prototype.

// This lets the object use shared methods.

// new_user.first_name = first_name → sets own properties for this object.

// user.prototype.method1 = function(){...} → method is shared by all objects created with user().

// user1.method1() → JS first checks user1 for the method.

// Not found → goes to user.prototype → finds it → runs it.


function user(first_name , last_name ,age){
    const new_user =Object.create(user.prototype);
    new_user.first_name =first_name;
    new_user.last_name =last_name;
    new_user.age=age;

    return new_user;
}

user.prototype.method1 =function(first_name , last_name ,age){
    return `name is ${this.first_name} and last name is ${this.last_name} and age is ${this.age}`;
}


const user1 =user("suraj" , "kengar" ,23);

console.log(user1.method1());