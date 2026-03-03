// Q1 calculate the bmi

// function bmi(weight,height){

//     return weight / (height*height);

// }

// console.log(Math.floor(bmi(57,1.3)));



// function discountCalculator(discount){

//     return function discounter(price){
//        return price - price*(discount / 100);
//     }
// }

// let ten = discountCalculator(10);
// let twonty = discountCalculator(20);

// console.log(ten(1000));
// console.log(twonty(1000));

// Q2 closure function 

// function parent(){
//     let count =0;

//     return function(){
//         count++;
//         return count;
//     }
// }

// let x = parent();
// console.log(x());