
var MongoClient = require('mongodb').MongoClient;

module.exports={
// Creating database
 createDatabase:function(databaseName){
  var url="mongodb://localhost:27017/"+databaseName;
  MongoClient.connect(url,function(err,db){
    if(err) throw err;
    else
    console.log("Database created");
    db.close();
  });

},

// Create Collections
createCollection:function(dbName,collectionName){
  var url="mongodb://localhost:27017/"+dbName;
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection(collectionName, function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
},

// assigning schemas
setSchema:function(url,collectionName,demoSchema){
  schema={validator:{$and:[demoSchema]}};
MongoClient.connect(url,function(err,db){
  if(err) throw err;
  db.collection(collectionName,schema,function(err,res){
    if(err) throw err;
    console.log("schema connected to database");
    db.close();
  });
});

},

// Insert Values
insertValues:function(url,collectionName,values,many=false){
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  else if (many==true) {
    db.collection(collectionName).insertMany(values, function(err, res) {
      if (err) throw err;
      console.log(res.insertedCount+" values inserted");
      db.close();
    });
  }
  else{
  db.collection(collectionName).insertOne(values, function(err, res) {
    if (err) throw err;
    console.log("One value inserted:");
    db.close();
  });
} });
}
}//end of JSON
