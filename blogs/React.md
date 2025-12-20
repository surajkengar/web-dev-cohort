# React.js Concepts

Today in class, I learned several **React.js** concepts. Let’s explore them in this blog.

React.js is a **JavaScript library** used to build **fast, interactive, and reusable user interfaces**, especially for **single-page applications (SPAs)**.

---

## ⚛️ What is React.js?

React.js is an **open-source JavaScript library** developed by **Facebook**. It focuses on building UI components using a **component-based architecture**.

React uses a **virtual DOM** to efficiently update and render components.

---

## 🧩 Why Use React?

* Reusable components
* Fast performance (Virtual DOM)
* Easy to manage UI state
* Strong community support
* Used by big companies (Meta, Netflix, Airbnb)

---

## 🏗️ Setting Up React

You can create a React app using:

```bash
npx create-react-app my-app
cd my-app
npm start
```

Or using **Vite** (faster):

```bash
npm create vite@latest my-app
```

---

## 🧱 Components in React

Components are the **building blocks** of a React application.

### Functional Component

```jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```

### Arrow Function Component

```jsx
const Welcome = () => <h1>Hello, React!</h1>;
```

---

## 🧾 JSX (JavaScript XML)

JSX allows us to write **HTML-like code inside JavaScript**.

```jsx
const element = <h1>Hello World</h1>;
```

JSX makes code more readable and expressive.

---

## 📦 Props

Props are used to **pass data from parent to child components**.

```jsx
function Greeting(props) {
  return <h2>Hello, {props.name}</h2>;
}

<Greeting name="Suraj" />
```

---

## 🧠 State

State is used to **store and manage data inside a component**.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

---

## 🔄 Event Handling

```jsx
function ClickButton() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

---

## 🔁 Conditional Rendering

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

---

## 📃 Lists and Keys

```jsx
const fruits = ["Apple", "Banana", "Mango"];

<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>
```

Keys help React identify which items changed.

---

## 🧩 useEffect Hook

Used for **side effects** like API calls.

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Component mounted");
}, []);
```

---

## 🌐 Handling Forms

```jsx
function Form() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

---

## 🚦 React Router (Navigation)

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

---

## ⚡ React Hooks (Common)

* `useState()` – manage state
* `useEffect()` – side effects
* `useContext()` – global state
* `useRef()` – access DOM elements

---

## 🔄 Controlled vs Uncontrolled Components

* **Controlled**: React controls the form data
* **Uncontrolled**: DOM controls the data

---

## ⚙️ Lifting State Up

State is shared between components by moving it to the **nearest common parent**.

---

## 🧠 React Best Practices

* Break UI into small components
* Use meaningful component names
* Avoid unnecessary re-renders
* Use keys properly

---

## 🚀 React with Backend

React can connect with backend APIs using `fetch` or `axios`.

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

---

✍️ *This blog summarizes the core React.js concepts I learned. React helps in building scalable, fast, and modern web applications.*
