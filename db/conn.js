const mongoose = require("mongoose");
const DB = process.env.DATABASE;
// dotenv.config();

// mongoose.connect(DB, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// })
//   .then(() => {
//     console.log("Database Connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });


    mongoose.connect(DB,{
         mongoose.set('strictQuery', false);
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})
