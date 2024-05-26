//name: Janani.D.P
//Date: 26-05-2024
//Reviewed by:
const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const database = client.db('myDatabase');
        const collection = database.collection('myCollection');

        // Create
        const insertResult = await collection.insertOne({ name: "Janani", age: 21 });
        console.log('Inserted document:', insertResult.insertedId);

        // Read
        const findResult = await collection.findOne({ name: "Janani" });
        console.log('Found document:', findResult);

        // Update
        const updateResult = await collection.updateOne({ name: "Janani" }, { $set: { age: 22 } });
        console.log('Updated document count:', updateResult.modifiedCount);

        // Delete
        const deleteResult = await collection.deleteOne({ name: "Janani" });
        console.log('Deleted document count:', deleteResult.deletedCount);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
