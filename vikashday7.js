var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/day7";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var count=0;
console.log("Id and Key changes at interval of 1000");
  for(var i=0;i<100000;i++)
  {
   var obj = [{ my_id: 1, name: 'Vikash',age:22, my_id:count },
               { key: 1, name: 'Singh',address:"Siwan", key:count }];
    if(i%1000==0)
    {
      count=count+1;
      my_id=count;
   
    }
  db.collection("fordata").insert(obj, function(err, res) {
    if (err) throw err;
    console.log(res);
    });
// db.collection("fordata").find({},{"_id":0});
  // db.collection("fordata").find({},{"_id":0}).count();

  }
    db.close();
});


