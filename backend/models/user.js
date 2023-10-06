const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
   
   first_name:{
       type:String,
       require:true
   },
   last_name:{
    type:String,
    require:true
},
   email:{
    type:String,
    require:true,
    unique:true
   },
   password:{
    type:String,
    require:true,
    unique:true
   },
   confirm_password:{
    type:String,
    require:true,
    unique:true
   }

})


const User=new mongoose.model("User",userSchema);
module.exports=User;