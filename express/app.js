const http=require('http')
const express = require('express')

const app=express() 

app.use((req,res,next) => {
    console.log("Middleware-1");
    next()     //passing to the next middleware 
})

app.use((req,res,next) => {
    console.log("Middleware-2");
    res.send('<h1>Hello it is me express</h1>')  //sending response from the server
})

app.listen(3000)