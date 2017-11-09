var mongoclient=require('mongodb').MongoClient;
//var assert=require('assert'); // to handle the errors

var url='mongodb://localhost:27017/database';

mongoclient.connect(url,function(err,db)
{
  if (err) throw err;
//assert.equal(err,f);
console.log("connected with database");

db.collection('identity',function(err,collection)
{
  collection.insert({empname:"abs",id:"1140552"});
  collection.find({}).toArray(function(err,doc){

  //assert.equal(err,null);
  console.log("data found");
  console.log(doc);
  });
})
});  // creates a collection of identity name

/*function(err,result)
{
assert.equal(err,NULL);
console.log("data inserted");
});*/
/*identity.find({}).toArray(function(err,doc){

assert.equal(err,null);
console.log("data found");
console.log(doc);
});
*/
