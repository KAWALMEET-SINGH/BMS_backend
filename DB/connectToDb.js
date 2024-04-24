import mongoose from "mongoose";

export const connectToDb = () => {
    mongoose.connect(process.env.DBURI).then(() => {
        console.log('Connected To DB ');
    }).catch((e) => {
        console.log(e);
    });
}
