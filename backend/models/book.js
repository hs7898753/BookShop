const mongoose=require("mongoose");

const bookSchema= new mongoose.Schema({
   
   book_name:{
       type:String,
       require:true
   },
   author:{
    type:String,
    require:true
},
   genre:{
    type:String,
    require:true,
   },
   price:{
    type:Number,
    require:true,
   },
   description:{
    type:String,
    require:true,
   },
   cover_pic:{
    type:String
   }

})


const Book=new mongoose.model("Book",bookSchema);
module.exports=Book;