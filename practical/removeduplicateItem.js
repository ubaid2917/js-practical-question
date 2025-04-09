//  remove duplicate item form array

let arr = [1, 2, 3, 4, 56, 7, 2, 3, 5, 7];

let uniqArr = [...new Set(arr)];

console.log(uniqArr);



// using filter method 

const uniqArr2 = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqArr2);



// without any builtin method 
//^ Example 1 
function removeDuplicate(arr) {
    let uniqueArray = [];     // create empty array to store unique items
    for (let i = 0; i < arr.length; i++) {     // loop all items in array 
        let isDuplicate = false;

        //    check duplicate item in the array 
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }

        //  add unique element to array 
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }

    // return unique array
    return uniqueArray;
}

let numbers = [10, 20, 10, 30, 40, 20, 10, 40];
console.log(removeDuplicate(numbers));




// ^ Example 2  recommended 

function removeDuplicateItems(arr){ 
    // create empty array
   let uniqArr = []
    
   // create hash map to track seen element
   let seen = {} 

   // loop the array on all elements 
   for(let i = 0; i< arr.length; i++){
     // if the element is not seen before
     if(!seen[arr[i]]){
        uniqArr.push(arr[i]);
        // mark the element as seen
        seen[arr[i]] = true;  // setting value to true for the first time, it's a unique element

     }
   }

   return uniqArr;
} 

let numbers2 = [10, 20, 10, 30, 40, 20, 10, 40];
console.log(removeDuplicateItems(numbers2));  // [10, 20, 30, 40]



function removeDuplicateItemFrom(arr){
    let uniqArr = [];

    let seen = {};

    for(let i = 0; i<arr.length; i++){
        if(!seen[arr[i]]){
            uniqArr.push(arr[i]);
            seen[arr[i]] = true;
        }
    }

    return uniqArr;
}

let numbers3 = [10, 20, 10, 30, 40, 20, 10, 40];
console.log(removeDuplicateItemFrom(numbers3));  // [10, 20, 30, 40]
