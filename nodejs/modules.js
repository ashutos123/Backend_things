ashu={
    name:"ashutosh",
    favcolor:"red",
    developer:true,
    favno: 34

}

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}
//pehla tarika export karne ka
// module.exports={     //sare functions ek object ke form wrap up hokar  export ho jaega.
//     myobj:ashu,      //aur bhi bohot sare functions add kiye ja saktde hain.
//     addfn:add,
//     subfn:sub};

//dusra tarika export karne ka.
module.exports={     //sare functions ek object ke form wrap up hokar  export ho jaega.
        ashu,      //aur bhi bohot sare functions add kiye ja saktde hain.
        add,
        sub};//ye is tarah se simple way me bhi export kiye ja sakte hain.


//exports.add1=(a,b)=> a+b;//it directly exports these anonymous functions.
//exports.sub2=(a,b) => a-b; 







