"use strict";
// import module
let http = require("http");
// create server
let server = http.createServer(function(req,res){
    console.log("Server is Created Enter");
    console.log("Request....");
    if(req.url==="/"){
        if(req.method==="GET"){
        console.log("Default path...");
        res.writeHead(200,{'Content-type':'text/plain'});
        res.end("Welcome to Node GET");
    }
    if(req.url ==='/register') { 
        if(req.method==="GET"){
        res.write(' Welcome to register us page')
        res.writeHead(200,{'Content-type':'text/plain'});  
        res.end();  
    } 
    if(req.method==="POST")
    {
        console.log("default path--POST--");
        res.writeHead(200,{'Content-type':'text/plain'});
        res.end("Welcome to Node POST");
    }
}
}).listen(8000);