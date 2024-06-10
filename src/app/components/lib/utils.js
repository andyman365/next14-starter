import mongoose from "mongoose";
const connection = {};
export const connectToDb = async() => {


// Or:
try {
    if (connection.isConnected){
        console.log("using existing connection");
        console.log("connected yo")
        return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log("connected yo")
} catch (error) {
  console.log(error);
  throw new Error(error)
}
}