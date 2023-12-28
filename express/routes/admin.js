const express=require("express")
const router=express.Router()


router.get("/abc", (req,res,next) => {
    console.log("Middleware-2");
    res.send('<form action="/course" method="POST"><input type="text" name="title"><button type="submit">Add Course</button></form>'
    );
})

router.post("/course", (req,res,next) => {
    console.log(req.body);
    res.redirect("/")
})
module.exports=router;