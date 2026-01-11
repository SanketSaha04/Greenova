import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
      // console.log("Connected DB:", mongoose.connection.name)

      mongoose.connection.on('connected',()=> console.log("Database Connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/greencart`)
    } catch (error){
        console.error(error.message);
    }
}

export default connectDB;