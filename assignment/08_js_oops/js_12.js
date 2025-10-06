// create a animal class 

class Animal{
    constructor(name , age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return `animal is ${this.name} is eating`;
    }

    iscute(){
        return `true`;
    }

    issupercute(){
        return age <= 1;
    }
}

const animal_1 = new Animal("tomy" , 10);
const animal_2 =new Animal("bolt" , 8);

console.log(animal_1.eat());