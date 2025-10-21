

// const {MongoClient}=require("mongodb")

// // const url = "mongodb+srv://suraj_kengar:sk%40123@cluster0.avqix1z.mongodb.net/";
// const url = "mongodb+srv://suraj_kengar:sk%40123@cluster0.avqix1z.mongodb.net/";

// const client = new MongoClient(url);

// const dbName ="first_database";

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('user_info');
//   const data ={
//     firstname : "sagar",
//     lastname : "kengar",
//     city : "sangola"
//   }

//   //remove docunment
//   const deleteResult = await collection.deleteMany({ firstname:"sagar" });
//   console.log('Deleted documents =>', deleteResult);

// //   const updateResult = await collection.updateOne({ firstname: "sagar" }, { $set: { firstname:"omkar" } });
// //   console.log('Updated documents =>', updateResult);
//   //insert data
// //   const insertResult = await collection.insertMany([data]);
// //    console.log('Inserted documents =>', insertResult);

//    //filter docunment

// //    const filteredDocs = await collection.find({ city:"pune" }).toArray();
// //    console.log('Found documents filtered by { cirt:pune } =>', filteredDocs);
//   // the following code examples can be pasted here...
//   const findResult = await collection.find({}).toArray();
//    console.log('Found documents =>', findResult);


//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());


const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://suraj_kengar:sk%40123@suraj_kengar.avqix1z.mongodb.net/";

const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB Atlas");
    const db = client.db("first_database");
    const collection = db.collection("user_info");
    const docs = await collection.find({}).toArray();
    console.log("Documents:", docs);
  } catch (err) {
    console.error("❌ Connection failed:", err);
  } finally {
    await client.close();
  }
}

main();


