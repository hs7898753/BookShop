const Book=require("../models/book");

exports.createBook= async (req,res)=>{
    try{
    const book=new Book(req.body); 
    const doc= await book.save();
    console.log(doc);
    res.status(201).json(doc);
    }
    catch(e){
        res.status(400).json(e);
    }   
}

