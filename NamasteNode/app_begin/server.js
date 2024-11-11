const http = require('node:http');

// Now I understand the meaning of instane created in odoo because basically we just declare the 
//  Variable

const server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    if(req.url === "/harshiv"){
        res.end("Harshiv Joshi");
    } 
    res.end("Hello World"); 
}); 

server.listen(7777);
