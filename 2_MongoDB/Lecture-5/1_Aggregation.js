// AGGRIGATION PIPELINE


// find / projection method
// remember that in projection you can't give 0 and 1 value at same time but can can give _id means default id of mongo db as 0 value when you use 1

db.Mock2.find({ "gender": "Male", "id": 5 });
db.Mock2.find({}, { "gender": 1, "id": 1 })
db.Mock2.find({}).select({ "id": 1, "gender": 1 })
db.Mock2.find({ $or: [{ id: 1 }, { id: 2 }] }).projection({ "first_name": 1, "last_name": 1 })

db.Mock2.aggregate([
    {
        $project: {
            "_id" : 0 , "first_name": 1 
        }
    }
])

// match method             

db.Mock2.aggregate([
    {
        $match: {
            "first_name": "Cull"
        }
    }
])

// projection with match method


db.Mock2.aggregate([
    {
        $project: {
            "id": 1, "first_name": 1, "last_name": 1
        }
    },
    {
        $match: {
            $or: [{ "gender": "Male" }, { "id": { $gt: 10 } }, { "first_name": "Raine" }]
        }
    }
])

// Sort method

db.Mock2.find({}).sort({ id: 1 })  // set data in accending order
db.Mock2.find({}).sort({ id: -1 })   // set data in decending order

db.Mock2.aggregate([
    {
        $sort: {
            id: 1
        }
    }
])

// will give sorted data by id 
db.Mock2.aggregate([
    {
        $sort: {
            id: 1
            // id : -1
        }
    },
    {
        $project: {
            "first_name": 1,
            "last_name": 1,
            "id": 1
        }
    }

])


// limit and skip method

db.Mock2.find({}).limit(5).skip(3)   // give 2 records

db.Mock2.aggregate([{ $skip: 5 }, { $limit: 15 }, { $project: { id: 1 } }])  //give 15 records

db.Mock2.aggregate([
    {
        $limit: 15
    },
    {
        $skip: 5
    }
])  // give 10 records



// count method

db.Mock2.aggregate().count("count")

db.Mock2.aggregate([
    {
        $match: (
            { "id": { $lte: 15 } }
        )
    },
    {
        $count: "Total"
    }
])




db.Mock2.aggregate([
    {
        $project: {
            gender: 1
        }
    },
    {
        $group: {
            _id: "$gender",
            total: { $sum: 1 }
        }
    },
    {
        $addFields: {
            gender: "$_id"
        }
    },
    {
        $project: {
            _id: 0
        }
    },
    {
        $sort: {
            total: 1
        }
    }])




db.stud.insertMany([
    {
        "studId": "std001",
        "studName": "priya",
        "course": "Full-stack",
        "faculty": "tea002"
    },
    {
        "studId": "std002",
        "studName": "jatin",
        "course": "pythnn-dev",
        "faculty": "tea003"
    },
    {
        "studId": "std003",
        "studName": "Hina",
        "course": "Android-dev",
        "faculty": "tea001"
    },
    {
        "studId": "std004",
        "studName": "sruti",
        "course": "Ios-dev",
        "faculty": "tea002"
    },
    {
        "studId": "std005",
        "studName": "Raman",
        "course": "Ui-ux dev",
        "faculty": "tea001"
    }
])


db.teach.insertMany([
    {
        "teacherId": "tea001",
        "teacherName": "Jignesh",
        "hobbie": ["teaching", "communication"]
    },
    {
        "teacherId": "tea002",
        "teacherName": "visha",
        "hobbie": ["teach", "singing"]
    },
    {
        "teacherId": "tea003",
        "teacherName": "fena",
        "hobbie": ["dance", "write"]
    }
])





db.stud.aggregate([
    {
        $lookup: {
            from: "teach",
            localField: "faculty",
            foreignField: "teacherId",
            as: "faculty"
        }
    },
    {
        $unwind: "$faculty"
    }

])



// ------------------------------New universities ----------------------------------

db.universities.insertMany([
    {
        country: 'Spain',
        city: 'Salamanca',
        name: 'USAL',
        location: {
            type: 'Point',
            coordinates: [-5.6722512, 17, 40.9607792]
        },
        students: [
            { year: 2014, number: 24774 },
            { year: 2015, number: 23166 },
            { year: 2016, number: 21913 },
            { year: 2017, number: 21715 }
        ]
    },
    {
        country: 'Spain',
        city: 'Salamanca',
        name: 'UPSA',
        location: {
            type: 'Point',
            coordinates: [-5.6691191, 17, 40.9631732]
        },
        students: [
            { year: 2014, number: 4788 },
            { year: 2015, number: 4821 },
            { year: 2016, number: 6550 },
            { year: 2017, number: 6125 }
        ]
    }
])


db.courses.insertMany([
    {
        university: 'USAL',
        name: 'Computer Science',
        level: 'Excellent'
    },
    {
        university: 'USAL',
        name: 'Electronics',
        level: 'Intermediate'
    },
    {
        university: 'USAL',
        name: 'Communication',
        level: 'Excellent'
    }
])



// this method count all documents of project mean total count is 2
db.universities.aggregate([
    {
        $project: { name: 1 }
    },
    {
        $count: "count"
    }
])

// This method first group all data as per condition then it will sum those documents 
db.universities.aggregate([
    {
        $group: { _id: "$name", totaldocs: { $sum: 1 } }
    }
])


db.universities.aggregate([
    { $group : { _id : '$name', totaldocs : { $sum : 1 } } },
    { $out : 'aggResults' }
])
  
