# JavaScript Concepts

Today in class, I learned several JavaScript concepts. Let’s explore them in this blog.

JavaScript (JS) is a **programming language** used to make web pages **interactive and dynamic**. It can change HTML and CSS on the fly and handle user actions like clicks and form submissions.

---

## ⚙️ What is JavaScript?

JavaScript is a **client-side scripting language** that runs inside the browser. It is one of the core technologies of the web — along with HTML and CSS.

It can also run on the **server-side** using **Node.js**.

---

## 🧩 Ways to Add JavaScript

1. **Inline JavaScript**
   ```html
   <button onclick="alert('Hello!')">Click me</button>
   ```

2. **Internal JavaScript**
   ```html
   <script>
     console.log('Hello, world!');
   </script>
   ```

3. **External JavaScript**
   ```html
   <script src="script.js"></script>
   ```

---

## 🧠 Variables in JavaScript

Variables store data values. You can declare them using `var`, `let`, or `const`.

```js
var name = "Suraj";   // old way (function-scoped)
let age = 25;          // modern (block-scoped)
const country = "India"; // constant value
```

---

## 🔢 Data Types

| Type | Example |
|------|----------|
| String | `"Hello"` |
| Number | `42` |
| Boolean | `true` or `false` |
| Object | `{ name: "Suraj", age: 25 }` |
| Array | `["HTML", "CSS", "JS"]` |
| Null | `null` |
| Undefined | `let x;` |
| Symbol | `Symbol('id')` |

---

## 🧮 Operators

```js
let x = 10, y = 5;
console.log(x + y); // 15 (Addition)
console.log(x - y); // 5 (Subtraction)
console.log(x * y); // 50 (Multiplication)
console.log(x / y); // 2 (Division)
console.log(x % y); // 0 (Remainder)
```

**Comparison operators:**
`==`, `===`, `!=`, `<`, `>`, `<=`, `>=`

**Logical operators:**
`&&` (AND), `||` (OR), `!` (NOT)

---

## 🧰 Conditional Statements

```js
let age = 20;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You cannot vote!");
}
```

### Ternary Operator
```js
let result = age >= 18 ? "Adult" : "Minor";
```

---

## 🔁 Loops

### For Loop
```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### While Loop
```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### For...of Loop
```js
for (let item of ["a", "b", "c"]) {
  console.log(item);
}
```

---

## 🧮 Functions

```js
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Suraj"));
```

### Arrow Function
```js
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
```

---

## 🧱 Objects

Objects store data in key-value pairs.

```js
const person = {
  name: "Suraj",
  age: 25,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Hello, Suraj
```

---

## 📦 Arrays

```js
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple

fruits.push("Orange"); // add item
fruits.pop();          // remove last item
```

Useful methods: `map()`, `filter()`, `forEach()`, `reduce()`

---

## ⚙️ DOM Manipulation

You can use JavaScript to modify HTML and CSS dynamically.

```js
document.getElementById("title").innerText = "New Title";
document.querySelector(".btn").style.color = "red";
```

### Event Handling
```js
document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});
```

---

## ⏱️ Timing Functions

```js
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);
```

---

## 🧠 ES6 Features

- `let` and `const`
- Arrow functions
- Template literals: `` `Hello ${name}` ``
- Destructuring: `const {name, age} = person;`
- Modules: `import` and `export`
- Default parameters
- Spread and rest operators (`...`)

---

## ⚡ Asynchronous JavaScript

### Callback Example
```js
setTimeout(() => {
  console.log("This runs later!");
}, 1000);
```

### Promise Example
```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Async/Await Example
```js
async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getData();
```

---

✍️ _This is a summary of what I learned today. Understanding JavaScript helps bring web pages to life and enables advanced functionality in websites and web apps._
