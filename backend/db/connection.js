const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/booklist_db").then(()=>{
    console.log("database connected");
}).catch((e)=>{
    console.log("no connection");
});