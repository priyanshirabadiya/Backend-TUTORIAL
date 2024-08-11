
const fs = require('fs');
const os = require('os');
// Blocking...
// console.log("1");

// const result =  fs.readFileSync("./test.txt" , "utf-8");
// console.log(result);

// console.log("2");

// Non - blocking

// console.log("1");
// fs.readFile("./test.txt" , "utf-8" , (err , res) => {
//     console.log(res);
// });
// console.log("2");


// Default theread size is = 4
// Max? = 8 

console.log(os.cpus().length);  // So i can use maximum 8 threads






