var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/MyDb';
var      fs     = require('fs');
var date = new Date();

MongoClient.connect(url,function(err,db){
assert.equal(err,null);
console.log('connected wit MyDb');
var backupdata = {};
var collection = db.collection('collection1');

backup();

 function backup(){
var   current_hour = date.getMinutes();
  
    collection.find({}).toArray(function(err,docs){
  assert.equal(err, null);
  var temp=JSON.stringify(docs);
  console.log("->",temp);
console.log(docs);

//console.log(out);
fs.writeFile('backup.txt', temp,(err)=>{
  if(err) console.log(err);
});

});

//Backup will be done after every 6 hours...

setTimeout(backup,1000*60*60*6);

}
}};