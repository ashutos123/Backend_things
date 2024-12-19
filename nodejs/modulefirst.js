// const simple = require("./modulesecond")

// simple()

//import {simple} from "./modulesecond.mjs"
                                                //this is called ESx module of export in nodejs.
//simple()             //for this we need to rename modulesecond.js as modulesecond.mjs.

//import {simple2 as simple} from "./modulesecond.mjs"
                                                //this is called ESx module of export in nodejs.
//simple()             //for this we need to rename modulesecond.js as modulesecond.mjs.


import * as a3 from "./modulesecond.mjs" 

console.log(a3.simple())

