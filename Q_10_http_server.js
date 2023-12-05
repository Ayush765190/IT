const http =require("http");

const myServer= http.createServer((req,res)=>{
  console.log("new request is received");
  res.write("Hello World, This is my Node.js Server");
  res.end();
});
myServer.listen(10000,()=>{
  console.log("my server is working 😊😊😊");
});