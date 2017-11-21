var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var oldData = { firstName: "sontino" };
  var updatedData = { $set: { firstName: "Sontino" } };
  db.collection("kukami").updateOne(oldData, updatedData, function(err, res) {
    if (err) throw err;
    console.log("Your data is updated ");
    db.close();
  });
});


