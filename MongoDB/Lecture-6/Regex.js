// use newdatabase

// pattern matching using regex
// REGEX IN MONGODB

db.table1.find({"gender":{$regex: "Male"}})

// This will work if its text is case insensitive, $options:”$i” is used to match both lower case and upper case pattern in the given string(i.e., “software”).
db.table1.find({"gender":{$regex: "female",$options:"i"}})


// Displaying details of the employee whose name starts with b:

db.table1.find({"name":{$regex: "^b"}})

// Displaying details of the employee whose name ends with i:

db.table1.find({"name":{$regex:"i$"}})

// pattern matching without using regex

db.table1.find({"name":/an/}) //answers will be bansi and mansi










