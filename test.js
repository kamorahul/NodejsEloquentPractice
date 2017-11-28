var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/shivam";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
var a=0;
for(var p=0 ; p<=parseInt("100000"); p++)
{

  var ob={name:"shivam12", address:"122/464",index:""+a};
  if(p%100==0){
  	a++;
  }
   db.collection("customers").insert(ob, function(err, res) {
    if (err) throw err;
    console.log(` $(ob) inserted`);
     });}
  // db.collection("customers").find({}).toArray(function(e,r){console.log(r);});
   db.close();
 
}); 
