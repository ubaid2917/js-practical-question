// * Null and undefined in js 

   //? Null: A value that represents no value, absence of value, or an intentional absence of a value.
   //? Undefined: A variable that has not been assigned a value.


// * 1️⃣ undefined
// ✅ A variable is undefined when:

// It has been declared but not assigned a value.
// A function does not return anything explicitly.
// A missing object property is accessed.





// & Example of undefined

// Example 1
let a;
console.log(a);  // Output: undefined

// Example 2 
function test(){}
console.log(test()); // Output: undefined

// Example 3
let obj = {};
console.log(obj.name); // Output: undefined



// & Example of null
// Example 1
let y = null;
console.log(y);  // Output: null

// Example 2
let obj2 = {name: null};
console.log(obj2.name); // Output: null




