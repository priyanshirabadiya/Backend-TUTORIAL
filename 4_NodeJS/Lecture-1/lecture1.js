// File system Module

const fs = require('fs'); // comman JS
// import * as fs from "fs";



// file open, close, write, read, append, update, rename, delete

// ---------------------------------------------- OPEN FILE METHOD-----------------------------------------------

// Open method

// fs.open("./hello.txt" , (err,result) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File open successfully");
//     }
// })

// fs.openSync("./hello.txt");
// console.log("File open successfully by syncronous method");


// ---------------------------------------------- WRITE FILE METHOD-----------------------------------------------


// fs.writeFile('./hello.txt','Hello , How have been you??' , (err) => {
//     if(err) {
//         console.log('There is an error');
//     }
//     else{
//         console.log('Write in file successfully');
//     }
// })


// fs.writeFile('./hello.txt', 'Hello , How have been you its second time inserted data ??', (err) => {
//     if (err) {
//         console.log('There is an error');
//     }
//     else {
//         console.log('Write in file successfully');
//     }
// })


// fs.writeFileSync("./hello.txt" , "Hello that's a Synchoronously added data" );
// console.log("Synchoronously added");

// WriteFile by creating newFile

// let data = `
// #include<stdio.h>
// int main(){
//     printf("SkillQode");
//     return 0;
// }
// `
// fs.writeFileSync('./hello.c' , data);
// console.log('File write successfully');


// ---------------------------------------------- READ FILE -----------------------------------------------


// fs.readFile('./hello.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data);
//     }
// })

// let a = fs.readFileSync('./hello.txt','utf-8');
// console.log(a);

// function add(a, b) {
//     return a + b;
// }

// function multipication(a, b) {
//     return a * b;
// }


// let t1 = performance.now();
// console.log('Start time is : ====>', t1);
// console.log('Addition is: ', add(10, 10));
// fs.readFile('./hello.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log('Error occurs');
//     }
//     else {
//         console.log(result);
//     }
// })
// console.log('Multiplication is:', multipication(10, 50));
// let t2 = performance.now();
// console.log("Ending time is :  ====> ", t2);
// let t3 = t2 - t1;
// console.log("Difference is : ", t3);



// let t1 = performance.now();
// console.log('Start time is : ====>' , t1);
// console.log('Addition is: ' ,add(10,10) );
// let aa = fs.readFileSync('./hello.txt' , 'utf-8')
// console.log(aa);
// console.log('Multiplication is:' ,multipication(10,50) );
// let t2 = performance.now();
// console.log("Ending time is :  ====> " ,  t2);
// let t3 = t2 - t1;
// console.log("Difference is : " ,  t3);



// ---------------------------------------------- Append FILE -----------------------------------------------


// let data = `
// #include<stdio.h>
// int main(){
//     printf("SkillQode");
//     return 0;
// }`

// fs.appendFileSync('./hello.txt' , data);
// console.log('Append suceessfully');


// ---------------------------------------------- rename FILE -----------------------------------------------

// fs.renameSync('./hello.c' , './skill.c');
// console.log('Rename suceessfully');

// ---------------------------------------------- Delete FILE -----------------------------------------------

// fs.unlinkSync('./skill.c');
// console.log('File Deleted successfully');


