// use newdatabase

db.createCollection("table1")

db.getCollectionNames().length

db.table1.insertOne(
    {
        "fname": "priyanshi",
        "lname": "rabadiya",
        "age": 18,
        "hobbies": ["coding", "reading", "playing"],
        "email": "priyanshi@gmail.com"
    }
)


db.table1.insertMany([
    {
        "fname": "shubham",
        "lname": "sinha",
        "age": 45,
        "hobbies": [
            { "main": "cricket" },
            { "temporary": "reading" },
            { "best": "coding" }
        ]
    },
    {
        "fname": "manjuben",
        "lname": "rabadiya",
        "work": "housewife",
        "age": 30
    }
])

db.table1.insertOne({
    "fname": "lata",
    "lname": "shrivastva",
    "age": 45,
    "email": "lata@gmail.com"
})

db.table1.insertOne({
    "fname": "neha",
    "lname": "jethvani",
    "age": 23,
    "email": "neha@gmail.com",
    "hobbies": {
        "first": "reading",
        "second": "working",
        "third": "shopping"
    }
})



db.table1.find({}).pretty()

db.table1.find({ "fname": "neha" })

// exist method

db.table1.find({ "email": { $exist: true } })

// update documents

db.table1.updateOne(
    { 'fname': 'shubham' },
    { $set: { "age": 15, "gender": "Male" } },
    { upset: true }
)

db.table1.updateMany(
    { "lname": { $exists: true } },
    { $set: { "lname": "Rabadiya", "gender": "Female" } },
    { upset: true }
)

db.table1.updateMany(
    { "fname": "shubham" },
    { $set: { "gender": "Male" } },
    { upset: true }
)

// delete and drop documents

db.table1.deleteOne({ "hobbies": ["coding", "reading", "playing"] })

db.table1.drop()
db.newdatebase.drop()


// import data from external file show process in lecture 3

// findAndModify document  

db.table1.findAndModify({query:{"age" : 55} ,update:{ age : 32 }})

// Simple find for reminding
db.table1.find({ "age": { $gt: 5 } })

db.table1.find({ "age": { $in: [15, 30] } })

db.table1.find({ $nor: [{ "gender": "Male" }, { "age": { $gte: 30 } }] })

// create new collection

// {
// 	"_id" : ObjectId("6693c370e198e64b552f4e94"),
// 	"name" : "priya",
// 	"gender" : "Female",
// 	"cid" : 1,
// 	"salary" : 10000
// },

// {
// 	"_id" : ObjectId("6693c370e198e64b552f4e95"),
// 	"name" : "jegnesh",
// 	"gender" : "Male",
// 	"cid" : 2,
// 	"salary" : 15000
// },

// {
// 	"_id" : ObjectId("6693c370e198e64b552f4e96"),
// 	"name" : "shubham",
// 	"gender" : "Male",
// 	"cid" : 3,
// 	"salary" : 5000
// },

// {
// 	"_id" : ObjectId("6693c370e198e64b552f4e97"),
// 	"name" : "bansi",
// 	"gender" : "Female",
// 	"cid" : 4,
// 	"salary" : 20000
// },

// {
// 	"_id" : ObjectId("6693c370e198e64b552f4e98"),
// 	"name" : "Deep",
// 	"gender" : "Male",
// 	"cid" : 5,
// 	"salary" : 10000
// }

// bulkWrite
db.table1.bulkWrite([
    { insertOne: { document: [{ "name": "mansi", "gender": "Female", "cid": 6, "salary": 50000 }] } },
    { updateOne: { filter: { "name": "Deep" }, update: { "name": "Depali" } } }
]);
// findOneAndReplace document
db.table1.findOneAndReplace({ "cid": 2 }, { "name": "jatin", "cid": 17 })


// -------------------------Arithmetic Operator using aggregation-------------------------

// Addition : +

db.table1.aggregate([
    { $match: { "gender": { $in: ["Female", "Male"] } } },
    {
        $project: {
            name: 1, gender: 1, salary: {
                $add:
                    ["$salary", "$salary"]
            }
        }
    }
])


db.table1.aggregate([
    { $match: { "gender": { $in: ["Female", "Male"] } } },
    {
        $project: {
            name: 1, gender: 1, salary: {
                $add:
                    ["$salary", 200]
            }
        }
    }
])

// subtract : -

db.table1.aggregate([
    { $match: { "gender": { $in: ['Female', "Male"] } } },
    { $project: { name: 1, gender: 1, salary: { $subtract: ["$salary", "$salary"] } } }
])


