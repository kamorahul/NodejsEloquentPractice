var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  var myobj = {'firstName':'chandra','lastName':'Shekar','phoneNumber':'8500268652','email':'d.chandrasheker@mongodb.com','password':'chandra'};
  db.collection("users").insertOne(myobj, function(err, res) {
      if (err) throw err;
  else{
      console.log("1 document inserted");
  }    db.close();
  });
})
