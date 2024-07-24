// tsc filename.ts => Typescript Compailer from creating js file it will create javascript file for compailation of typescript 
// node filename.js => It will used for run a program. It will run whole program.
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
var negateFunction = function (value) { return value * 10; };
console.log(negateFunction(10));
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
