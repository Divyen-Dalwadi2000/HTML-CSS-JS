// Expressions and Operators

console.log(5 + 20);

// assignment Operator 

var x = 5;
var y = 5;

console.log("The both X and Y are equal or not : " + x === y);              // false   =>> here it's wrong ans 

console.log(x === y);                                                      // true
console.log(`The both X and Y are equal or not : ${x === y}`);              // true    =>> it is right way to compare two variable



// arithmetic operator
console.log(20 + 5);              // 25
console.log(20 - 5);              // 15
console.log(20 / 5);              // 4     quotient
console.log(20 * 5);              // 100 
console.log(20 % 5);              // 0     remainder



// Increment and Decrement opeator 

// If used postfix , with opeator after  operand (ex.. a++)
// The increment operator increments and returns the value "before" incrementing.
console.log("====Postfix Increment====")
var a = 5;
var newNum = a++;               // newNum = 5
console.log(a);                 // 6 
console.log(newNum);            // 5

console.log("====Postfix Decrement====")
var c = 5;
var newNum3 = c--;               // newNum = 5
console.log(c);                  // 4
console.log(newNum3);            // 5



// If used prefix , with opeator after  operand (ex.. ++a)
// The increment operator increments and returns the value "after" incrementing.
console.log("====Prefix Increment====")
var b = 5;
var newNum2 = ++b;              // newNum = 5 + 1
console.log(b);                 // 6
console.log(newNum2);           // 6

console.log("====Prefix Decrement====")
var d = 5;
var newNum4 = --d;               // newNum = 5 - 1
console.log(d);                  // 4 
console.log(newNum4);            // 4

// comparision Operator

var X = 10;
var Y = 20;
console.log(X == Y);          // false
console.log(X != Y);          // true
console.log(X > Y);           // false
console.log(X >= Y);          // false
console.log(X < Y);           // true
console.log(X <= Y);          // true


// Logical Operator

var A = 10;
var B = -40;

// 1) logical AND (&&)
console.log(A != B && A > B);      // true
console.log(A != B && A < B);      // false

// 2) logical OR (||)
console.log(A == B || A > B);      // true
console.log(A == B || A < B);      // false

// 3) logical NOT (!)
console.log(!(A != B && A > B))     // false
console.log(!(A == B || A < B));    // true




// # STRING (+) concatenation Operator
// the concatenation operator (+) concatenates two string values together
// returning another string that is the union of the two operand strings.

console.log("Divyen");                      // Divyen
console.log("Divyen " + "Dalwadi");         // Divyen Dalwadi
var fName = "Divyen";
var sName = "Dalwadi";
console.log(fName + sName);                 // DivyenDalwadi


// conditional ternary operator

var XYZ = 10 ;
var ABC = (XYZ > 0) ? "Yes" : "No";
console.log(ABC);                           // Yes
