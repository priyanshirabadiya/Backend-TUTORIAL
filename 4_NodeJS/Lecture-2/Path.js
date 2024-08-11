// // Path Module

// const path = require('path')
// const base = path.basename('C:\\temp\\myfile.html');
// const base = path.basename('D:\\Backend-tutorial\\4_NodeJS\\Lecture-2\\Path.js');
// const base = path.basename('D:/Backend-tutorial/4_NodeJS/Lecture-2/Path.js');

// const base = path.basename(path.join('D:', 'Backend-tutorial', '4_NodeJS', 'Lecture-2'));
// console.log(path.join('D:', 'Backend-tutorial', '4_NodeJS', 'Lecture-2'));

// const dir = path.dirname('/foo/bar/baz/asdf/jhiku/quux');
// const ext = path.extname('index.html');
// console.log(base);
// console.log(dir);
// console.log(ext);



// ------------------------------------------------------------------------------------------------------------------


// It will change your forward slace into backword slase in terminal



const path = require('path');

// dirname => give name of path
// console.log(path.dirname('D:/Backend-tutorial/4_NodeJS/Lecture-2/Path.js'));
// console.log(path.dirname(__dirname));
// ans : D:/Backend-tutorial/4_NodeJS/Lecture-2

// extname => give name of extension 
// console.log(path.extname('D:/Backend-tutorial/4_NodeJS/Lecture-2/Path.js'));
// console.log(path.extname(__filename));
// ans => .js


// console.log(path.basename('D:/Backend-tutorial/4_NodeJS/Lecture-2/Path.js'));
// Path.js


// const mypath = path.parse('D:/Backend-tutorial/4_NodeJS/Lecture-2/Path.js');
// const mypath = path.parse(__dirname);
// console.log(mypath.root)
// console.log(mypath.name)
// console.log(mypath);


// console.log(__filename);
// console.log(__filename,'.js');
// // ans: D:\Backend-tutorial\4_NodeJS\Lecture-2\Path.js


// It give path by creating 
// console.log(path.join('/search' , 'label' , 'course/python' , 'oop' , '..' ));  // \search\label\course\python
// console.log(path.join('/search' , 'label' , 'course/python' , 'oop' , '..', '..' )); // \search\label\course
// console.log(path.join('/search' , 'label' , 'course/python' , 'oop' , '..' , 'hello' )); // \search\label\course\python\hello
// console.log(path.join(__filename,'code'));



// console.log(path.normalize('c:\\temp\\\\foo\\bar')); // c:\temp\foo\bar
// console.log(path.normalize('c:\\temp\\\\foo\\bar\\..')); // c:\temp\foo
// console.log(path.win32.normalize('c:////temp\\\\/\\/\\/foo//bar'));  // c:\temp\foo\bar



// console.log(path.isAbsolute('//server'));  // true 
// console.log(path.isAbsolute('\\/\server')); // true
// console.log(path.isAbsolute('\\\\server')); // true
// console.log(path.isAbsolute('c:/foo/..')); // true
// console.log(path.isAbsolute('bar\\baz')); // false
// console.log(path.isAbsolute('bar/baz')); // false
// console.log(path.isAbsolute('.')); // false


// path.relative( from, to )

// const path1 = path.relative("geeks/website", "geeks/index.html"); 
// console.log(path1) 
   
// const path2 = path.relative("users/admin", "admin/files/website"); 
// console.log(path2) 

// // When both the paths are same 
// // It returns blank string 
// const path3 = path.relative("users/admin", "users/admin"); 
// console.log(path3) 


// resolve path

// console.log("Current directory:", __dirname);
  
// // Resolving 2 path-segments
// // with the current directory
// const path1 = path.resolve("users/admin", "readme.md");
// console.log(path1)
  
// const path2 = path.resolve("users", "admin", "readme.md"); // D:\Backend-tutorial\4_NodeJS\Lecture-2\users\admin\readme.md
// // const path2 = path.resolve();  // D:\Backend-tutorial\4_NodeJS\Lecture-2

// console.log(path2)
  


let path1 = path.format({ 
    root: "/sdjkfh", 
    dir: "/home/user/personal", 
    base: "details.txt", 
}); 
console.log("Path 1:", path1); 







