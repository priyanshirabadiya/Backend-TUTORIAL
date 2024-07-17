// use "importeddata";

db.Mock2.find({});

// COMPARISION OPERATORS

// equel to 
db.Mock2.find({ "gender": { $eq: 'Male' } });
db.Mock2.find({ "first_name": { $eq: "Krishna" } })

// not equel to 
db.Mock2.find({ 'gender': { $ne: "Male" } })
db.Mock2.find({ "id": { $ne: 1 } });

// greater than
db.Mock2.find({ 'id': { $gt: 5 } })
    .projection({ id: 0, _id: 0 })
    .sort({ id: 1 })
    .forEach(printjson)

// greaterthan equel to
db.Mock2.find({ "id": { $gte: 5 } })

// lessthan 
db.Mock2.find({ "id": { $lt: 5 } })

// lessthan equel to
db.Mock2.find({ "id": { $lte: 5 } })

// in 
db.Mock2.find({"first_name" : {$in : ["Cull" , "Ruddy" ]} })

// nin : not in
db.Mock2.find({"first_name" : {$nin : ["Cull" , "Ruddy" ]} })


// LOGICAL OPERATOR

// and

db.Mock2.find({ $and: [{ con1 }, { con2 }] })
db.Mock2.find({ $and: [{ gender: "Male" }, { id: 5 }] })

// db.Mock2.find({$and : [{gender : "Male"} , {id : 5} , {id : 3} ]})   // this will give an empty data set if you need this 2nd then use above example

db.Mock2.find({
    gender: "Male",
    $or: [{ id: 5 }, { id: 3 }]
})

// or 
db.Mock2.find({ $or : [{gender : "Male"} , {id : 5}]});  //give 432 records
db.Mock2.find({ $or : [{id : 1} , {id : 5}]});   // give 2 records

// nor : not or
db.Mock2.find({$nor : [{id : 1} , {id : 2} ]})
db.Mock2.find({$nor : [{id : 1} , {id : 8} , {"gender" : "Male" }]})

// not 
db.Mock2.find({"gender" : {$not :{ $eq :  "Female"}}})
db.Mock2.find({"id" : {$not : {$gt : 5}}})







