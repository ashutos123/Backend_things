//this is index.js file. it is good practice to name a file as this. this is entry  point for any developer.
//package.json me bhi "main" key me likha hai "index.js" bydefault.
//koi function na samajh aaye to uspe hover karke oose mdn se samajh lo.
const http=require("http");//http module ko lata hai, jo web server me madad karega.
const fs=require("fs");//fs module ko lata hai.
const url=require("url");//it parses the url in separate segments.
const express = require("express");
const app=express();//app bhi myhandler function jaise hi ek handler hai.

app.get('/',(req,res)=>{
return res.send("Hello from Home Page")
}); 
app.get("/about",(req,res)=>{
    return res.send("Hello from About Page "+"hey "+ req.query.name+" you are "+req.query.age);

});

//app.post('/');//post request aise banaya ja sakta hai.
app.get("/profile",(req,res)=>{
    return res.send("profile page");

})

app.listen(8000,()=>console.log("server started"));
 





function myhandler(req,res){
//+++++++++++++++  
    //console.log("new req received.");//rquest recieve ho gayi jhai ye print karwa do.
    //res.end("hello from Server");//response ko end karo " hello from server" keh ke.
    //res.end me hum kuchh bhi send kar sakte hain.,image bhi.pura kapura html code bhi send kar sakte haimn, jisko server side renderiong kehte hain.
    //console.log(req.headers);// header object me user ki info hoti hai.
    //console.log(req)//req ek bada object hota hia jisme user ki sari info hoti.sari samajh me nhi aati abhi.
//++++++++++++++++
if(req.url==="/favicon.ico") return res.end();
const log =`${Date.now()}: ${req.method} ${req.url}  new req recieved\n`;
const myurl=url.parse(req.url,true);
//console.log(myurl);
fs.appendFile("log.txt",log,(err,data)=>{//kyunki ye ek Async(non blocking) function hai ,isliye ise callback function se handle karna hoga.
 
switch(myurl.pathname){//switch case se aur bhi routes bnaye ja sakte hain.isko kehte hain multirouting.
    case '/':
    if(req.method==="GET") res.end("HomePage");

    break;
    case '/about':
     const username=myurl.query.myname   
    res.end(`hi ,${username}`);
    break;
    case "/signup":
    if(req.method==="GET") res.end("this is a signup form.")
    else if (req.method==="POST"){
      ///db query karennge  ,yani form me jo data hai usko db query se db me save karo
    res.end("success");

    }
    default:res.end("404 not found");

}
/*res.end("hello from server aagain.");*/});

}
const myserver=http.createServer(app)
//const myserver=http.createServer(myhandler);           //ye ek server bana dega.//ab is server ko handle karene ke kuchh handlers banane honge. jo requests ko handle karege.(kis request ke liye kya hona chahiye.)
// switch case ki madad se  kai sare routes bana sakte hain.aur un sare routes me  if esle if ka use kar ke aise kai sare request methods banaye ja sakte hain(get ,post ,put etc.)
//kyunki jab hum bade projects par kam karenge ,to kai sare route banana aur unke andar kai sare request methods n=banana clumsy ho jaega.
//isi problem ko solve karta hai express.js.hum uska use karenge ,taki asani se routes aur request methids banaye ja sake.

//myserver.listen(8000,()=>console.log("server started"));

//npm start karne se server start ho jaega.browser me localhost:8000 likh ke search karne chalega.
//jaise hi browser me localhost:8000 likhte hain, vaise hi browser oos request ko "my server" par bhejta hai,aur fir usme jo functionalities hain ,vo run ho jati hain.
//url ko lena aur oose parse karna fir user ko required data return karna ,ye mote taur pe ek server ka kam hota hai.
//yaha humne wahi sab dekha hai.ek basic server aise hi switsh cases ka use karke queries ko handle kargta hai aur databasse se data fetch karkr user ko ya frontend ko return karta hai.

 





