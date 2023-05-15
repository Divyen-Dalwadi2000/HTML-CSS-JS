//===============
// Section 5            Functions in java Script
//===============

// A JavaScript function is a block of code designed to perform a particular task.

// 1️⃣ Function Definition 

// Before we use a function, we need to define it. 

// A function definition (also called a function declaration, or function statement) 
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.

//=============
// Defination
//=============
function sum() {
    var a = 10; b = 5;
    var ans = a + b;
    console.log(ans);
}

// 2️⃣ Calling functions
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).

//===============
// Function CALL
//===============
sum();                  // 15



// 3️⃣ Function Parameter vs Function Arguments 
// Function parameters are the names listed in the function's definition. 
// Function arguments are the real values passed to the function.

function mul(a, b)             // Here in the (a,b) is Known as parameter
{
    let sum = a * b;
    console.log(sum);
}

// Here in the (2,5) is Known as arguments 
mul(2, 5);                   // 10

// 4️⃣ Function expressions
// "Function expressions simply means 
// create a function and put it into the variable "

function div(a, b) {
    let ans = a / b;
    console.log(ans);
}

var division = div(10, 2);          // 5


// 5️⃣ Return Keyword
// When JavaScript reaches a return statement, 
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"

function sub(a, b) {
    return sub = a - b;
}

var substraction = sub(10, 2);          // 8

// console.log("The subtraction is : " + substraction);
console.log(`The subtraction is : ${substraction}`);        // using templet literal 


// 6️⃣ Anonymous Function

// A function expression is similar to and has the same syntax 
// as a function declaration One can define "named" 
// function expressions (where the name of the expression might 
// be used in the call stack for example) 
// or "anonymous" function expressions.

var ano_func = function (a, b) {
    return a + b;
}

console.log(`${ano_func(10, 20)}`);         // 30