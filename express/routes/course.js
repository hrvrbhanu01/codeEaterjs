const express=require("express")
const router=express.Router()


router.get("/", (req,res,next) => {
    console.log("Middleware-1");
    console.log(req.url);
    res.sendFile()
})
module.exports=router;