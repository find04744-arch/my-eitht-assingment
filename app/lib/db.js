import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

const connectDB = async () => {
  await client.connect();
  return client.db(); // এটি BetterAuth-এর মঙ্গো অ্যাডাপ্টারের জন্য জরুরি
};

export default connectDB;