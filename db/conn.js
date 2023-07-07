const mongoose = require("mongoose");

const DB = process.env.DATABASE

 const connection= mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})
module.exports={
    connection
}