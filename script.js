// let score = prompt("enter the value : ");

// if (score<=30){
//     console.log("mere bete fail hai tuuu");
// }else if (score<=50){
//     console.log("c grade mila hai beta ");
// }else if (score <=75){
//     console.log("B grade hai beta");
// }else{
//     console.log("A grade hai beta ");
// }


// trying another method 


// function getScore(score){
//     if(score<=30){
//         return "fail"
//     }else if (score <=50) {
//         return "D"
//     }else if (score <=75){
//         return "B"
//     }else(score <=100)
//         return "A"
    
// }

// console.log(getScore(22));

// let a = prompt("bhai ab to dal de na :")
// function getScore(score){
//     if(score>=90 && score<=100) return "A";
//     if(score>=75 && score<=89) return "B";
//     if(score>=50 && score<=74) return "C";
//     if(score>=30 && score<=49) return "D";
//     if(score>=0 && score<=29) return "fail";
//     else return "invalid score";
// }

// console.log(getScore(a));


/// me : chalo bhai log aaj game bante hai ;
// dost : konsa game bhai ..  ;
// me : are vahii apna purane wala ;
// dost : per konsa oo to bata ;
// me : apna saste wala ' "rock", "paper","scissor" ';


// function rps(user,computer){
//     if (user === computer) return "draw";
//     if (user === "rock" && computer === "scissor") return "win :  user*";
//     if (user === "scissor" && computer === "paper") return "win : user*";
//     if (user === "paper" && computer === "rock") return "win : user*";

//     return "win : computer"
// }


// console.log(rps("paper","scissor"));


// lets practice on switch statment and cases 
// lets move on code


// const rollNo25 = {
//     name : "gaurav kale",
//     age : 19,
//     rollno :25,
//     proffesion : "student",
//     class : "se-comp"
// }


// const rollNo27 ={
//     name : "prashant girge",
//     age : 19,
//     rollNo : 27,
//     proffesion : "student",
//     class : "se-comp"
// }

// const rollNo26 ={
//     name : "rohan avhad",
//     age : 19,
//     rollNo : 26,
//     proffesion : "student",
//     class : "se-comp"
// }


// let std ={
//     1 : rollNo25,
//     2 : rollNo26,
//     3 : rollNo27
// }

// switch(std[1]){
//     case std[1]:
//     console.log(rollNo25);
//     break;
//     case std[2]:
//     console.log(rollNo26);
//     break;
//     case std[3]:
//     console.log(rollNo27);
//     break;
//     default:
//         console.log("absent");
// }


// loops 
// for (initalization ; condision ; increment){

// }


// for (let i = 1; i <100; i++){

//     console.log("prashant bhai kitni bar",i);
// }

// while loop 

// initialazation 
// while(condision){
//     // hello
//     increament/decrement
// }

// let i =1;
// while(i<33){

//     console.log(i);
//     i++;
// }


// now we learn do while loop

// let x =50;
// do{
//     console.log(x);
//     x++;
// }
// while(x<=100)


// Q1 print numbers from 1 to 10 by using a for loop 

// for(let i=1; i<11; i++){
//     console.log(i);
// }

// Q2 print number from 10 to 1 using while loop

// let i = 10;

// while(i>0){
//     console.log(i);
//     i--;
// }

// Q3 print even number from 1 to 20 using for 

// for(let i=1; i<21; i++){
//     if (i%2==0){
//         console.log(i);
//     }
// }

// Q4 print odd numbers from 1 to 15 to using while loop

// let i =1;

// while(i <16){
//     if (i%2 !=0){
//         console.log(i);
//     }
//     i++;
// }


// Q5 print multiplication table of 5 

// for (let i=1; i<11; i++){
//     console.log("5 X ",i,"=",i*5);
// }


// Q6 find the sum of number from 1 to 100 using loop

// let sum =0;

// for (let i=1; i<101; i++){
//     sum = sum + i;
//     console.log(sum);
        
// }
// // console.log(sum);


// Q7 print all numbers between are 1 to 50 are divisible by 3

// for(let i=1; i<51; i++){
//     if(i%3==0){
//         console.log(i);
//     }
// }


// Q8 ask the user for a number and print wheather a each number from 1 to that number is even or odd

// let num = prompt("check the number is even or odd : enter number :> ")

// for(let i=1; i<=num; i++){
//     if(i%2==0){
//         console.log(`${i} is even`);
//     }else{
//         console.log(`${i} is odd`)
//     }
// }

// Q9 count how many numbers from 1 to 100 are divisible by 3 and 5 both 

// for(let i=1; i<101; i++){
//     if(i%3==0 && i%5==0){
//         console.log(i);
         
//     }
// }


// for(let i=1; i<21; i++){
//     if(i%3==0) continue;
//     console.log(i);
// }

// let count =0;

// for(let i=1; i<100; i++){
//     if(i%2!=0){
//         count++;
//         console.log(i);
//         if(count == 5) break;
//     }
// }

// this is the best way to solve problem 

// let num = 123456;
// let count =0;

// while(num>0){
//     num = Math.floor(num /10);
//     count++;
// }

// console.log(count);


// let num = 123;
// let original = num;
// let reversed =0;

// while(num>0){
//     let lastdigit = num % 10;
//     reversed = reversed *10 + lastdigit;
//     num = Math.floor(num / 10);
// }

// if(original === reversed){
//     console.log("is palindrome");
// }else{
//     console.log("is not palindrome");
// }