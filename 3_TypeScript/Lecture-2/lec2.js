// About boolean
// function boo(n:number){
//     return n % 5 == 0
// }
// console.log(boo(5))
// function divisable(a:number):boolean{
//     return a % 32 === 0;
// }
// console.log(divisable(32));
// Difference between any and unknown
// let a :any = "sdfsdf";
// // a++;
// console.log(a.toUpperCase());
// let val:unknown = 'ttytu';
// if(typeof val === 'number') val++;
// if(typeof val === 'string') val.toUpperCase();
// console.log(val);
// let num1:any = 5;
// num1 = "hello world";
// num1 = true;
// if(typeof num1 === 'number'){
//     console.log(num1 + 5);
// }else if(typeof num1 === 'string'){
//     console.log(num1);
// }else if(typeof num1 === 'boolean'){
//     console.log(num1);  
// }
// let num1:unknown = 5;
// num1 = "hello world";
// num1 = true;
// if(typeof num1 === 'number'){
//     console.log(num1 + 5);
// }else if(typeof num1 === 'string'){
//     console.log(num1);
// }else if(typeof num1 === 'boolean'){
//     console.log(num1);  
// }
// async function fetchData():Promise<unknown>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     return data;
// }
// async function processData(){
//     const response = await fetchData();
//     if(typeof response === "object" ){
//         console.log("Api is called");
//     }
// }
// processData()
// It isn't work on ES2016
// ------------------------------ Type interface in Typescript ------------------------------------
// it means no need to define type in variable
// ------------------------------ Array in Typescript ------------------------------------
// a) Array using squre brakets
// const numbers:number[] = [1,2,6,4]
// b) Using the Array constructor
// const number:number[] = new Array(1,3,8);
// console.log(typeof number);
// c) Using array of method
// const names :string[] = Array.of("priyanshi" , "shubham" , "krishna") 
// console.log(names[1]);
// Array methods
// const names :string[] = ["priyanshi" , "shubham" , "krishna"];
// console.log(names.length);
// const val1:number[] = [1,5,9,7,3];
// console.log(Array.isArray(val1));
// const val1:{name :string , age : number } = {name : "priyanshi" , age : 12 };
// console.log(val1);
// const val1 = [true , false , true];
// console.log(typeof val1);
var fruits = ["apple", "banana", "kiwi", "orange"];
// const newupdatesarray = fruits.push("naspati");
// fruits.pop()
// console.log(newupdatesarray);
// console.log(fruits);
// Iterating elements
// for(let i = 0 ; i < fruits.length ; i++ )
// {
//     console.log(fruits[i]);
// }
// for of loop give an array value
// for(const fruit of fruits ){
//     console.log(fruit);   
// }
// for in loop give an index
// for(const fruit in fruits ){
//     console.log(fruit);   
// }
// fruits.forEach((fruit:string) => {console.log(fruit)})
// ---------------------------------------Map and filter methods---------------------------------------------
// map method returns new array
var number = [1, 5, 7, 9, 8, 3];
// const db:number[] = number.map((e:number) => e*2)
// console.log(db);
// convert array of number to string
// const str:string[] = number.map((cur:number) => cur.toString())
// console.log(str);
// filter is not possible by using map method it you can use by using filter
// const greterthan:number[] = number.filter((e:number) => e > 5)
// console.log(greterthan);
// create a function called calculateAverage that takes an array of numbers as a parameter and returns the revage of those number
// const calculateAverage = (myarr: number[]) => {
//     const sum =  myarr.reduce((accumulator: number, currentVal: number) =>  accumulator + currentVal);
//     return sum/(myarr.length)
//  }
//  const average = calculateAverage([6, 8, 11, 10, 15, 12]);
//  console.log("Average of numbers :", average);
// Find maximum number
// function findM(n:number[]){
//     const findmax = Math.max(...n);
//     return findmax;
// }
// console.log(findM([45,2,78,6,7]));