// Multiply : *

db.table1.aggregate([
    { $match: { "gender": { $in: ["Female", "Male"] } } },
    { $project: { name: 1, gender: 1, salary: { $multiply: ["$salary", "$salary"] } } }
])

// divide : /

db.table1.aggregate([
    { $match: { "gender": { $in: ["Female", "Male"] } } },
    { $project: { name: 1, gender: 1, salary: { $toInt: { $divide: ["$salary", "$salary"] } } } }
])

// mod : %
db.table1.aggregate([
    { $match: { "gender": { $in: ["Female", "Male"] } } },
    {
        $project: { name: 1, gender: 1, salary: { $mod: ["$salary", 20000] } }
    }
])

// sqrt

db.table1.aggregate([
    {
        $project: { name: 1, gender: 1, salary: { "SquareRoot": { $toInt: { $sqrt: "$salary" } } } }
    }
])

// pow : set all value of salary is 16
db.table1.aggregate({
    $project: { name: 1, gender: 1, salary: { $pow: [4, 2] } }
})



// -------------------------UPDATE OPERATORS-------------------------


// update method is deprecated so use updateOne and updateMany as much as posible
// max
db.table1.update({ "name": "priya" }, { $max: { salary: 50000 } })

// set
db.table1.updateOne({ "name": "priya" }, { $set: { salary: 15000 } })

// min
db.table1.update({ name: "priya" }, { $min: { salary: 10000 } })

// inc
db.table1.update({ name: "priya" }, { $inc: { salary: 5000 } })

// mul : this will multiply salary by 2
db.table1.update({ name: "priya" }, { $mul: { salary: 2 } })

// rename field
// set column
db.table1.updateMany({ "middle": { $exists: false } }, { $set: { "middle": "" } }, { upset: true });
// rename column
db.table1.updateMany({ "middle": "" }, { $rename: { "middle": "Middle_name" } }, { upset: true })

// rename collction

db.table1.renameCollection("newtable")

db.table1.find()

db.newtable.renameCollection("table1")

// set date
// currentDate
db.table1.updateMany({}, { $currentDate: { "Date": true } })

// new Date
db.students.updateMany({"Date":{$exists: true}},{$set:{"Date":new Date("2024-07-15")}})



// -------------------------ARRAY EXPRESSION OPRATORS-------------------------

// create new collection

db.arrayoperator.insertMany([
    {
        "name": "priyanshi",
        "gender": "Female",
        "hobbies": ["Dansing", "singing", "playing"]
    },
    {
        "name": "hitali",
        "gender": "Female",
        "hobbies": ["eating", "funing"]
    }
])

// isarray : It will give value in true and false
db.arrayoperator.aggregate({ $match: { "name": "priyanshi" } },
    { $project: { name: 1, gender: 1, isthisarray: { $isArray: "$name" } } })

db.arrayoperator.aggregate({ $match: { "name": "priyanshi" } },
    {
        $project: {
            name: 1, gender: 1, nameisarray: { $isArray: "$name" },
            hobbiisarray: { $isArray: "$hobbies" }
        }
    })


// size : give size of hobbies array 
db.arrayoperator.aggregate({ $match: { name: "priyanshi" } },
    {
        $project: { name: 1, gender: 1, sizeofhobby: { $size: "$hobbies" } }
    })

// array elementAt
db.arrayoperator.aggregate([
    { $match: { name: "priyanshi" } },
    {
        $project: {
            name: 1, gender: 1, firstelement: { $arrayElemAt: ["$hobbies", 0] },
            secelement: {
                $arrayElemAt: ["$hobbies", 2
                ]
            }
        }
    }
])


db.arrayoperator.aggregate({ $match: { name: "priyanshi" } })

db.arrayoperator.updateOne({ "name": "priyanshi" }, { $set: { "hobbie2": ["chill", "laugh"] } })

// concatArrays
db.arrayoperator.aggregate({ $match: { "name": "priyanshi" } },
    {
        $project: {
            name: 1, gender: 1, concatedarray: { $concatArrays: ["$hobbies", "$hobbie2"] }
        }
    })


// revese array
db.arrayoperator.aggregate({ $match: { name: "priyanshi" } },
    { $project: { name: 1, gender: 1, revesearray_is: { $reverseArray: "$hobbies" } } })



// ------------------------- ARRAY UPDATE OPERATORS -------------------------

