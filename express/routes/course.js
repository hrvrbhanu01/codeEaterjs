const express=require("express")
const router=express.Router()


router.get("/", (req,res,next) => {
    console.log("Middleware-1");
    console.log(req.url);
    res.send("<h1>Hello it is me Express</h1>")
})
module.exports=router;