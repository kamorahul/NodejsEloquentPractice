var valid=require('./app.js');

var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/validDb";

MongoClient.connect(url, (err,db)=>{
  if(err) throw err;
  console.log(" db create successfully");
  var collectionName="person";

  insertData(db,collectionName).then((message)=>{
      console.log(message);
      return readData(db,collectionName);
  }).then(result=>{
    console.log(result);
    console.log("db close successfully");
    db.close();
  }).
  catch(reason=>{
    console.log(reason);
    db.close();
    console.log("db close with error successfully");
  });
})

var insertData=(db,collectionName)=>{ //insert data to db
      return new Promise((resolve,reject)=>{
              db.createCollection(collectionName);
              var data = {
                "name": "Barack Obama",
                "address":  "W DC America",
                "votes": "12"     //string or integer
                };
              if(valid.match(data)) ///method defined in other file app.js
              {
                    db.collection(collectionName).insertOne(data,(err,res)=>{
                    if(err) reject("data cant be inserted");
                    resolve("data enter successfully");
                  });
              }
              else {
                console.log("error data not match to json schema");
              }
      });
};



var readData=(db,collectionName)=>{
      return new Promise((resolve,reject)=>{
             db.collection(collectionName).find({},{_id:0,name:1,address:1,votes:1}).toArray((err,result)=>{
             if(err) reject(err);
             resolve(result);

                });
    });
}
