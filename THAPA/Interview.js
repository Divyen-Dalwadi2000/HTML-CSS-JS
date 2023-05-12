// 1) Difference between null vs undefined?
    var useless = null;
    console.log(useless);                    // null
    console.log(typeof(useless));            // object         =>> BUG
    
    // standby means the variable value cannot define now 
    var standBy;
    console.log(standBy);                    // undefined   
    console.log(typeof(standBy));            // undefined 



// 2) What is NaN
    console.log("Divyen" - "Dalwadi");       // NaN          (Not a Number)   
    // =>> NaN is a property of global Object
    // =>> In Other Word , It is a variable  of Global Scope
    // =>> The initial value of a NaN is Not-A-Numbner