// Arrow function
// write a function to take a 5 values and print it's mean
const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5;
}

console.log(mean(4, 5, 1, 2, 6));


// another function for average of two numbers 

function avg(x, y) {
    return (x + y) / 2
}

let a = 10;
let b = 15;
let c = 20;

console.log("The average of a and b is : ", avg(a, b))
console.log("The average of b and c is : ", avg(b, c))
console.log("The average of a and c is : ", avg(a, c))

// return nothing

const rn = (x, y, z) => {
    console.log(x + y + z);

}
console.log("\nTe function is return nothing")
rn(4, 5, 6);