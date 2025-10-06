//apply()
// apply method is same like call method difference is 
// 1) call method take argunment seperately and apply method take argunment in array.

const obj1 ={
    name : "suraj",
    age : 23,

    about : function(city , country){
        console.log(`name is ${this.name} and age is ${this.age} and city is ${city} and country is ${country}`);
    }
}

const obj2={
    name : "sagar",
    age : 24
}

obj1.about.apply(obj2 , ["pune","india"]);