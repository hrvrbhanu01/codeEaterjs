const express=require("express")
const router=express.Router()


router.get("/add-course", (req,res,next) => {
    console.log("Middleware-2");
    res.send('<form action="/admin/add-course" method="POST"><input type="text" name="title"><button type="submit">Add Course</button></form>'
    );
})

router.post("/add-course", (req,res,next) => {
    console.log(req.body);
    res.redirect("/")
})
module.exports=router;