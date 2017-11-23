
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/storeData'

MongoClient.connect(url, function(err, db) {
    
            var collection = db.collection('person');
            
            collection.find({name:"ram"},{name:1,_id:0,age:1,address:1}).toArray(function(err, items) {
              if (err) {
                console.log(err);
              } else {
                  if(items.length===0)
                    console.log("data is not available in mongodb")
                    console.log(items[0]);
              }          
            });
        });

