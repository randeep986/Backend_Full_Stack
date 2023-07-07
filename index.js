require("dotenv").config();
const express = require("express");
const app = express();
const {connection}=require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const port = 8009;

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);


app.listen(port, async ()=>{
    try{
        await connection;
        console.log("Connected to DB succesfull")
    }
    catch(err){
        console.log("error connecting to db")
        console.log(err)
    }
    console.log(`server start at port no : ${port}`);
})