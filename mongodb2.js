var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb1";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var schema={pearson:{
    $and: [
      {
        "firstName": {$type: "string", $exists: true}
      },
      {
        "lastName": { $type: "string", $exists: true}
      },
      {
        "phoneNumber": {
          $type: "string",
          $exists: true,
          $regex: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
        }
      },
      {
        "email": {
          $type: "string",
          $exists: true
        }
      }
    ]
}
};
  db.collection("customers",schema, function(err, res) {
    if (err) throw err;
    console.log("Collection created!");

  });
  var myobj = { firstName: "ashish",
    lastName: "yadav",
    phoneNumber: "959-230-7032",
    email:"ashishyadav9515@gmail.com"
    };
  // throws  error becoz of validation failed if one of the documment is missign in myobj
  // inserts successfully if all documents are prese
  db.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("data entry done!!!");
    db.close();
  });
});
