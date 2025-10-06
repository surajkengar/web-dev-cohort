// .call() allows you to borrow a function from one object and use that for another object.
//it take a argunment seperately not array like apply method.


// 1)
const obj1 ={
    name : "suraj",
    age : 23,
    about :function(){
        console.log(`name is ${this.name} ans age is ${this.age}`);
    }
}

const obj2 ={
    name : "sagar",
    age : 23,

}

obj1.about.call(obj2);

// 2)

 const obj3 ={
    name:"santosh",
    age:23,
    about:function(){
        console.log(`name is ${this.name} and age is ${this.age}`);

    }

 }

  const obj4 ={
    name:"yuga",
    age:24,

 }

 obj3.about.call(obj4);


 //3
  function about(hobby , fav){
    console.log()
  }
