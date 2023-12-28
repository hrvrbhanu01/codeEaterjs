const http=require('http')
const express = require('express')
const bodyParser=require("body-parser")

const app=express() //request handler
const adminRoutes=require("./routes/admin")
const courseRoutes=require("./routes/course")
app.use(bodyParser.urlencoded({extended: false}))


app.use('/admin', adminRoutes)
app.use(courseRoutes)  //if these two middlewares are unable to resolve the request then it will come to this below app.use :-
app.use((req,res,next) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})
app.listen(3000)