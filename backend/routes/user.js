const express=require("express");
const { createUser, loginUser } = require("../controllers/user");

const router=express.Router();

// /auth is added in the base path
router.post("/signup",createUser)

exports.router=router;