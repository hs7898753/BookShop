const express=require("express");
const { createBook } = require("../controllers/book");

const router=express.Router();

router.post("/addbook",createBook)

exports.router=router;