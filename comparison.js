//* == and ===

//? == (loose Equality comparison)

// comparison values without comparing thier data types
// perform type coercion meaning it convert operands to same data type comparison 

// & Example 

 console.log(5 == '5') // true   because it is checking values 
 console.log(0 == false) // true   it convert false into number
 console.log(null == undefined) // true   they both are null objects in javascript


 //? === (Strict Equality comparison)

// comparison values with thier data types
//  do not perform type coercion 

// & Example 

console.log(5 == '5') // false   because Number is not equal to String 
console.log(0 == false) // false  because Number is not equal to boolea
console.log(null == undefined) // false   they both are null and undefined both are different data type 


console.log(typeof(null));   //  object data type
console.log(typeof(undefined));  // undefined data type