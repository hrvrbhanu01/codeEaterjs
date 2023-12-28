const http=require('http')
const express = require('express')
const bodyParser=require("body-parser")

const app=express() 
app.use(bodyParser.urlencoded({extended: false}))


app.get("/", (req,res,next) => {
    console.log("Middleware-1");
    console.log(req.url);
    res.send("<h1>Hello it is me Express</h1>")
})
app.get("/abc", (req,res,next) => {
    console.log("Middleware-2");
    res.send('<form action="/course" method="POST"><input type="text" name="title"><button type="submit">Add Course</button></form>'
    );
})

app.post("/course", (req,res,next) => {
    console.log(req.body);
    res.redirect("/")
})

app.listen(3000)