const fs = require('fs');

// OPEN FILE

fs.openSync("./0_hello.js");
// console.log('File open sucessfully');

// WRITE FILE

// Sysc... 
// fs.writeFileSync("./test.txt" , "Hello tisha..." )
// console.log('File created sucessfully');

// Asysc...
// fs.writeFile("./test.txt" , "Hello this is Async... way" , (err) => {});



// READ FILE

// const a = fs.readFile('./test.txt' , 'utf-8' , (err,data) => {
//     console.log(data);
// });
// // console.log(a);

// const a = fs.readFileSync('./test.txt' , 'utf-8');
// console.log(a);


// APPEND FILE

// fs.appendFileSync("./test.txt" , "Add this data" );

// RENAME FILE

// fs.renameSync("./test.txt" , "./skill.txt");
// fs.renameSync("./skill.txt" , "./test.txt");

// COPY FILE
// fs.cpSync('./test.txt' , "./copy.txt" );

// DELETE FILE

// fs.unlink("./test.txt") 

// STAT FILE
// console.log(fs.statSync('./test.txt').isFile());

// CREATE DIRECTORY / FOLDER

// fs.mkdirSync("Lectures");
// fs.mkdirSync("Lectures/a/b",{recursive:true});
