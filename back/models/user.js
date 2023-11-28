import mongoose from "mongoose";

const Schema = mongoose.Schema;
let User = new Schema(
    {
        image:String
    }
);

export default mongoose.model("imageDetails", User);