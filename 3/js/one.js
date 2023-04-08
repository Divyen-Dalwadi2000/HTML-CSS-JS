let marks =
{
    Divyen: 95,
    Milan: 96,
    Sumit: 98,
    Semil: 99
}

// for in loop 
for (key in marks) {
    console.log("The marks of " + key + "The Marks are : " + marks[key]);
}

// for loop
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + "The Marks are : " + marks[Object.keys(marks)[i]]);
    
}