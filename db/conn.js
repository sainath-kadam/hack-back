const mongoose = require("mongoose");

const DB = process.env.DATABASE

export const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err);
    }

//     mongoose.connect(DB,{
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }).then(()=> console.log("DataBase Connected")).catch((errr)=>{
//     console.log(errr);
// })
