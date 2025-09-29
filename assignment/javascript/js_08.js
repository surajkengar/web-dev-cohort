// typeof operator in JavaScript

// Different data types present in JavaScript:
// string   - "suraj"
// number   - 2, 3, 4, 4.5
// boolean  - true or false
// undefined - variable declared but not assigned a value
// null     - special value meaning "no value"
// BigInt   - large integer values
// symbol   - unique identifiers

// typeof operator is used to check the data type of a value/variable:

let age = 23;
console.log(typeof age); // "number"

let name = "suraj";
console.log(typeof name); // "string"

//  typeof null is a known bug in JavaScript:
console.log(typeof null); // "object" (historical bug)

// ---------- Type Conversions ----------

// 1️ Convert number into string:
age = age + ""; // Add empty string
console.log(typeof age); // "string"

// Another way (preferred):
let num1 = 23;
num1 = String(num1);
console.log(typeof num1); // "string"

// 2️ Convert string into number:
let roll = +"34"; // Using + operator
console.log(typeof roll); // "number"

// Another way (preferred):
let strNum = "123";
strNum = Number(strNum);
console.log(typeof strNum); // "number"

// 3️ Example with non-numeric string:
let firstname = "suraj";
firstname = Number(firstname); // NaN (Not a Number)
console.log(typeof firstname); // "number" (but value is NaN)

// 4️ Convert number into string (again using String()):
let num = 23;
num = String(num);
console.log(typeof num); // "string"
