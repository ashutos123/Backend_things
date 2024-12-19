//pehla tarika import karne ka
//const lovish = require("./second");//second.js nam ke module me jo bhi functionalities likhi hain,unko import  kar lega.sari functionalities ek object me wrap ho kar lovish me store ho jaengi.

//console.log("hello worls",lovish)//
// console.log("sum is",lovish.addfn(2,3))
// console.log("difference is",lovish.subfn(3,1))
// console.log("math val is",lovish.myobj)

//dusra tarika
const {ashu,add,sub}=require("./modules");//this is destructuring
console.log("object  is",ashu)
console.log("val  is",add(3,1))
console.log("difference  is",sub(3,9))

