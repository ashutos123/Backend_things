const http =require ('http');
const port =process.env.port ||3000;
const server =http.createServer((req,res) =>{
    console.log(req.url)
    res.statusCode =200;
    res.setHeader('Content-type','text/html')
    res.end('<h1> this is code with harry<h1> <p> hey this os the way to rock.</p>');
     
})

server.listen(port ,() =>{
    console.log('server is listening on port  $ ',port);
});

