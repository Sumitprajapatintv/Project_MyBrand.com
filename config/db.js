import mongoose from "mongoose";
import colors from "colors";

const connectDB=async()=>{
    try{
             const conn=await mongoose.connect(process.env.MONGO_URL);
             console.log(`Mongo Db is Connectoed on ${conn.connection.host}`);
    }catch(error)
    {
        console.log(`Error in mongoose ${process.env.MONGO_URL}`);
    }
}
export default connectDB;