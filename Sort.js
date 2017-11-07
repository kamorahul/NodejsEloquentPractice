var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var sortBy = { lastName: 1 };
  db.collection("kukami").find().sort(sortBy).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
