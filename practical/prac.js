//  febinochi series 

// let n1 = 0;
// let n2 = 1;

// let nextNum;

// let number = 10;

// for(let i = 0; i< number; i++){
//     let nextNum = n1 + n2;
//     console.log(n1);
//     n1= n2;
//     n2 = nextNum;
// }


//  febinochi series 
// let n1 = 0;
// let n2 = 1;

// let nextNum;

// let number = 20; 

// for(let i = 0; i<number; i++){
//     let nextNum = n1 + n2;
//     console.log(n1);
//     n1 = n2;
//     n2= nextNum
// }



//  move all the 0 to the last of array 
let arr = [0, 0, 10, 20, 0, 30, 405, 60, 0];

let nonzero = arr.filter(num => num !== 0);
let zero = arr.filter(num => num === 0);
nonzero.push(...zero)

console.log('nonzero', nonzero);
// console.log('zero', zero);


//  move all the 0 to the start of array

let arr2 = [0, 0, 10, 20, 0, 30, 405, 60, 0];
let nonZero2 = arr2.filter(num => num !== 0);
let zero2 = arr2.filter(num => num === 0);

zero2.push(...nonZero2)
console.log('nonZero2', nonZero2);
console.log('zero2', zero2);



// count duplicate elements in array using for lop 
let arr3 = [10, 20, 30, 40, 50, 10, 30,40, 20, 20, 60, 70, 80,80, 90, 100];
let count = {};

for(let i = 0; i<arr3.length; i++){
    if(count[arr3[i]]){
        count[arr3[i]] += 1;
    }else{
        count[arr3[i]] = 1;
    }
}

console.log('count', count) 



// count duplicate elements in array using reduce method

// Example 1
let arr4 = [10, 20, 30, 40, 50, 10, 30,40, 20, 20, 60, 70, 80,80, 90, 100];
let count2 = arr4.reduce((acc, item)=>{
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {})

console.log('count2', count2); 


// Example 2
let arr5 = [10, 20, 30, 40, 50, 10, 30,40,,100,60, 20, 20, 60, 70, 80,80, 90, 100];

let count3 = arr5.reduce((acc,item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {})

console.log('count3', count3);

 


// using for each method 
let arr6 = [10, 20, 30, 40, 50, 10, 30,40,,100,60, 20, 20, 60, 70, 80,80, 90, 100];
let count4 = {};

arr6.forEach((item) => {
    count4[item] = (count4[item] || 0 ) + 1;
    return count4;
})


console.log('count4', count4);
  


// * ================================== remove duplicate item ===================

//  remove duplicate item in array using 

let arr7 = [10, 20, 30, 40, 50, 10, 30,40,,100,60, 20, 20, 60, 70, 80,80, 90, 100];
const res3 = arr7.filter((item, index) => arr7.indexOf(item) === index);

console.log('res3', res3);


//  example 2 

let arr8 = [10, 20, 30, 40, 50, 10, 30,40,,100,60, 20, 20, 60, 70, 80,80, 90, 100];
let res4 = arr8.filter((item, index) => arr8.indexOf(item) === index);

console.log('res4', res4);


//  example 3 
let arr9 = [10, 20, 30, 40, 50, 10, 30,40,,100,60, 20, 20, 60, 70, 80,80, 90, 100];
let res5 = arr9.filter((item, index) => arr9.indexOf(item) === index);
console.log('res5', res5); 



//  remove duplicate item in array using filter method

// function removeDuplicate(arr){
//     let uniqueArray = [];
//     // create empty array to store unique items 
//     let seen = {}
//     for(let i = 0; i<arr.length; i++){
//        if(!seen[arr[i]] && arr[i] !== undefined){
//         uniqueArray.push(arr[i]);
//         seen[arr[i]] = true;
//        }
//     }
//     return uniqueArray;

// }

// let arr10 = [10, 20, 30, 40, 50, 10,, 30,40,100,60, 20, 20, 60, 70, 80,80, 90, 100];
// let res6 = removeDuplicate(arr10);
// console.log('res6', res6);  




//  Example 2 

function removeDuplicate(arr){
    let uniqArr = [];

    let seen = {};

    for(let i = 0; i<arr.length; i++){
        if(!seen[arr[i]] && arr[i] !== undefined){
            uniqArr.push(arr[i]);

            seen[arr[i]] = true;
        }
    }

    return uniqArr;
}

let arr11 = [10, 20, 30, 40, 50, 10,, 30,40,100,60, 20, 20, 60, 70, 80,80, 90, 100];
let res7 = removeDuplicate(arr11);
console.log('res7', res7);




//  higher order function 

function greet(name, callback){
    console.log(`Hi ${name}`);
    callback();
}

function sayGoodBye(){
    console.log('Goodbye!');
}

greet('Ubaid', sayGoodBye);  


// 



