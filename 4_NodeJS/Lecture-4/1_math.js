// const math = require('./0_hello')
// We can also destructure value also  
const {add , sub} = require('./0_hello');

// This will overhide value so that you should write it with using destructring or simple by using = .
// console.log(math(1,5));
// console.log(math(1,5));

// console.log(math.add(10,5));
// console.log(math.sub(10,5));


// By using destructring you don't need to write add.

console.log(add(1,5));


