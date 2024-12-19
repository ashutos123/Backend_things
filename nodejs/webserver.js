const {console} = require('console');
const fs = require('fs');
const http= require('http');

const port =process.env.PORT || 3000;

const server =http.createServer((req,res)=>{
res.setHeader('Content-type','text/html')
console.log(req.url)

if(req.url=='/home'){
    res.statusCode==200;
    res.end('<h1>this is code with harry </h1> <p> hey this is how one reaches the world!</p>');

}
else if(req.url=='/'){
    res.statusCode==200;
    res.end('<h1> about code with harry </h1> <p> hey this is about code with harry </p>');
 
}
else if(req.url=='/hello'){
    res.statusCode==200;
    const data=fs.readFileSync('index.html');
    res.end(data.toString());

}
else{
res.statusCode==404;
res.end('<h1>NOT found</h1> <p> hey this  page waw s not found on this server</p>');
}
})

server.listen(port,()=>{
    console.log('server os listening in port ${port}');

});

