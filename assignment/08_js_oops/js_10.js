// new key word in js

// What is new?

// The new keyword is used to create objects from a constructor function.

// It does 4 things behind the scenes:

// Creates a new empty object → {}

// Sets the new object’s prototype to the constructor’s prototype.

// Calls the constructor function with this pointing to the new object.

// Returns the new object automatically.

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}, age ${this.age}`);
}

// Create object using new
const user1 = new User("Suraj", 23);
user1.sayHi();

// new → shortcut for creating an object + linking it to prototype + returning it.

// Without new, you’d have to do everything manually with Object.create(...).