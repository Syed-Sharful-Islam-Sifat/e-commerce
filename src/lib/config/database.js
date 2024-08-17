import mongoose from "mongoose";
export default async function dbConnect(){
   try{
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected ${connection}`);
   }catch(error){
     console.log(`error connecting database ${error}`);
   }
}