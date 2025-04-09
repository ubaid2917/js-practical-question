// count duplicate item in array 

//& Example
 // using reduce method 

 const arr = [1, 2, 3, 4, 5, 6, 7, 8,12,4,5,2,3,1]

 const count = arr.reduce((acc,item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
 }, {});

 console.log(count) 



//  using foreach method 
 
let res = {}
const count2 = arr.forEach((item) => {
    res[item] = (res[item] || 0 ) + 1;
    return res;
})

console.log('res', res);