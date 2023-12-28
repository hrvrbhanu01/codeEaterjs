const http=require('http')
const express = require('express')
const bodyParser=require("body-parser")

const app=express() //request handler
const adminRoutes=require("./routes/admin")
const courseRoutes=require("./routes/course")
app.use(bodyParser.urlencoded({extended: false}))


app.use(adminRoutes)
app.use(courseRoutes)
app.listen(3000)