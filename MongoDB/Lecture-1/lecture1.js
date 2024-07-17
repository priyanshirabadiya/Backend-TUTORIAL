// MongoDB is the most popular NoSQL databases and is widely adopted for storing and managing both structured and unstructured data
// Mongo db is fully case-sencitive. 

// Crud operation : Create operation
// create database

// use node5to7;

// 1st create collection

db.createCollection("users");
// insert data(single)

db.users.insertOne({
    "name": "john Doel",
    "age": 24,
    "email": "priyanshi@gmail.com"
})

// insert data(multiple)

db.users.insertMany([
    {
        "name": "jolly Doel",
        "age": 21,
        "gender": "Female",
        "email": "jolly@gmail.com"
    },
    {
        "name": "virat kohli",
        "age": 35,
        "email": "virat@gmail.com",
        "hobbies": ['cricket', 'music', 'dancing']
    },
    {
        "name": "anushka sharma",
        "gender": "Female",
        "movies": {
            "super_duper": "P_K",
            "most_famous": "Sultan",
            "floop": "Sui-dhaga"
        }
    }

])

// Tables from pdf

db.createCollection('Client_Master');

db.Client_Master.insertMany([
    {
        "Clientno": "C00001",
        "Name": "Ivan Bayross",
        "City": "Mumbai",
        "Pincode": 400054,
        "State": "Maharastra",
        "BalDue": 15000
    },
    {
        "Clientno": "C00002",
        "Name": "Ivan Bayross",
        "City": "Mumbai",
        "Pincode": 400054,
        "State": "Maharastra",
        "BalDue": 15000
    },
    "C0002", "Mamta Muzumdar", "Madras", 780001, "Tamil nadu", 0
])


db.users.find({});

