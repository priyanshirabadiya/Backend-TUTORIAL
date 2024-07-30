// other MongoDB Methods

// use mongodbmethods;
// db.createCollection("students");

// Bulk method

var bulk = db.students.initializeOrderedBulkOp();
bulk.insert({
  "fitst_name": "priyanshi",
  "last_name": "rabadiya"
});

bulk.insert({
  "first_name": "krishna",
  "last_name": "rabadiya"
});


bulk.execute();

db.students.find({ "fitst_name": "priyanshi" });

db.students.find({}).forEach(print);


// Bultwrite method
db.students.bulkWrite([
  { insertOne: { document: { first_name: "shubham", last_name: "rabadiya" } } }
])

db.students.updateOne({ "first_name": "shubham" }, { $set: { "first_name": "shubh" } });

// For get the collection name
db.getCollectionNames()

// cursor 
var mycursor = db.Mock2.find({id:3}).pretty()
mycursor.forEach(printjson)

// ForEach

db.collec2.find({})
  .projection({})
  .sort({_id:-1})
  .limit(100)
.forEach(print)






















