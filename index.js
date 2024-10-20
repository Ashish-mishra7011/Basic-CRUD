const express = require('express') //import
const app=express()     //creating an instance
require("dotenv").config(); //load config from env
const PORT =process.env.PORT || 4000;

//middleware to parse json request body
//whenever we send a data to database we need middleware

app.use(express.json()) //middleware provided bt express


//import routes todo API
const todoRoutes=require('./routes/todos')

//mount the todo api
app.use("/api/v1",todoRoutes); // iss line se "/api/v1" ke baad se url banega

app.listen(PORT,()=>{
    console.log("server started successfully");
})

//connect DB
const dbconnect=require("./config/database")
dbconnect(); //runs the db connection function

app.get('/',(req,res)=>{
    res.send('<h1>This is  Home Page </h1>')
})