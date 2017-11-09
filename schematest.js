var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
db.createCollection("users",

   { validator: { $and : [ {

         firstName : { $type: "string",$exists: true },

         lastName : { $type: "string",$exists: true },

          phoneNumber : { $type: "string", $exists: true },

        email : { $regex: /[a-zA-Z]@mongodb\.com$/ },

       password : { $type: "string" } }]

   },

    validationLevel: "strict" }, function(err, col) {

    if (err) return callback(err);

    module.exports.users = col;

  });
  console.log('schema done');
  db.close();
});
