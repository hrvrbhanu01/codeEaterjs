const http = require("http")
const serverContent=require("./serverContent")

// console.log(serverContent.data);
const server =http.createServer(serverContent)


server.listen(3000)