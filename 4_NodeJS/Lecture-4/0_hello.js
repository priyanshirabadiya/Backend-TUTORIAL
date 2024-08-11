// // console.log("Hello welcome to nodeJS");

// // ------------------------ Module in nodeJS ------------------------

// function add(a,b){
//     return a + b;
// }

// function sub(a,b){
//     return a - b;
// }

// // This will overhide value so that you should write it in an object
// // module.exports = add;
// // module.exports = sub;


// // Single Export with Multiple Properties
// module.exports = {
//     add , sub
// }



// ------------------------ Another way by using direct export function ------------------------


exports.add = (a,b) => a + b;
exports.sub = (a,b) => a - b;

