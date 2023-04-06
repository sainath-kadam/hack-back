const mongoose = require("mongoose");
const DB = process.env.DATABASE;
require("dotenv").config();

    mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})