db.students.insertMany([
    {
        "name": "Rohit",
        "branch": "CSE",
        "joining Year": 2018,
        "language": ["Ruby"],
        "articles": [
            { "language": "Java", "tArticles": 50 },
            { "language": "C#", "tArticles": 100 },
            { "language": "Python", "tArticles": 90 }
        ],
        "personal": {
            "state": "Delhi",
            "age": 24,
            "semesterMarks": [70, 73.3, 76.5, 78.6]
        }
    },
    {
        "name": "Sumit",
        "branch": "CSE",
        "joining Year": 2017,
        "language": ["Java", "C"],
        "articles": [
            { "language": "Java", "tArticles": 80, "pArticles": 23 },
            { "language": "C#", "tArticles": 100, "pArticles": 30 },
            { "language": "Perl", "tArticles": 200, "pArticles": 40 }
        ],
        "personal": {
            "state": "MP",
            "age": 24,
            "semesterMarks": [89, 80.1, 78, 71]
        }
    }
]);


// $pull : remove elements 
db.students.updateOne({name:"Rohit"},{$pull:{"language":"Uide"}})

db.students.updateOne({ name: "Rohit" },
    { $pull: { "personal.semesterMarks": { $lte: 75 } } }
)

db.students.updateMany({},
    { $pull: { articles: { language: "Java", tArticles: 50 } } },
    { multi: true })

db.students.updateMany({}, { $pull: { articles: { language: "C#", tArticles: 100 } } })

db.students.updateMany({}, { $set: { articles: { "language": "C#", "tArticles": 100, } } })

db.students.updateMany(
    {},
    [
        {
            $set: {
                articles: {
                    $cond: {
                        if: { $isArray: "$articles" },
                        then: {
                            $concatArrays: ["$articles", [
                                { "language": "C#", "tArticles": 100 },
                                { "language": "Perl", "tArticles": 200 },
                                { "language": "Java", "tArticles": 80 }
                            ]]
                        },
                        else: [
                            "$articles",
                            { "language": "C#", "tArticles": 100 },
                            { "language": "Perl", "tArticles": 200 },
                            { "language": "Java", "tArticles": 80 }
                        ]
                    }
                }
            }
        }
    ]
);


// pop : This operator is used to remove the first or the last item from the array. -1:mean first element

db.students.update({ name: "Sumit" },
    { $pop: { "personal.semesterMarks": -1 } })

// push method : this will add elements in existing array where using set method you can't add in exist array elements 

db.students.update({ name: "Rohit" }, { $push: { language: { $each: ["js", "Uide", "C++"] } } })

// add simple value after creating table
db.students.updateMany({}, { $set: { "gender": "Male" } })
db.students.updateMany({}, { $set: { "hobbies": ["cricket", "smile"] } })

// add value in exist array after creating table
db.students.updateOne({ name: "Rohit" }, { $push: { hobbies: { $each: ["writing", "singing"] } } })

// add new object after creating table
db.students.updateOne({ name: "Rohit" },
    { $set: { "passion": { 'hardwork': '50%', 'consistency': '40%', 'leadership': '90%' } } })

// update data of object
db.arrayoperator.updateOne({ "name": "Rohit" }, { $set: { "passion.consistency": '60%' } })

// Positional Operator

db.students.updateOne({ name: "Rohit", "articles.language": "C#" },
    { $set: { "articles.$.tArticles": 150 } })

// position Modifier

db.students.update({ name: "Rohit" },
    {
        $push: {
            language: {
                $each: ["C#", "Perl"],
                $position: 0
            }
        }
    })

// addtoset method

db.students.update({ name: "Rohit" }, { $addToSet: { language: "JS++" } })

// slice method

db.students.update({ name: "Rohit" }, { $push: { language: { $each: [], $slice: -3 } } })



// ------------------------- STRING EXPRESSION OPERATOR --------------------------

// concat operator
db.students.aggregate([
    { $project: { name: 1, gender: 1, state: { $concat: ["Stat is:", "$personal.state"] } } }
])

// strcasecmp 
db.students.aggregate([{$project: {name:1, gender:1 , result:{$strcasecmp: ["$name","Sumit"]}}}])

// touppercase
db.students.aggregate({$project: {name:1,gender:1,uppercaseofname:{$toUpper: "$name"}}})

// tolowercase
db.students.aggregate({$project: {name:1,gender:1,lowercaseofname:{$toLower: "$name"}}})









