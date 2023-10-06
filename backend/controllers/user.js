const User=require("../models/user");

exports.createUser= async (req,res)=>{
    
    try{
    const user=new User(req.body); 
    const doc= await user.save();
    console.log(doc);
    res.status(201).json(doc);
    }
    catch(e){
        res.status(400).json(e);
    }   
}

// exports.loginUser= async(req,res)=>{
            
//     try{
//         const check= await User.findOne({name:req.body.name})
//         if(check.password===req.body.password){
//             res.send("user login");
//         }
//         else{
//             res.send("wrong password")
//         }
//     }catch{
//         res.send("wrong details")
//     }
// }
