// let keyword

// We can declare variables using the 'let' keyword.

// There are some differences between declaring variables using 'let' and 'var'.

// 1️ Scope difference:
// 'let' is block-scoped (available only inside the block { } it is declared in).
// 'var' is function-scoped (available throughout the function or globally if declared outside).

// Example with let:
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i); //  Error: i is not defined outside the loop

// Example with var:
for (var j = 0; j < 10; j++) {
  console.log(j);
}
console.log("value of j is " + j); //  Works because var is not block-scoped

// 2️ Re-declaration:
// 'var' allows re-declaration of the same variable in the same scope.
var first_name = "suraj";
var first_name = "sagar"; // Allowed
console.log(first_name); // "sagar"

// 'let' does NOT allow re-declaration in the same scope.
let last_name = "suraj";
// let last_name = "sagar"; //  Error: Identifier 'last_name' has already been declared
last_name = "sagar"; //  Allowed (just reassignment)
console.log(last_name);
