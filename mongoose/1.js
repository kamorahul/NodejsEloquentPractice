var mdb = require('mongodb').MongoClient;
var json=require('./myjson.json');

var url="mongodb://localhost:27017/";
var keys=Object.keys(json);
var myobj = new Object();

module.exports = {
  mdbcreate:function(dir, col,schema) {
    url= url + dir;
    mdb.connect(url,function(err,db){
    if (err) {
      throw err;}else{
      db.createCollection(col, function(err, db) {
        if (err){
            throw err;
          }else{
            db.collection(col,schema,function(err,res){
            if(err) throw err;
                console.log("schema connected to database");
              });
            console.log(col+" collection in Db " + dir +" is created.\n\n\n");
            db.close();
            }
        });
      }
    });
  },
   
  mdbinsert:function(dir,col,myobj){
      mdb.connect(url, function(err, db) {
        if (err) throw err;
        else{
              db.collection(col).insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("One value inserted:");
              db.close();
          });
        }
      });
    }
  }