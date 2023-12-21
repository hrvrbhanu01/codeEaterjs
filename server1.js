const http = require('http') //importing module

const server=http.createServer((req,res) => {
    console.log("Hello World")
})

server.listen(6000)