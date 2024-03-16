import { MongoClient } from "mongodb";
import 'dotenv/config'

// import config from "./.config";

const ATLAS_URL = `mongodb+srv://mkmistry660345:BgLSU0J65M7DmFup@cluster0.lhscxjg.mongodb.net/?retryWrites=true&w=majority`;

const connectionString = ATLAS_URL || "";
const client = new MongoClient(connectionString);

async function connectToMongo() {
  try {
    console.log("Connecting to MongoDB ATLAS...");
    await client.connect();
    return client.db('test-db');
  } catch (error) {
    console.error("Error connecting to MongoDB ATLAS:", error);
    throw error; 
  }
}

const db = await connectToMongo();
console.log("Connected to MongoDB ATLAS");

export default db;
