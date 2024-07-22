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
var num1 = 5;
num1 = "hellow world";
// num1 = true;
if (typeof num1 === 'number') {
    console.log(num1 + 5);
}
else if (typeof num1 === 'string') {
    console.log(num1);
}
else if (typeof num1 === 'boolean') {
    console.log(num1);
}
