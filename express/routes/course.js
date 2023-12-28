const express=require("express")
const path=require('path')
const router=express.Router()


router.get("/", (req,res,next) => {
    console.log("Middleware-1");
    console.log(req.url);
    res.sendFile(path.join(__dirname, '../', "files","course.html"))  //giving path to the course.html file
})
module.exports=router;