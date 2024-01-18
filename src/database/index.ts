import { connect } from "mongoose";
import {MONGO_URI} from "../config";


export const connectDB = async () => {
   try {
      await connect(MONGO_URI as string);
      console.log("Conectado a MongoDB");
   } catch (error) {
      console.error("Error connecting to MongoDB:", error);
   }
}

connectDB();
