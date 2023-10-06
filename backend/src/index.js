const express=require("express");
const app=express();

const userRouter=require("../routes/user");
const bookRouter=require("../routes/book");
require("../db/connection");

const port=5000;
app.use(express.json());

app.use("/user",userRouter.router);
app.use("/book",bookRouter.router);

app.get("/",(req,res)=>{
    res.send("hello");
})



app.listen(port,()=>{
    console.log("server running");
})