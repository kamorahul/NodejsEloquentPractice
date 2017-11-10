
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/details4";

MongoClient.connect(url, function(err, db) {

var myobj={"Firstname":"shubham","Lastname":"Arora","Details":9041941015};
db.collection("conicals").insertone(myobj, function(err,coll)
{
if(err)
throw err;
console.log("database inserted");
});
});
