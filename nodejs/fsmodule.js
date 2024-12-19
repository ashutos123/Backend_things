//import * as fs from 'node:fs/promises';//fs module ko aise bhi import kiya ja sakta hai.
const fs = require('fs');

fs.readFile('file.txt','utf8',(err,data)=>{//ye async hai aur kuchh retuern nhi arta.
    if(err){                       //incase koi error ata hai.
        console.log("error",err); //utf-8 ka matlab hai encoding.agar binary hai ,ya video hai to use encode karo.
    }                          //non blocking io module of nodejs
    else{
       // console.log(data);
    }

}) 
const a=fs.readFileSync("./file.txt","utf-8");//reading file synchronously.sync return kartahai ,par async kuchh retur nhi, karta.
//console.log(a);          //blocking io module.



//similar is for write file

//fs.writeFile('file2.txt',"this is datas",()=>{ });   //it is asynchronous.doesnt return anythiong.
    //console.log("written to the file")           //this ios non blocking io module of nodejs
//similar can be blocking module for this also.
b=fs.writeFileSync('file2.txt',"this is data1")//this is synchronous.returns something.it is overwritten by the above statement if run together.
console.log(b)          //this is blocking io module of nodejs


//// appending in the same file.
//fs.appendFileSync("./file.txt",new Date().getDate().toLocaleString())/// ye current date dega.aur jitni bar run hoga utni bar appeng=d hoga.tolocalestring() is used bcuz, arguements are always given in strings.
//fs .appendFileSync("./file.txt",`hey there\n`);//
//fs.appendFileSync("./file.txt",`${Date.now()} hey there\n`);//gives time stamp in ms.it helps in keeping record of users ,when do they  entert the website.

fs.cpSync("file.txt","./copy.txt");//copies the content of file.txt into copy.txt by creating copy.txt.
//fs.unlinkSync("./copy.txt");//deleting the created filr copy.txt.
//console.log(fs.statSync("./file.txt"));//gives all info of the file.like time of creation,modification,uid,gid etc.


console.log("1");
//non.. blocking....
fs.readFile("file2.txt","utf-8",(err,result)=>{
    console.log(result);
});
console.log("2")
//pehle 1 print hoga ,fir 2 hoga fir result hoga.kyunki result async way me aa raha hai. ye kisi thread ko block nhi kar raha.isisliye iske baad ke sare code executer ho ja rahe.
//agar ye Sync hota to threads ko block kar leta jisse ki age niche walw=e statements execute nhi ho pate.







///////  end/////////













