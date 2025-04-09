// * Higher order function 

// Higher order function is a function that take another function as an argument (callback)

// can return a function 


// & Example 

function greet(name, callback){
    console.log(`Hi ${name}`)
    callback()
}

function sayGoodBye(){
    console.log('Goodbye!')
}

greet('Ubaid', sayGoodBye);


//? here greet is higher order function because it takes another function (callback) as an arguments



// &Example
// Example of function that return another function 


function multiplier(factor){
    return function(number){
        return number * factor
    }
}

const double = multiplier(2)
console.log(double(10))   // 20


const triple = multiplier(3)
console.log(triple(5));  // 15

// ? multiplyer is a higher order function because it returns another function





//^=================== common bultin higher order function =============================

// 1  map()   - Transform each array element 
// 2 filter() - filter elements based on a condition
// 3 reduce() - reduce an array into a single value
