var http=require("http");
var fs=require("fs");
http.createServer(function(req,res) {
fs.readFile('indexpage.html',function(err,data) {
res.writeHead(200,{'Content-Type':'text/html'});
res.write(data);
return res.end();
})
}).listen(8090);
http.createServer(function(req,res)
{
fs.readFile('style.css',function(err,data){
res.writeHead(200,{'Content-Type':'text/css'});
res.write(data);
return res.end();
})
}).listen(8081);
console.log('The Nodejs server static serves in th port called 8090(html) and 8081(css file)');