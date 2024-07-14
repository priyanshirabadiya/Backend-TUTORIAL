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

// Date datatype























