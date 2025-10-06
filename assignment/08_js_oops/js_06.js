// bind() is also used a borrow a function from a one object and use that for specific object

// bind() function is dont return value immeditely insted it return a new function with this value set

const obj1 ={
    name :"suraj",
    age :23,
    about: function(city , country){
        console.log(`name is ${this.name} and age is ${this.age} and city name ${city} and country name is ${country}`);
    }
}

const obj2 ={
    name :"sagar",
    age :24
}

const temp =obj1.about.bind(obj2);
 
temp("pune","country");