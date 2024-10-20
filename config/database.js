const mongoose=require('mongoose');
require("dotenv").config(); //it loads all environment variable in process

const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{console.log("DB connected successfully");})
    .catch((error)=>{
        console.log("Issue in DB connection");
        console.log(error.message);
        process.exit(1); //statement is used in Node.js to terminate a program immediately and 1 (or any non-zero number): Indicates an error or failure.
    })
}

module.exports =dbconnect;