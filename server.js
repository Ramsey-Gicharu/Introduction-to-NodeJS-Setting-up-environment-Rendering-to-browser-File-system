const http = require('http');
const  fs = require('fs');
const url = require('url');


//Create a server with Http variable
http.createServer(function (req, res){
var q = url.parse(req.url, true);
var filename = '.'+q.pathname;





fs.readFile(filename, function(err,data){

    
    if(err){
        res.writeHead(400, {'Content-Type': 'text/html'});
        return res.end("Page not found!");
    }
   
    res.writeHead(200,{'Content-Type': 'text/html'})
   
    res.write(data);
    return res.end();
});

}).listen(5000,'localhost');

console.log("You have created a server!");