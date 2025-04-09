
//  febinchoi series 
 let n1 = 0;
 let n2 =1;

 let number = 10;
 let nextNum;

 for(let i = 0; i<=number; i++){
    nextNum = n1 + n2;
    console.log(n1);
    n1 = n2;
    n2 = nextNum;
 }

 

// Question move all the zero to the end of the array
let arr = [0, 0, 10, 20, 0, 30, 405, 60, 0];  

let res = arr.filter(num => num !== 0); // Non-zero elements
let zeros = arr.filter(num => num === 0); // Zero elements

res.push(...zeros); // Append all zeros at the end

console.log('res', res); 


let arr2 = [0,0,,10,20,10,0,6,0,3,5,0];

let res2 = arr2.filter(num => num !== 0);
let zeros2 = arr2.filter(num => num === 0);

res2.push(...zeros2)
console.log('zero2', zeros2);

console.log('res2', res2);
