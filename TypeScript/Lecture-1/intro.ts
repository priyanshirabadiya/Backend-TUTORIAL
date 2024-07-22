// tsc filename.ts => Typescript Compailer from creating js file it will create javascript file for compailation of typescript 
// node filename.js => It will used for run a program. It will run whole program.


// let a : number = 45;
// a = 56;
// console.log(a);


// let b : string = "Hello world";
// console.log(b);


// let c : boolean = true;
// console.log(c);


// let num:number = Number("10");
// console.log(typeof num);
// console.log(num);


// let big : number = 457896541;
// console.log(typeof(big));
// console.log(big);


// This will not throw an error in javascript and give type of byself is number
// let byself =  "hello" ;
// byself = 45;
// console.log(typeof(byself));

// ****------------------------------------------ Array

// const names: string[] = [];
// names.push("Dylan"); 
// names.push("Raha")
// console.log(names);


// const names: readonly string[] = ["Dylan" , "afsodifio"];
// console.log(names);


// const numbers = [1, 2, 3]; // inferred to type number[]
// numbers.push(4);

// console.log(typeof numbers);  //object

// const num:number[] = [1,5,45,4];


// -------------------------------------------Functions

// Simple function
// function add(a:number , b:number){
//     return a + b ;
// }
// console.log(add(1 , 5));

// fat arrow function
// let mul = (a:number , b:number) => { return a * b }
// console.log(mul(5,5));

// function with return type : The meaning of last string is that return type of function must be string or else it will cause an error
// function sum(a:number , c:number , b:string):string{
//     return a + c + b ;
// }
// console.log(sum(3,3,"5"));

// function with return type Date
// function getTime(): Date {
//     const now = new Date();
//     return new Date(now.getFullYear())
// }
// console.log(getTime());

// function getT():number{
//     return new Date().getFullYear()
// }
// console.log(getT());


// function with return type void : You can't return any value in this function so type of this function is void means empty or nan to return

// function printhello():void {
//     console.log("Hello world");
// }

// printhello()


// function with return type Boolaen

// function bool(a :boolean , b :boolean):boolean {
//     return a && b 
// }
// console.log(bool(true , false));

// Optional Parameters 👍
// the `?` operator here marks parameter `c` as optional
// function addi(a: number, b: number, c?: number) {
//     return a + b + (c || 0);
// }
// console.log(addi(2,5,5));



// Defult parameter / value with parameter 👍 

// function num(a: number = 5, b: number = 2 ): void {
//     console.log(a**b);
// }
// num(); 


// default parameter is only used when we don't add any value as parameter  
// function pow(value: number, exponent: number = 2) {
//     return value ** exponent;
// }
// console.log(pow(2,5)); //32



// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.
// function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
//     return dividend / divisor;
// }

// console.log(divide({ dividend: 10, divisor: 2 }));

// function summ({firstval , secondval} : {firstval : number , secondval : number}){
//     return firstval + secondval ;
// }
// console.log(summ({firstval : 20 , secondval : 1 }));





// Rest Parameters
// function add(a: number, b: number, ...rest: number[]) {
//     return a + b + rest.reduce((p, c) => p + c);
// }

// console.log(add(10,10,10,10,10));


// function addition(a : number , b : number , ...c:number[]){
//     return a + b + c.reduce((g,t) => g + t);
// }
// console.log(addition(10,10,10,10,10));


// Task

// find palidrome or not

// const ispalidrome = (num:string):boolean => {
//     let rev = num.split("").reverse().join("")
//     return rev === num;
// }
// console.log(ispalidrome("1321"));


// -----------------------------NO IDEA-----------------------------------

// type Negate = (value: number) => number;

// // in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
// const negateFunction: Negate = (value) => value * 10;

// console.log(negateFunction(10));

// -------------------------------Type Annotation----------------------------------------

// let newnum:number = 10;
// console.log(typeof(newnum.toString()));
// console.log(typeof newnum);


// let sqrt:number = Math.sqrt(25);
// console.log(sqrt);
 

// let nanvalue : number = NaN;
// console.log(typeof nanvalue);


// let fname:string = "priyanshi";
// let lname:string = " rabadiya";
// let sum:string = fname + lname ;
// console.log(sum);


// let sentence:string = "Hello this is priyanshi rabadiya" 
// let sentencelength:number = sentence.length
// console.log(sentencelength);

// let text:string = "This is sentence for uppercase and lowercase"
// let uupercase:string = text.toUpperCase();
// let lowercase:string = text.toLowerCase();
// console.log(uupercase);
// console.log(lowercase);


// let str:string = "This is string to make string as substring";
// let substr:string = str.substring(0,10);
// console.log(substr);


// const str1:string = "this is string 1";
// const str2:string = "this is string 2";
// const strcm:boolean = (str1 === str2)
// console.log(strcm);


// const product:string = "jewellry";
// const price:number = 45 ;
// const templeteliterals = `this is templete literals where product is ${product} and price is ${price}$ `
// console.log(templeteliterals);


// create own type

// type fruits = 'mango' | 'apple' | 'banana';
// function showfruits() : fruits{
//     return "apple";
// }

// console.log(showfruits());

// type cars = 'thar' | 'BMW' | 'swift';
// function showcars(name : cars ) :void{
//     console.log(name);
// }
// showcars('BMW')


// const strchar = "This is string with character."
// const charat = strchar.charAt(2)
// console.log(charat); // i

// const strchar = "Thas is string with character."
// const charat = strchar.charCodeAt(2)
// console.log(charat); // 97

// const conc1 = "this is first string";
// const conc2 = " And this is second string";
// const con = conc1.concat(conc2);
// console.log(con);

// const strchar:string = "Thas is string with character."
// const indf:number = strchar.indexOf('i')
// console.log(indf);

// const strchar:string = "This is a string with characters.";
// const lastIndf = strchar.lastIndexOf('i'); 
// console.log(lastIndf); 

// const str1: string = "this is string 2";
// const str2: string = "this is string 1";
// const comparisonResult = str1.localeCompare(str2);
// console.log(comparisonResult); // This will log -1, 0, or 1 based on the comparison //  Output will be 1 since str1 > str2 in lexicographical order

// const str1: string = "this is string 1";
// const str2: string = "this is string 2";
// const match1:string[] | null = str1.match(/string/g);
// console.log(match1);
// const digits1 = str2.match(/\d+/g) ;
// console.log(digits1);



// const replacestr = str1.replace("string" , "text");
// console.log(replacestr);

// const str2: string = "this is string 2";
// const serchind = str2.search(/string/g);
// console.log(serchind);

// const str = "This is string for split";
// const spstr = str.split(" ");
// console.log(spstr);

// const str = "This is string for split";
// const spstr = str.split("").join('');
// console.log(spstr);

// const str:string = "This is string for split";
// const subst:string = str.substring(4,7);
// console.log(subst);  // give 5 ,6 indexof character


// const str1:string = "This is string for split";
// // const lowerStr1 = str1.toLocaleLowerCase('tr-TR'); // Convert using Turkish locale
// const lowerStr1 = str1.toLocaleLowerCase(); // Convert using Turkish locale
// console.log(lowerStr1);

// const num: number = 42;
// console.log(num.valueOf()); // Output: 42




