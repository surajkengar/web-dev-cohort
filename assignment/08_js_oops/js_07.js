// Object.create(user_method)

// Creates a new object (new_arr) whose prototype is user_method.

// So if a property/method is not found in new_arr, JS will look inside user_method.

const user_method ={
    about : function(){
        console.log(`name is ${this.first_name} and he is ${this.age} old`)
    },

    is18 :function(){
        return this.age >= 18 ;
    }
}




function usercreate(first_name,last_name , age  ){
    const new_arr =Object.create(user_method);
    new_arr.first_name=first_name;
    new_arr.last_name=last_name;
    new_arr.age =age;

    return new_arr;
}

const temp1=usercreate("suraj","kengar",23);
console.log(temp1.about());
console.log(temp1.is18());