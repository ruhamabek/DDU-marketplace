import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI as string);
const db = client.db("sample_mflix"); // Replace with actual database name

client.connect().then(() => console.log("MongoDB connected."));

export { client, db };
