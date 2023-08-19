"use strict";
/*
var userName:string= "Asim" ;
var age:number= 31 ;
var nationality:string= "Pakistan"
var result:boolean= age >= 25 && nationality == "Pakistan"
console.log(`Result: ${result}`);
*/
/*
var userName:string= "Asim"
var message:string= `"Hello, would you like to learn some Python today."`
console.log(userName , message);
 */
/*
var personName:string= "Asim Gohar Butt" ;
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
*/
/*
// Famous Quote:
var quote:string= `Quaid-e-Azam Muhammad Ali Jinnah once said, "Do work day and night until you succeed."`;
console.log(quote);
*/
/*
// Famous Quote2: Repeat exercise 4
var famous_person:string=" Quaid-e-Azam Muhammad Ali Jinnah" ;
var quote:string=`once said,"There is no poer that can undo Pakistan."`
console.log(famous_person , quote);
*/
/*
// using White Space character \t\n.
var personNameWithWhiteSpace: string = "\t\n Asim Gohar Butt \t\n";
console.log("Name With Whitespace:");
console.log(personNameWithWhiteSpace);
// Strip whitespace from the name
var strippedName:string= personNameWithWhiteSpace.trim();
console.log("Stripped Name:");
console.log(strippedName);
*/
/*
// It done by template literate.
var favoriteNumber:number = 8 ;
var message:string = `My favorite number is: ${favoriteNumber}`
console.log(message);
*/
/*
 var names:string[]=["Adnan" , "Ahmad" , "Taha" , "Sulman"] ;
 for(
    var i=0; i < names.length; i++ ) {
        console.log(names[i]);
        
    }
*/
/*
if(true){
console.log("line1");
console.log("line2");
console.log("line3");
console.log("line4");
console.log("line5");
}
if(false){
console.log("line6");
console.log("line7");
console.log("line8");
console.log("line9");
console.log("line10");
}
*/
/*
// variables Name like starting from $ , _.
var _asim786:number=234
// OR
var $12Shah:string="akif"
console.log(_asim786 , `with String ${$12Shah}` );
*/
/*
// Arthimetical Operators :
var num1 : number = 15 ;
var num2 : number = 2 ;
console.log(num1 + 13 - 6 / num2 * 5)
console.log(2**8)
console.log(2^8);
console.log(16%8);
console.log(39%8)
*/
//var userName:number=123
//console.log(typeof userName);
/*
var userName : string = "adnan";
var age : number = 22 ;
var nationality : string = "America"
var result : boolean = age >= 15 && nationality == 'America'
console.log(`result: ${result}`)
*/
/*          <=//problem : 01 =>
//- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
let myCart :any[] =["Rice: 2kg","Chicken: 1kg","yogurt: 1kg","Cold-Drinks: 2bottles"] ;
console.log("Original Cart:",myCart);
  //To add item
myCart.splice(2,0,"Biryani-Masala: 1box")
console.log("Added Cart:",myCart);

  //To delete item
myCart.splice(3,1);
console.log("One item deleted:",myCart);

  //To update Quantity
 let updateCartQuantity :any[] = ["Rice: 5kg","Chicken: 3kg"]
myCart.splice(0,2,"Rice: 5kg","Chicken: 3kg")
console.log("Updated Cart:",myCart);
*/ /*          //problem 05
//- Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

function calculateFactorial(integer : number):number{
if(integer < 0){
  console.log("Integer is negative");
  return -1
}
    let currentNum : number = 1;
    let factorialNum :number = 1;
while(currentNum <= integer){
    factorialNum *= currentNum ;

currentNum++
}
  return factorialNum;
}
let integer : number = 4 ;
let factorialValue : number = calculateFactorial(integer) ;
console.log(factorialValue);
//console.log("Hello");
*/
// //- Write a program that uses a while loop to print the first 10 even numbers.
// let firstNum : number = 1 ;
// let forEvenAdd : number = 1;
// while(firstNum < 20){
//   let resultOfEven : number = firstNum + forEvenAdd ;
//   console.log(resultOfEven);
//    firstNum += 2
// }
/*
//- Write a program that uses a while loop to print the first 25 integers.
let integer : number = 1 ;
let forEven : number = 1
while(integer <= 25){
  
  console.log(integer);

  integer ++ ;
}
*/
//- Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let arrayOfNum = [12, 13, 14, 15, -16, -17];
while (arrayOfNum > [0]) {
    console.log(arrayOfNum);
}
