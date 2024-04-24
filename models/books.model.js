import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
   name:{
        type:String,
        required:true,
    },
    author :{
        type:String,
        required:true,
       
    },year:{
        type:Number,
        reqired:true,
    },
    userRef: {
        type: String,
        required: true,
      },

} , {timestamps: true});

const Book = mongoose.model("Book",bookSchema);

export default Book;