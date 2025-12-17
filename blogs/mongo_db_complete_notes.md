# MongoDB Complete Notes

---

## 📘 Table of Contents

1. Introduction to MongoDB
2. NoSQL vs SQL
3. MongoDB Architecture
4. Installing MongoDB & MongoDB Compass
5. MongoDB Database & Collections
6. CRUD Operations
7. Query Operators
8. Indexes in MongoDB
9. Schema Design & Data Modeling
10. MongoDB with Node.js (Mongoose)
11. Mongoose Schema & Model
12. Relationships in MongoDB
13. Aggregation Framework
14. Transactions
15. MongoDB Security Best Practices
16. Environment Variables
17. Performance Optimization
18. Project Structure Best Practices

---

## 1️⃣ Introduction to MongoDB

* MongoDB is a **NoSQL, document-based database**.
* Stores data in **BSON (Binary JSON)** format.
* Schema-less → flexible structure.
* Highly scalable and performant.

---

## 2️⃣ NoSQL vs SQL

| SQL | NoSQL |
|----|------|
| Tables | Collections |
| Rows | Documents |
| Fixed Schema | Flexible Schema |
| Joins | Embedded / References |

---

## 3️⃣ MongoDB Architecture

* **Database** → contains collections
* **Collection** → contains documents
* **Document** → JSON-like object
* **Replica Set** → High availability
* **Sharding** → Horizontal scaling

---

## 4️⃣ Installing MongoDB

### Check Installation

```bash
mongod --version
mongosh
```

* Use **MongoDB Compass** for GUI.

---

## 5️⃣ Database & Collections

```js
use myDatabase

db.createCollection('users')
show collections
```

---

## 6️⃣ CRUD Operations

### Insert

```js
db.users.insertOne({ name: 'Suraj', age: 23 })
```

### Read

```js
db.users.find({ age: { $gt: 20 } })
```

### Update

```js
db.users.updateOne({ name: 'Suraj' }, { $set: { age: 24 } })
```

### Delete

```js
db.users.deleteOne({ name: 'Suraj' })
```

---

## 7️⃣ Query Operators

```js
$gt, $lt, $gte, $lte
$in, $nin
$and, $or
```

Example:

```js
db.users.find({ age: { $gte: 18, $lte: 30 } })
```

---

## 8️⃣ Indexes

* Improve query performance

```js
db.users.createIndex({ email: 1 })
```

---

## 9️⃣ Schema Design

* **Embedded Documents** → Faster reads
* **References** → Avoid duplication

Rule:
> Read-heavy → Embed
> Write-heavy → Reference

---

## 🔟 MongoDB with Node.js (Mongoose)

```bash
npm install mongoose
```

```js
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
```

---

## 1️⃣1️⃣ Mongoose Schema & Model

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  age: Number
});

const User = mongoose.model('User', userSchema);
```

---

## 1️⃣2️⃣ Relationships

### One-to-Many (Reference)

```js
userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
```

### Populate

```js
Post.find().populate('userId')
```

---

## 1️⃣3️⃣ Aggregation Framework

```js
db.orders.aggregate([
  { $match: { status: 'completed' } },
  { $group: { _id: '$userId', total: { $sum: '$amount' } } }
])
```

---

## 1️⃣4️⃣ Transactions

* Requires **Replica Set**

```js
const session = await mongoose.startSession();
session.startTransaction();
```

---

## 1️⃣5️⃣ MongoDB Security Best Practices

* Never expose DB publicly
* Use authentication
* Use environment variables
* Limit database permissions

---

## 1️⃣6️⃣ Environment Variables

```env
MONGO_URI=mongodb://localhost:27017/mydb
```

---

## 1️⃣7️⃣ Performance Optimization

* Use indexes
* Avoid large documents
* Use projection

```js
db.users.find({}, { name: 1 })
```

---

## 1️⃣8️⃣ Project Structure Best Practices

```
backend/
├── models/
├── controllers/
├── routes/
├── config/
│   └── db.js
├── app.js
└── server.js
```

---

✅ **Interview Tip**:
> MongoDB is preferred when scalability, flexibility, and high performance are required.

