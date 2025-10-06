// create a class for birds


class birds{
    constructor(name , color,fly){
        this.name = name;
        this.color =color;
        this.fly=fly;
    }

    eat(){
        return `bird name is ${this.name} `;
    }

    show_color(){
        return `bird color is ${this.color}`;
    }

    is_fly(){
        return this.fly;
    }
}

class parrot extends birds{
    constructor(name , color , isfly,speed){
        super(name , color);
        this.speed=speed;
     }
     run(){
            return `speed of bird is ${this.speed} kmph`;
    
    
        }
}


const bird1 =new birds("tony","white",true);
console.log(bird1.is_fly());
const bird2 =new parrot("bolt","green",true);
console.log(bird2.show_color());
console.log(bird2.is_fly());

const bird3 =new parrot("sony" , "white" ,true , 45);
console.log(bird3.run());