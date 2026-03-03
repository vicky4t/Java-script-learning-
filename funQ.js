// Q1 what is difference between function decleration and expression in terms of hoisting


// abcd();

// function abcd(){           // it function declearation
//     console.log("heeeeee"); 
// }

// let abcd =function (){    /// it is function expression 
//     console.log("hehhehehehh");
// }


//Q2 convert the fat arrow function

// let hoi=(a,b)=>{
//     return a * b;
// }

// let sum =hoi(2,4);
// console.log(sum);


// Q3 parameter and arguments

// function add(a=0,b=0){    /// a , b are have defualt values we called us parameter
//     return a+b;
// }

// add(3,5); ///3,5 are arguments we are passing to add function


//Q4 gusse the name

// function gusse(name = "prashant"){
//     console.log("heyy",name);
// }

// gusse();


// Q5 use rest parameter to accept any number of scores and return total

// function getAdd(...val){
//     let total = 0;
//     val.forEach((val) => {
//         total+=val;
//     });
//     return total;
// }


// console.log(getAdd(20,30,50,40));


// Q6 use  arly return

// function checkAge(age){
//     if (age<18) return "minor";
//     return "major"
// }

// console.log(checkAge(2));


// Q7 what is higher order function (HOF)?

/// a function which is return another function or accept in parameter another function that called is HOF

// function vvip(){
//     return function vip(){
//         console.log("heeee");
//     }
// }

// vvip()();

// or

// function huu(func2){
//     func2();
// }

// huu(function func2(){
//     console.log("hooooo");
// })

// create IIFE 

// (function(){
//     console.log("hey hey lal lal");
// })();


