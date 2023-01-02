const dotenv=require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const bodyparser=require("body-parser")
const cors=require("cors")

 const app=express()

 mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => app.listen(process.env.PORT, () => 
        console.log(`Listening at ${process.env.PORT}`)
    )).catch((error)=>

    console.log(error) )