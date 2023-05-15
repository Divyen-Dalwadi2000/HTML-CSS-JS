// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// Difference between null vs undefined?
var useless = null;
console.log(useless);                    // null
console.log(typeof (useless));            // object         =>> BUG

// standby means the variable value cannot define now 
var standBy;
console.log(standBy);                    // undefined   
console.log(typeof (standBy));            // undefined 

//======================================================================
// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// What is NaN ?
console.log("Divyen" - "Dalwadi");       // NaN          (Not a Number)   
// =>> NaN is a property of global Object
// =>> In Other Word , It is a variable  of Global Scope
// =>> The initial value of a NaN is Not-A-Numbner

var myPhonenumber = 9876543210;
var myName = "Divyen Dalwadi";

console.log(myPhonenumber);               // 9876543210 
console.log(isNaN(myPhonenumber));        // false
console.log(myName);                      // Divyen Dalwadi
console.log(isNaN(myName));               // true 

if (isNaN(myName)) {
   console.log("Please Enter valid number");
}


//======================================================================
// 🙋‍👨‍🏫 Interview Question 4 🙋‍👨‍🏫
// What is the Difference between == vs === ?

// ==  it's only check values
// === it's check values as well as data type
var n1 = 5;
var n2 = "5";

console.log("The data Type of n1 is "+ typeof(n1));         // number
console.log("The data Type of n2 is "+ typeof(n2));         // string
console.log(n1 == n2 ) ;         // true  
console.log(n1 === n2 ) ;        // false

//======================================================================

// 🙋‍👨‍🏫 Interview Question 5 🙋‍👨‍🏫 

// Why Functions? 

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, 
// to produce different results.

// OR

// A function is a group of reusable code which can be called anywhere 
// in your program. This eliminates the need of writing the same code 
// again and again.

// **DRY => do not repeat yourself

//======================================================================


