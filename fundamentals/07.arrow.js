let name = ()=>{
    return "Samcodeonline";
}

name (); // "Samcodeonline"

(function sam(){
    console.log("Hello, this is an IIFE function");
})();

(()=>{
    console.log("Hello, this is an IIFE arrow function");
})();

((name)=>{
    console.log(`Hello, this is an IIFE arrow function with parameter: ${name}`);
})("Samcodeonline");

// in order to avoid the pollution due to global variables, we can use IIFE
// (Immediately Invoked Function Expression) to create a private scope
// and avoid the pollution of the global scope
// this is useful when we want to create a module or a library
// that does not interfere with the global scope
// this is also useful when we want to create a private scope for our code
// and avoid the pollution of the global scope

// IIFE is a function that is defined and executed immediately

