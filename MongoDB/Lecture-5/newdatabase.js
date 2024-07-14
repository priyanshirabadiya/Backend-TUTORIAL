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











