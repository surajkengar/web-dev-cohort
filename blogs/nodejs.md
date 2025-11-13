# Node.js Complete Notes

---

## 📘 Table of Contents

1. Introduction to Node.js
2. Node.js Architecture
3. NPM (Node Package Manager)
4. Modules in Node.js
5. File System (fs module)
6. Events and EventEmitter
7. Streams and Buffers
8. HTTP Module (Creating Server)
9. Express.js Basics
10. Middleware in Express
11. Working with REST APIs
12. Connecting Node.js with MongoDB
13. Authentication using JWT & Bcrypt
14. Environment Variables (dotenv)
15. Asynchronous Programming (Callback, Promise, Async/Await)
16. Error Handling
17. File Uploads & Multer
18. Project Structure Best Practices

---

## 1️⃣ Introduction to Node.js

* Node.js is a **JavaScript runtime** built on **Chrome’s V8 engine**.
* Allows JavaScript to run **outside the browser**.
* Used for backend/server-side development.
* Non-blocking, event-driven architecture → great for scalable applications.

### Installation Check

```bash
node -v
npm -v
```

---

## 2️⃣ Node.js Architecture

* **Single-threaded** and **event-driven**.
* Uses **Event Loop** to handle multiple client requests efficiently.

### Key Components

* **Event Loop:** Handles async operations.
* **Libuv:** Provides thread pool for heavy I/O.
* **Callback Queue:** Stores callback functions.

---

## 3️⃣ NPM (Node Package Manager)

* Manages Node.js packages.

### Common Commands

```bash
npm init -y        # Initialize project
npm install express # Install package
npm uninstall express
npm install --save-dev nodemon
```

---

## 4️⃣ Modules in Node.js

Three types:

1. **Core Modules:** Built-in (fs, http, os, path, events).
2. **Local Modules:** Custom modules you create.
3. **Third-Party Modules:** Installed via npm.

### Example:

```js
const fs = require('fs');
const os = require('os');
console.log(os.platform());
```

### Export/Import Custom Module

```js
// math.js
exports.add = (a,b) => a+b;

// app.js
const math = require('./math');
console.log(math.add(2,3));
```

---

## 5️⃣ File System Module (fs)

### Read/Write Files

```js
const fs = require('fs');

fs.writeFileSync('demo.txt', 'Hello Node.js');
const data = fs.readFileSync('demo.txt', 'utf8');
console.log(data);
```

### Async Methods

```js
fs.readFile('demo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

## 6️⃣ Events and EventEmitter

```js
const EventEmitter = require('events');
const event = new EventEmitter();

event.on('sayMyName', () => {
  console.log('Your name is Suraj');
});

event.emit('sayMyName');
```

---

## 7️⃣ Streams and Buffers

* Used to handle large data efficiently.

### Types of Streams

1. Readable
2. Writable
3. Duplex
4. Transform

### Example

```js
const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
readStream.on('data', (chunk) => {
  console.log(chunk.toString());
});
```

---

## 8️⃣ HTTP Module (Create Server)

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Node.js');
});

server.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 9️⃣ Express.js Basics

```bash
npm install express
```

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Express');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 🔟 Middleware in Express

* Functions that execute **between request and response**.

### Example

```js
app.use((req, res, next) => {
  console.log('Middleware executed');
  next();
});
```

---

## 11️⃣ Working with REST APIs

```js
app.use(express.json()); // to parse JSON

app.get('/users', (req, res) => res.send('GET users'));
app.post('/users', (req, res) => res.send(req.body));
```

---

## 12️⃣ Connecting Node.js with MongoDB

```bash
npm install mongoose
```

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));
```

---

## 13️⃣ Authentication using JWT & Bcrypt

```bash
npm install jsonwebtoken bcryptjs
```

### Example

```js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const token = jwt.sign({id: 1}, 'secretkey', {expiresIn: '1h'});
console.log(token);
```

---

## 14️⃣ Environment Variables (dotenv)

```bash
npm install dotenv
```

```js
require('dotenv').config();
console.log(process.env.PORT);
```

---

## 15️⃣ Asynchronous Programming

### Callback Example

```js
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### Promise Example

```js
const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data loaded'), 1000);
  });
};
getData().then(console.log);
```

### Async/Await Example

```js
async function fetchData() {
  const result = await getData();
  console.log(result);
}
fetchData();
```

---

## 16️⃣ Error Handling

```js
try {
  const data = JSON.parse('invalid json');
} catch (err) {
  console.error('Error:', err.message);
}
```

---

## 17️⃣ File Uploads using Multer

```bash
npm install multer
```

```js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});
```

---

## 18️⃣ Project Structure Best Practices

```
project/
├── node_modules/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── config/
│   └── app.js
├── .env
├── package.json
└── server.js
```

* Keep modular structure.
* Use environment variables for sensitive data.
* Validate inputs before database operations.


