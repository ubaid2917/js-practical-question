// setImmediate vs process.nextTick

console.log("Start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

setImmediate(() => {
    console.log("setImmediate");
});

process.nextTick(() => {
    console.log("process.nextTick");
});

console.log("End");



// outpur is 
// start
// end
// process.nexTick()
// setTimeout(() 
// setImmidate