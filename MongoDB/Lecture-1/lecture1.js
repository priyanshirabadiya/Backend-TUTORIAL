// 1st create collection

db.createCollection("users");

// insert data(single)

db.users.insertOne({
    "name": "priyanshi rabadiya",
    "age": 22,
    "email": "priyanshi@gmail.com"
});

db.users.insertMany([
    {
        "name": 'john Doe',
        "age": 21,
        "gender": "male"
    },
    {
        "name": "jolly peter",
        "age": 34,
        "email": "jolly@gmail.com",
        "hobbies": ["cricket", "holleyball", 'football']
    },
    {
        "name": "priyanka chopra",
        "gender": "female",
        "qualities": {
            "first": "Miss world",
            "second": "Bolleywood actress",
            "third": "Holleywood actress"
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
    "C0002" , "Mamta Muzumdar" , "Madras" , 780001 , "Tamil nadu" , 0
])


db.users.find(); 

// db.users.

