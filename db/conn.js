const mongoose = require("mongoose");
const DB = process.env.DATABASE;
// dotenv.config();

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        // make the process fail
        process.exit(1);
    }


//     mongoose.connect(DB,{
//          mongoose.set('strictQuery', false);
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }).then(()=> console.log("DataBase Connected")).catch((err)=>{
//     console.log(err);
// })
